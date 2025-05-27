const h = Vue.h;

const App = {
  data() {
    return {
      title: "Это свойство template",
    };
  },
  methods: {
    changeTitle() {
      this.title = "Изменили";
    },
  },
  template: `
      <div class="card center">
        <h1>{{title}}</h1>
        <button class="btn" @click="title = 'Изменили'">Change</button>
      </div>
    `,
  // render() {
  //   return h(
  //     "div",
  //     {
  //       class: "card center",
  //     },
  //     [
  //       h("h1", {}, this.title),
  //       h(
  //         "button",
  //         {
  //           class: "btn",
  //           onClick: this.changeTitle,
  //         },
  //         "Изменить"
  //       ),
  //     ]
  //   );
  // },
};

const app = Vue.createApp(App);
app.mount("#app");

// ========

let title = "Vue 3";
let message = "Title this:" + title;
// console.log(message);

const data = {
  title: "Vue 3",
  message: "Title this: Vue 3",
};

const proxy = new Proxy(data, {
  get(target, p) {
    console.log(object);
  },
  set(target, key, value) {
    console.log(object);
  },
});
