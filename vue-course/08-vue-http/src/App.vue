<template>
  <div class="container">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
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
            firstNFame: this.name,
          }),
          // eslint-disable-next-line prettier/prettier
        }
      );

      const firebaseData = await response.json;
      console.log(firebaseData);
      this.name = "";
    },
  },
};
</script>

<style></style>
