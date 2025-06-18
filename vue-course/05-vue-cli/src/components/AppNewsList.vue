<template>
  <ul>
    <li v-for="item in news">
      {{ item.title }}
    </li>
  </ul>
</template>

<script>
export default {
  inject: ["title", "news"],
};
</script>

<style></style>
