import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/content/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: () => import("../views/content/Main.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: Home
      },
      {
        path: "/base",
        name: "Base",
        component: () => import("../views/content/Base.vue")
      },
      {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/content/About.vue")
      },
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: '/user',
    component: () => import("../App.vue"),
    children: [
      {
        path: "home",
        name: "UserHome",
        component: () => import("../views/user/Home.vue")
      },
      {
        path: "setting",
        name: "UserSetting",
        component: () => import("../views/user/Setting.vue")
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
