/*!

=========================================================
* onemanpublisher - v2.0.0.
=========================================================

* Copyright 2020 onemanpublisher (https://onemanpublisher.com)

=========================================================

*/
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
