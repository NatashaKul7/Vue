<template>
  <div class="container">
    <div class="card">
      <h2>{{ $i18n("app.title") }}</h2>
      <button class="btn" @click="$alert('It is working')">Alert</button>

      <button class="btn" @click="changeLang">
        {{ $i18n("app.changeBtn") }}
      </button>

      <button class="btn primary" @click="modal = true">Open Modal</button>

      <Teleport to="body">
        <AppModal v-if="modal" @close="modal = false"></AppModal
      ></Teleport>
    </div>
  </div>
</template>

<script>
import AppModal from "./AppModal";
export default {
  inject: ["changeI18n"],
  data() {
    return {
      modal: false,
    };
  },
  methods: {
    changeLang() {
      this.changeI18n("en");
      this.$forceUpdate();
    },
  },
  components: { AppModal },
};
</script>

<style lang="scss" scoped></style>
