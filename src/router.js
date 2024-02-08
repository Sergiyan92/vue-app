import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ApartmentPage from "./pages/ApartmentPage.vue";
import Error from "./pages/ErrorPage.vue";

const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/apartments/:id", component: ApartmentPage, name: "apartment" },
  { path: "/:catchAll(.*)", component: Error, name: "error-page" },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
