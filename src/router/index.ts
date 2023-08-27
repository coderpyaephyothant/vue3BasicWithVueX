import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MyShop from "../views/MyShopList/MyShop.vue";
import fourOfour from "../views/404Page/404Page.vue";
import noteLists from "../views/NoteList/NoteList.vue";
import newFeed from "../views/NewFeed/NewFeed.vue";
import logInPage from "../views/LoginPage/LogInPage.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/404",
    name: "404-page",
    component: fourOfour,
  },
  {
    path: "/about",
    name: "about",
    alias: "/about-ms",
    component: () => import("../views/AboutView.vue"),
  },
  // {
  //   path: '/about-us',
  //   name: 'about-us',
  //   redirect:  '/about'
  // },
  {
    path: "/myShop",
    name: "myShop",
    component: MyShop,
  },
  {
    path: "/noteLists",
    name: "noteList",
    component: noteLists,
  },
  {
    path: "/newFeed",
    name: "newFeed",
    component: newFeed,
    beforeEnter: (to, from, next) => {
      const storedValue = localStorage.getItem("logInTrue");
      if (from.name == "logInPage" && storedValue !== "false") {
        console.log("storedValue", storedValue);
        next();
      } else {
        next("logInPage");
      }
    },
  },
  {
    path: "/logInPage",
    name: "logInPage",
    component: logInPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: fourOfour,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
