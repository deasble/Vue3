import { createApp } from "vue";
import App from "@/App.vue";
import store from "@/store";
import "@/assets/scss/index.scss";
import { icon } from "@/assets/icon/icons.js";

const app = createApp(App);

icon(app);

app.use(store).mount("#app");
