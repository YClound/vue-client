import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './route';
import App from './App.vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);
Vue.use(VueRouter);
const router = new VueRouter({
  ...routes
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
