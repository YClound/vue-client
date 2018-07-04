export default [
    {
        path: '/',
        name: 'index',
        meta: {title: '首页'},
        component: resolve => require(['@/pages/index.vue'], resolve)
    }, {
        path: '/login',
        name: 'login',
        meta: {title: '登录'},
        component: resolve => require(['@/pages/login.vue'], resolve)
    }, {
        path: '/introduce',
        component: resolve => require(['@/pages/main.vue'], resolve),
        children: [
            {
                path: '',
                name: 'introduce',
                meta: {title: '说明-首页'},
                components: {
                    default: resolve => require(['@/pages/introduce/index.vue'], resolve),
                    sidebar: resolve => require(['@/pages/introduce/sidebar.vue'], resolve)
                }
            }, {
                path: 'design',
                name: 'design',
                meta: {title: '说明-设计原则'},
                components: {
                    default: resolve => require(['@/pages/introduce/design.vue'], resolve),
                    sidebar: resolve => require(['@/pages/introduce/sidebar.vue'], resolve)
                }
            }]
    }, {
        path: '/components',
        component: resolve => require(['@/pages/components/main.vue'], resolve),
        children: [
            {
                path: '',
                name: 'components',
                meta: {title: '组件-首页'},
                component: resolve => require(['@/pages/components/index.vue'], resolve)
            }, {
                path: 'icon',
                name: 'icon',
                meta: {title: '组件-图标'},
                component: resolve => require(['@/pages/components/icon.vue'], resolve)
            }]
    }, {
        path: '/store',
        name: 'store',
        meta: {title: 'vuex状态管理'},
        component: resolve => require(['@/pages/store.vue'], resolve)
    }, {
        path: '*',
        name: '404',
        component: resolve => require(['@/pages/404.vue'], resolve)
    }
];
