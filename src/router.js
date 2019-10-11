import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import About from "./views/About.vue";
import Nupi from "./views/Nupi.vue";
import Contacts from "./views/Contacts.vue";

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
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/products/nupi",
      name: "nupi",
      component: Nupi
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    }
  ]
});
