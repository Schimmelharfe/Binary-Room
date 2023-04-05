import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/view-home.vue";
import AboutMe from "../views/view-tech-stack.vue";
import Projects from "../views/view-projects.vue";
import Contact from "../views/view-contact.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/tech-in-use",
    name: "Tech in use",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutMe,
  },
  {
    path: "/projects",
    name: " Projects",
    component: Projects,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    // () =>
    // import(/* webpackChunkName: "AboutUs" */ "../views/AboutUs.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
