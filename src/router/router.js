import { createWebHistory, createRouter } from "vue-router";
import Main from "../views/Main.vue";
import Signup from "../views/Signup.vue";

const routes = [
  {
    path: "/nft",
    component: Main,
  },
  {
    path: "/nft/signup",
    component: Signup,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
