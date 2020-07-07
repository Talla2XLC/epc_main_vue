import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Meta from "vue-meta";
import VueMq from "vue-mq";

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(Meta);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBiwLqffBCS8rkvfjPXdFXvVvdfVo-Rmvk",
    libraries: "places",
    region: "ru"
  }
});

Vue.use(VueMq, {
  breakpoints: {
    xs: 500,
    s: 700,
    m: 1200,
    l: 1800,
    xl: Infinity
  },
  defaultBreakpoint: "s"
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
