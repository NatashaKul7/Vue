<template>
  <div v-if="people.length !== 0">
    <div class="card inline" v-for="person in people" :key="person.id">
      <h3>{{ person.firstName }}</h3>
      <button class="btn danger" @click="$emit('remove', person.id)">
        Delete
      </button>
    </div>
  </div>
  <div v-else class="card center">
    <h4>There're no people yet</h4>
    <button class="btn" @click="$emit('load')">Load the list</button>
  </div>
</template>

<script>
export default {
  emits: ["load", "remove"],
  props: ["people"],
};
</script>

<style lang="scss" scoped>
.inline {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
