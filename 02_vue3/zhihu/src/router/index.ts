import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "首页",
      component: () => import("../views/index.vue"),
    },
    {
      path: "/detail/:id",
      name: "详情",
      component: () => import("../views/detail.vue"),
    },
  ],
});
