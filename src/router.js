import Vue from "vue";
import Router from "vue-router";
import Main from "./views/Main.vue";
import About from "./views/About.vue";
import News from "./views/News.vue";
import Contacts from "./views/Contacts.vue";
import Partners from "./views/Partners.vue";

Vue.use(Router);

export default new Router({
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
      path: "/news",
      name: "news",
      component: News
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts
    },
    {
      path: "/partners",
      name: "partners",
      component: Partners
    },
    {
      path: "/partners/:product",
      name: "catalogDetailed",
      component: Partners,
      props: true
    }
  ]
});
