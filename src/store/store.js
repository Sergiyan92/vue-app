import { createStore } from "vuex";
import authModule from "./modules/auth";
import createPersistedState from "vuex-persistedstate";

const dataState = createPersistedState({
  paths: ["auth.token"],
});
export default createStore({
  modules: {
    auth: authModule,
  },
  plugins: [dataState],
});
