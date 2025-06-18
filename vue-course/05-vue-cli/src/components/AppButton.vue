<template>
  <button class="btn" :class="color" @click="$emit('action')">
    <slot />
  </button>
</template>

<script>
export default {
  emits: ["action"],
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "",
      validate(value) {
        return ["", "primary", "danger"].includes(value);
      },
    },
  },
};
</script>

<style></style>
