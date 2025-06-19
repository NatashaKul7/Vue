<template>
  <ul>
    <li v-for="item in news" :key="item.title">
      {{ item.title }}
      <span v-if="item.wasRead">!!!</span>
    </li>
  </ul>
</template>

<script>
export default {
  inject: ["title", "news"],
};
</script>

<style></style>
