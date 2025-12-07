import { createApp } from "vue";
import App from "./components/App.vue";
import "./theme.css";
import translatePlugin from "./translatePlugin";

const app = createApp(App);

const ua = {
  app: {
    title: "Як працюють плагіни у Vue",
    changeBtn: "Змінити мову",
  },
};

const en = {
  app: {
    title: "How plugins work in Vue",
    changeBtn: "Change language",
  },
};

app.use(translatePlugin, { ua, en });

app.mount("#app");
