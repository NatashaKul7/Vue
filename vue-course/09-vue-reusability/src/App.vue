<template>
  <div class="container">
    <app-alert
      v-if="alert"
      text="It is very important message"
      title="Attention!"
      type="danger"
      closable
      @close="alert = false"
    ></app-alert>
    <div class="card">
      <button class="btn primary" @click="toggleAlert">
        {{ alert ? "Hide" : "Show" }} messages
      </button>
    </div>

    <app-block></app-block>
  </div>
</template>

<script>
import AppAlert from "./components/AppAlert.vue";
import AppBlock from "./components/AppBlock.vue";

export default {
  data() {
    return {
      alert: false,
    };
  },
  methods: {
    toggleAlert() {
      this.alert = !this.alert;
    },
  },
  components: { AppAlert, AppBlock },
};
</script>

<style lang="scss" scoped></style>
