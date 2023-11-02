import { createApp } from "vue";
import "./style.css";
import router from "./router/router";
import App from "./App.vue";
import { MotionPlugin } from "@vueuse/motion";

createApp(App).use(MotionPlugin).use(router).mount("#app");
