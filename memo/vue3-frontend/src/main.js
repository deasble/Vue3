import { createApp } from 'vue'
import App from './App.vue'
import "@/assets/scss/tailwind.scss"
import icon from "@/icon/icons.js"

const app = createApp(App);

icon(app)

app.mount('#app')
