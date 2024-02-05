import { createRouter, createWebHistory } from "vue-router";
import Foo from "./pages/FooPage.vue";
import Bar from "./pages/BarPage.vue";
import HomePage from "./pages/HomePage.vue";
import ApartmentPage from "./pages/ApartmentPage.vue";
const routes = [
  { path: "/", component: HomePage, name: "home" },
  { path: "/item", component: ApartmentPage, name: "apartment" },
  { path: "/foo", component: Foo },
  { path: "/bar", component: Bar },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
