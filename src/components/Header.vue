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
          <div
            v-else
            key="bonjour"
            class="header__button header__bonjour"
          >
            Bonjour
          </div>
        </transition>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  name: "Header",
  setup() {
    const isLoggedIn = ref(false);

    onMounted(() => {
      const token = localStorage.getItem("token");
      if (token) {
        isLoggedIn.value = true;
      }
    });

    return {
      isLoggedIn,
    };
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
  align-items: center;
  justify-content: space-between;
}

.header__logo {
  height: 64px;
}

.header__nav {
  display: flex;
}

.header__button {
  font: 20px Inter, sans-serif;
  color: #fff;
  background: #042a2b;
  padding: 10px 24px;
  border-radius: 8px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 120px;
}

.header__button:hover {
  background: #031919;
}

/* Bonjour spécifique */
.header__bonjour {
  background: #cdb4db;
  color: #042a2b;
  font-weight: bold;
}

/* Animation lourde fade + slide */
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
