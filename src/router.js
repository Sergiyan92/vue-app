import { createRouter, createWebHistory } from "vue-router";

import store from "./store/store";
import Error from "./pages/ErrorPage.vue";

const HomePage = () => import("./pages/HomePage.vue");
const ApartmentPage = () => import("./pages/ApartmentPage.vue");
const Registration = () => import("./pages/Registration.vue");
const LoginPage = () => import("./pages/LoginPage.vue");
const MyOrders = () => import("./pages/MyOrders.vue");

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "home",
  },
  {
    path: "/apartments/:id",
    component: ApartmentPage,
    name: "apartment",
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/registration",
    component: Registration,
    name: "registration",
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login",
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/orders",
    component: MyOrders,
    name: "my-orders",
    meta: {
      requiresAuth: true,
    },
  },
  { path: "/:catchAll(.*)", component: Error, name: "error-page" },
];

const router = createRouter({ history: createWebHistory(), routes });
router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters["auth/isLoggedIn"];

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: "login" });
    }
  }

  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      next({ name: "home" });
    }
  }
  next();
});
export default router;
