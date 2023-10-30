import { createApp } from "vue";
import App from "./app.vue";
import Easyest from "@syf/components";
const app = createApp(App);
app.use(Easyest);
app.mount("#app");