import Vue from "vue";
import Main from "./Main.vue";
import router from "./router";
import store from "./store";
import Antd from "ant-design-vue";
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(Main)
}).$mount("#app");
