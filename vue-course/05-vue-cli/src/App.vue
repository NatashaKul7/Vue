<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Slots</h2>
    </div>
    <app-list>
      <template #default="slotProps">
        <span style="color: orange">
          <strong>{{ slotProps.idx }}</strong>
          {{ slotProps.iter }}</span
        >
      </template>
    </app-list>

    <app-blog>
      <p>This is text for the new blog</p>

      <template v-slot:header>
        <h3>This is Title</h3>
      </template>

      <template #footer>
        <hr />
        <small>This is footer</small>
      </template>
    </app-blog>
  </div>
</template>

<script>
import AppBlog from "./components/AppBlog.vue";
import AppList from "./components/AppList.vue";

export default {
  components: { AppBlog, AppList },
};
</script>

<style scoped lang="scss"></style>
