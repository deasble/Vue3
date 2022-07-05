import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/scss/index.scss";
import { icon } from "@/assets/icon/icon.js";

const app = createApp(App);

icon(app);

app.use(store).use(router).mount("#app");
