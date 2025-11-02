import { createApp } from "vue";
import App from "./components/App.vue";
import "./theme.css";
import translatePlugin from "./translatePlugin";

const app = createApp(App);

const ua = {
  app: {
    title: "Як працюють плагіни у Vue",
  },
};

const en = {
  app: {
    title: "How plugins work in Vue",
  },
};

app.use(translatePlugin, { ua, en });

app.mount("#app");
