import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import Meta from "vue-meta";
import VueMq from "vue-mq";
import Vue2TouchEvents from 'vue2-touch-events';

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(Meta);
Vue.use(Vue2TouchEvents);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBiwLqffBCS8rkvfjPXdFXvVvdfVo-Rmvk",
    libraries: "places",
    region: "ru"
  }
});

Vue.use(VueMq, {
  breakpoints: {
    s: 425,
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
