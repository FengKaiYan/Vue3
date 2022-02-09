import { createRouter, createWebHashHistory } from "vue-router";

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../view/todoList.vue"),
    },
    {
      path: "/about",
      component: () => import("../view/about.vue"),
    },
  ],
});
