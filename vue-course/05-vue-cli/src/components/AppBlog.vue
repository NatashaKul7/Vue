<template>
  <div class="card">
    <slot name="header"></slot>
    <slot name="default">No text</slot>
    <div v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
