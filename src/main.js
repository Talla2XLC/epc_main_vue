import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Meta from "vue-meta";

import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(Meta);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBiwLqffBCS8rkvfjPXdFXvVvdfVo-Rmvk",
    libraries: "places",
    region: "ru"
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
