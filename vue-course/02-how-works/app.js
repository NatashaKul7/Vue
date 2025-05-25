const App = {
  data() {
    return {
      myHtml: "<h1>Vue 3 App</h1>",
      title: "I am Groot",
      person: {
        name: "Natasha",
        surname: "Kulibaba",
        age: 29,
      },
      items: [1, 2, 3, 4, 5, 6],
    };
  },
  computed: {
    evenItems() {
      return this.items.filter((i) => i % 2 === 0);
    },
  },
  methods: {
    addItem() {
      this.items.unshift(this.$refs.myInput.value);
      this.$refs.myInput.value = "";
    },
    remove(i) {
      this.items.splice(i, 1);
    },
    log(item) {
      console.log(item);
    },

    // stopPropagation(event) {
    //   event.stopPropagation();
    // },
  },
};

const app = Vue.createApp(App);

app.mount("#app");
