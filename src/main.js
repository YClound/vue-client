// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from '@/App';
import routes from '@/router';
import store from '@/store';
import iView from 'iview';
import Axios from 'axios';
import VueRouter from 'vue-router';
import Utils from '@/assets/Utils';

import 'iview/dist/styles/iview.css';
import '@/assets/css/base.less';

Vue.config.productionTip = false;

Vue.use(iView);
Vue.use(VueRouter);
Vue.prototype.Axios = Axios;

const router = new VueRouter({
    routes: routes
});

// 定义页面title
router.beforeEach((to, from, next) => {
    const toPath = to.path;
    const isLogin = Utils.getStore('isLogin') || false;
    if (to.meta.title) {
        document.title = to.meta.title;
    } else {
        document.title = '后台管理平台';
    }
    // 用户登陆之后才能跳转首页
    if (isLogin) {
        if (toPath.indexOf('/login') > -1) {
            document.title = '首页';
            next('/');
            return;
        }
    } else {
        if (toPath.indexOf('/login') < 0) {
            document.title = '登录';
            next('/login');
            return;
        }
    }
    next();
});

window.Utils = Utils;
window.__router = router;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
