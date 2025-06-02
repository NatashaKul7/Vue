<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Relevant News {{ now }}</h2>
    </div>
    <!-- <app-news></app-news> -->
    <AppNews
      v-for="item in news"
      :key="item.id"
      v-bind:title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
    />
    <!-- <AppNews title="this is title 2" /> -->
  </div>
</template>

<script>
import AppNews from "./components/AppNews.vue";

export default {
  data() {
    return {
      now: new Date().toLocaleDateString(),
      news: [
        {
          title: "new 1",
          id: 1,
          isOpen: false,
        },
        {
          title: "new 2",
          id: 2,
          isOpen: false,
        },
      ],
    };
  },
  components: {
    // "app-news": AppNews,
    AppNews: AppNews,
  },
  // name: "App",
  // components: { TheHeader },
};
</script>

<style lang="scss"></style>
