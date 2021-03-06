import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Starred from "../components/Starred";
import Saved from "../components/Saved";
import Trash from "../components/Trash";
import NewLetter from "../components/NewLetter";
import Spam from "../components/Spam";
import Sent from "../components/Sent";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/starred",
    name: "Starred",
    component: Starred,
  },
  {
    path: "/saved",
    name: "Saved",
    component: Saved,
  },
  {
    path: "/trash",
    name: "Trash",
    component: Trash,
  },
  {
    path: "/new",
    name: "NewLetter",
    component: NewLetter,
  },
  {
    path: "/spam",
    name: "Spam",
    component: Spam,
  },
  {
    path: "/sent",
    name: "Sent",
    component: Sent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
