import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView";
import ProgressionView from "../views/ProgressionView";
import AdminView from "../views/AdminView.vue";

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
    meta: { requiresAuth: true },
  },
  { path: '/admin', 
    name: 'Admin', 
    component: AdminView },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");

  if (to.meta.requiresAuth && !token) {
    alert("Tu dois être connecté pour accéder à la progression.");
    // Si la route nécessite d'être connecté mais qu'on n'a pas de token
    next("/login"); // Redirection vers /login
  } else {
    next(); // Sinon navigation autorisée
  }
});

export default router;
