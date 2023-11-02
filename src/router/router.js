import { createWebHistory, createRouter } from "vue-router";
import Main from "../views/Main.vue";
import Signup from "../views/Signup.vue";

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/nft/",
      component: Main,
    },
    {
      path: "/nft/signup",
      component: Signup,
    },
  ],
});

export default router;
