<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Relevant News {{ now }}</h2>
      <span
        >Open: <strong>{{ openRate }}</strong> | Read:
        <strong>{{ readRate }}</strong></span
      >
    </div>
    <!-- <app-news></app-news> -->
    <AppNews
      v-for="item in news"
      :key="item.id"
      v-bind:title="item.title"
      :id="item.id"
      :is-open="item.isOpen"
      :was-read="item.wasRead"
      @open-news="openNews"
      @read-news="readNews"
      @unmark="unreadNews"
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
      openRate: 0,
      readRate: 0,
      news: [
        {
          title: "new 1",
          id: 1,
          isOpen: false,
          wasRead: false,
        },
        {
          title: "new 2",
          id: 2,
          isOpen: false,
          wasRead: false,
        },
      ],
    };
  },
  components: {
    // "app-news": AppNews,
    AppNews: AppNews,
  },
  provide() {
    return {
      title: "List of the news",
      news: this.news,
    };
  },
  methods: {
    openNews() {
      this.openRate++;
    },
    readNews(id) {
      const idx = this.news.findIndex((news) => news.id === id);
      this.news[idx].wasRead = true;
      this.readRate++;
    },
    unreadNews(id) {
      // const idx = this.news.findIndex((news) => news.id === id);
      // this.news[idx].wasRead = false;
      const news = this.news.find((news) => news.id === id);
      news.readNews = false;
      this.readRate--;
    },
  },
  // name: "App",
  // components: { TheHeader },
};
</script>

<style scoped lang="scss">
h2 {
  color: red;
}
</style>
