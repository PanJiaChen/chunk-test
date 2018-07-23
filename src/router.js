import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    // {
    //   path: "test",
    //   name: "test",
    //   component: () => import('./views/Test.vue')
    // },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue")
    }
  ]
});
