<template>
  <div class="card">
    <ul>
      <li v-for="(idx, item) in 5">
        <slot :iter="item" :idx="idx"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
