import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import Nupi from "./views/Nupi.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: Main
    },
    {
      path: "/products/nupi",
      name: "nupi",
      component: Nupi
    }
  ]
});
