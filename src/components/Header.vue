<template>
  <header class="header">
    <div class="header__inner">
      <router-link to="/" class="header__logo-link">
        <img
          src="@/assets/icons/logo.svg"
          alt="Flash Green logo"
          class="header__logo"
        />
      </router-link>
      <nav class="header__nav">
        <transition name="fade-slide">
          <router-link
            v-if="!isLoggedIn"
            key="login"
            class="header__button"
            to="/login"
          >
            Se connecter
          </router-link>
          <button
            v-else
            key="logout"
            @click="logout"
            class="header__button header__logout"
          >
            Se déconnecter
          </button>
        </transition>
      </nav>
    </div>
  </header>
</template>

<script>
import { watch } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "Header",
  data() {
    return {
      isLoggedIn: false,
      router: null,
    };
  },
  methods: {
    logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      this.isLoggedIn = false;
      this.router.push("/"); // Rediriger vers l'accueil
    },
    init() {
      const token = localStorage.getItem("token");
      this.isLoggedIn = !!token;
      this.router = useRouter();
    },
  },

  mounted() {
    this.init(); // Initialisation de la variable isLoggedIn
    this.$router.afterEach(() => {
      const token = localStorage.getItem("token");
      this.isLoggedIn = !!token; // Mettre à jour isLoggedIn après chaque navigation
    });
  },
};
</script>

<style scoped>
.header {
  width: 100%;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.header__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__button {
  font-size: 20px;
  background: var(--color-primary);
  color: #fff;
  padding: 10px 24px;
  border-radius: var(--radius);
}

.header__nav {
  display: flex;
  gap: 24px;
  font-size: 20px;
  color: var(--color-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
}

.header__logo {
  height: 64px;
}

/* Bouton Se déconnecter spécifique */
.header__logout {
  background: #cdb4db;
  color: #042a2b;
  font-weight: bold;
  border: none;
  cursor: pointer;
}

/* Animation */
.fade-slide-enter-active {
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55);
}
.fade-slide-leave-active {
  transition: all 0.3s ease-in;
}
.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(-20px) scale(0.9);
}
.fade-slide-enter-to {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0) scale(1);
}
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(0.9);
}
</style>
