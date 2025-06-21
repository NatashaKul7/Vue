import { createApp, defineAsyncComponent } from "vue";
import App from "./App.vue";
import TheHeader from "./components/TheHeader.vue";
import "./theme.css";

// App -> AppNews -> AppNewsList

const app = createApp(App);

// global registration
app.component("the-header", TheHeader);
app.component(
  "async-component",
  defineAsyncComponent(() => {
    return import("./components/AsyncComponent.vue");
  })
);

app.mount("#app");
