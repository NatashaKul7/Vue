<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="localIsOpen = !localIsOpen">Open</button>
    <p v-if="localIsOpen">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, placeat.
    </p>
  </div>
</template>

<script>
export default {
  //   props: ["title"],
  props: {
    // title: String,
    // id: Number,
    // isOpen: Boolean,
    title: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      //   validator(value) {
      //     return true;
      //   },
    },
  },
  data() {
    return {
      item: "Item",
      localIsOpen: this.isOpen,
    };
  },
};
</script>
