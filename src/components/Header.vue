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
        <router-link class="header__button" to="/login"
          >Se connecter</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
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
}

.header__logo {
  height: 64px;
}
</style>
