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
  methods: {
    // stopPropagation(event) {
    //   event.stopPropagation();
    // },
  },
};

const app = Vue.createApp(App);

app.mount("#app");
