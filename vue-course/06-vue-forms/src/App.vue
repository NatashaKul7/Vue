<template>
  <div class="container">
    <form class="card" @submit.prevent="submitHandler">
      <h1>Анкета на Vue разработчика!</h1>
      <!-- <div class="form-control" :class="{ invalid: errors.name }">
        <label for="name">Как тебя зовут?</label>
        <input
          type="text"
          id="name"
          placeholder="Введи имя"
          v-model.trim="name"
        />
        <p v-if="errors.name">{{ errors.name }}</p>
      </div> -->

      <app-input
        placeholder="Введи имя"
        :error="errors.name"
        label="Как тебя зовут?"
        v-model="name"
      ></app-input>

      <div class="form-control">
        <label for="age">Выбери возраст</label>
        <input
          type="number"
          id="age"
          value="20"
          max="70"
          v-model.number="age"
        />
      </div>

      <div class="form-control">
        <label for="city">Твой город</label>
        <select id="city" v-model="city">
          <option value="ods">Одесса</option>
          <option value="kyv">Киев</option>
          <option value="lvl">Львов</option>
          <option value="hrk">Харьков</option>
        </select>
      </div>

      <div class="form-checkbox">
        <span class="label">Готов к переезду в Токио?</span>
        <div class="checkbox">
          <label
            ><input type="radio" name="trip" v-model="relocate" value="yes" />
            Да</label
          >
        </div>

        <div class="checkbox">
          <label
            ><input type="radio" name="trip" v-model="relocate" value="no" />
            Нет</label
          >
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Что знаешь во Vue?</span>
        <div class="checkbox">
          <label
            ><input
              type="checkbox"
              name="skills"
              v-model="skills"
              value="Vuex"
            />
            Vuex</label
          >
        </div>
        <div class="checkbox">
          <label
            ><input
              type="checkbox"
              name="skills"
              v-model="skills"
              value="Vue CLI"
            />
            Vue CLI</label
          >
        </div>
        <div class="checkbox">
          <label
            ><input
              type="checkbox"
              name="skills"
              v-model="skills"
              value="Vue Router"
            />
            Vue Router</label
          >
        </div>
      </div>

      <div class="form-checkbox">
        <span class="label">Правила компании</span>
        <div class="checkbox">
          <label
            ><input type="checkbox" v-model="agree" /> С правила согласен</label
          >
        </div>
      </div>

      <button type="submit" class="btn primary">Отправить</button>
    </form>
  </div>
</template>

<script>
import AppInput from "./AppInput.vue";
export default {
  data() {
    return {
      name: "",
      age: 23,
      city: "ods",
      relocate: null,
      skills: [],
      agree: null,
      errors: {
        name: null,
      },
    };
  },
  components: { AppInput },
  methods: {
    formIsValid() {
      let isValid = true;

      if (this.name.length === 0) {
        this.errors.name = "Введите ваше имя";
        isValid = false;
      } else {
        this.errors.name = null;
      }
      return isValid;
    },
    submitHandler(e) {
      if (this.formIsValid()) {
        console.group("Form data");
        console.log("Name:", this.name.trim());
        console.log("Name:", this.age);
        console.log("Name:", typeof this.age);
        console.log("City:", this.city);
        console.log("Skills:", this.skills);
        console.log("Agree:", this.agree);
        console.groupEnd();
        this.name = "";
      }
    },
  },
};
</script>

<style>
.form-control p {
  color: red;
}

.form-control.invalid input {
  border-color: red;
}
</style>
