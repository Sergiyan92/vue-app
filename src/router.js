import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ApartmentPage from "./pages/ApartmentPage.vue";
import Error from "./pages/ErrorPage.vue";
import Registration from "./pages/Registration.vue";
import LoginPage from "./pages/LoginPage.vue";
const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/apartments/:id", component: ApartmentPage, name: "apartment" },
  { path: "/registration", component: Registration, name: "registration" },
  { path: "/login", component: LoginPage, name: "login" },
  { path: "/:catchAll(.*)", component: Error, name: "error-page" },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
