import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView";
import ProgressionView from "../views/ProgressionView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterView,
  },
  {
    path: "/progression",
    name: "Progression",
    component: ProgressionView,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
