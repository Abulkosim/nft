import { createWebHistory, createRouter } from "vue-router";
import Main from "../views/Main.vue";
import Signup from "../views/Signup.vue";
import Wallet from "../views/Wallet.vue";
import Marketplace from "../views/Marketplace.vue";
import Rankings from "../views/Rankings.vue";

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
  {
    path: "/nft/marketplace",
    component: Marketplace,
  },
  {
    path: "/nft/rankings",
    component: Rankings,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/nft",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
