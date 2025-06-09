<template>
  <div class="card">
    <h3>{{ title }}</h3>
    <button class="btn" @click="open">
      {{ isNewsOpen ? "Close" : "Open" }}
    </button>
    <button v-if="wasRead" class="btn danger" @click="unmark">
      Mark as unread
    </button>
    <div v-if="isNewsOpen">
      <hr />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, placeat.
      </p>
      <button v-if="!wasRead" class="btn primary" @click="mark">
        Read the new
      </button>
    </div>
  </div>
</template>

<script>
export default {
  //   props: ["title"],
  emits: {
    "open-news": null,
    "read-news"(id) {
      if (id) {
        return true;
      }
      console.log("no id parameter for emit");
      return false;
    },
    unmark: null,
  },
  props: {
    wasRead: Boolean,
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
      validator(value) {
        return value === true || value === false;
      },
    },
  },
  data() {
    return {
      isNewsOpen: this.isOpen,
      //   item: "Item",
      //   localIsOpen: this.isOpen,
    };
  },
  methods: {
    open() {
      this.isNewsOpen = !this.isNewsOpen;
      if (this.isNewsOpen) {
        this.$emit("open-news");
      }
    },
    mark() {
      this.isNewsOpen = !this.isNewsOpen;
      this.$emit("read-news", this.id);
    },
    unmark() {
      this.$emit("unmark", this.id);
    },
  },
};
</script>
