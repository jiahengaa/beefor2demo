import Vue from "vue";
import App from "./App.vue";

import beefor2 from "beefor2";
import "beefor2/dist/beefor2.css";

Vue.use(beefor2);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
