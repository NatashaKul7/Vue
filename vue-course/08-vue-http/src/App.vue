<template>
  <div class="container">
    <AppAlert :alert="alert" @close="alert = null"></AppAlert>

    <form class="card" @submit.prevent="createPerson">
      <h2>Work with data base</h2>

      <div class="form-control">
        <label for="name">Your name</label>
        <input type="text" id="name" v-model.trim="name" />
      </div>

      <button class="btn primary" :disabled="name.length === 0">
        Create a person
      </button>
    </form>

    <AppLoader v-if="loading"></AppLoader>

    <AppPeopleList
      v-else
      :people="people"
      @load="loadPeople"
      @remove="removePerson"
    ></AppPeopleList>
  </div>
</template>

<script>
import AppPeopleList from "./AppPeopleList.vue";
import AppAlert from "./AppAlert.vue";
import AppLoader from "./AppLoader.vue";
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      people: [],
      alert: null,
      loading: false,
    };
  },
  mounted() {
    this.loadPeople();
  },

  methods: {
    async createPerson() {
      // https://vue-with-http-57cbd-default-rtdb.europe-west1.firebasedatabase.app/people.json
      // this.name

      const response = await fetch(
        "https://vue-with-http-57cbd-default-rtdb.europe-west1.firebasedatabase.app/people.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: this.name,
          }),
          // eslint-disable-next-line prettier/prettier
        }
      );

      const firebaseData = await response.json;

      this.people.push({
        firstName: this.name,
        id: firebaseData.name,
      });
      this.name = "";
    },

    async loadPeople() {
      try {
        this.loading = true;
        const { data } = await axios.get(
          // eslint-disable-next-line prettier/prettier
          "https://vue-with-http-57cbd-default-rtdb.europe-west1.firebasedatabase.app/people.json"
        );

        if (!data) {
          throw new Error("The list of people is empty");
        }

        this.people = Object.keys(data).map((key) => {
          return {
            id: key,
            firstName: data[key].firstName,
          };
        });
        this.loading = false;
      } catch (error) {
        this.alert = {
          type: "danger",
          title: "Mistake",
          text: error.message,
        };
        this.loading = false;
      }
    },

    async removePerson(id) {
      try {
        const name = this.people.find((person) => person.id === id).firstName;

        await axios.delete(
          // eslint-disable-next-line prettier/prettier
          `https://vue-with-http-57cbd-default-rtdb.europe-west1.firebasedatabase.app/people/${id}.json`
        );
        this.people = this.people.filter((person) => person.id !== id);
        this.alert = {
          type: "primary",
          title: "Success",
          text: `User ${name} was deleted`,
        };
      } catch (error) {}
    },
  },
  components: { AppPeopleList, AppAlert, AppLoader },
};
</script>

<style></style>
