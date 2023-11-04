import { createWebHistory, createRouter } from "vue-router";
import Main from "../views/Main.vue";
import Signup from "../views/Signup.vue";
import Wallet from "../views/Wallet.vue";

const routes = [
  {
    path: "/nft",
    component: Main,
  },
  {
    path: "/nft/signup",
    component: Signup,
  },
  {
    path: "/nft/wallet",
    component: Wallet,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
