<template>
  <div class="container">
    <app-alert
      v-if="alert"
      text="It is very important message"
      title="Attention!"
      type="primary"
      @close="alert = false"
    ></app-alert>

    <div class="card">
      <button class="btn primary" @click="toggleAlert">
        {{ alert ? "Hide" : "Show" }} messages
      </button>
    </div>
  </div>
</template>

<script>
import AppAlert from "./AppAlert.vue";

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
  components: { AppAlert },
};
</script>

<style lang="scss" scoped></style>
