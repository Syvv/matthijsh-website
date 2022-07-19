import { createApp } from 'vue';
import App from './App.vue';
import { router } from "./routes";
import "./assets/scss/index.module.scss";

const app = createApp(App);
app.use(router);
app.mount('#app');
