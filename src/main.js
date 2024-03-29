import { createApp } from "vue";
import Notifications from "@kyvg/vue3-notification";
import store from "./store/store";

import App from "./App.vue";
import "./assets/scss/index.scss";
import router from "./router";

createApp(App).use(store).use(router).use(Notifications).mount("#app");
