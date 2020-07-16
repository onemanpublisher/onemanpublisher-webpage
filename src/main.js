/*!

=========================================================
* onemanpublisher - v2.0.0.
=========================================================

* Copyright 2020 onemanpublisher (https://onemanpublisher.com)

=========================================================

*/
import Vue from "vue";
import App from "./App.vue";
import i18n from './plugins/i18n';
import FlagIcon from 'vue-flag-icon';
import router from "./router";
import Argon from "./plugins/argon-kit";
import './registerServiceWorker'
import "vue-cookie-accept-decline/dist/vue-cookie-accept-decline.css";
import VueCookieAcceptDecline from "vue-cookie-accept-decline";
Vue.component("vue-cookie-accept-decline", VueCookieAcceptDecline);

Vue.use(FlagIcon);

Vue.config.productionTip = false;
Vue.use(Argon);
new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount("#app");
