<template>
    <header class="header">
      <div class="header__inner">
        <router-link to="/" class="header__logo-link">
          <img src="@/assets/logo.png" alt="Flash Green logo" class="header__logo" />
        </router-link>
  
        <!-- Burger icon sur mobile -->
        <button class="header__toggle" @click="toggleMenu" aria-label="Toggle navigation">
          <span class="header__burger"></span>
          <span class="header__burger"></span>
          <span class="header__burger"></span>
        </button>
  
        <nav :class="['header__nav', { 'header__nav--open': menuOpen }]">
          <router-link class="header__link"  to="/cards" @click="closeMenu">Cards</router-link>
          <router-link class="header__link"  to="/quiz"  @click="closeMenu">Quizz</router-link>
          <router-link class="header__button" to="/login" @click="closeMenu">Log in</router-link>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header',
    data() {
      return { menuOpen: false }
    },
    methods: {
      toggleMenu() { this.menuOpen = !this.menuOpen },
      closeMenu()  { this.menuOpen = false }
    }
  }
  </script>
  
  <style scoped>
  .header {
    width: 100%; 
    background: #fff;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  .header__inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .header__logo {
    height: 64px;
  }
  
  /* Burger */
  .header__toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 24px;
    height: 18px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .header__burger {
    width: 100%;
    height: 3px;
    background: #042A2B;
    border-radius: 2px;
  }
  
  .header__nav {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .header__link {
    font: 20px Inter, sans-serif;
    color: #042A2B;
    text-decoration: none;
  }
  .header__link:hover {
    text-decoration: underline;
  }
  .header__button {
    font: 20px Inter, sans-serif;
    color: #fff;
    background: #042A2B;
    padding: 10px 24px;
    border-radius: 8px;
    text-decoration: none;
  }
  .header__button:hover {
    background: #031919;
  }
  
  /* Responsive mobile */
  @media (max-width: 768px) {
    .header__toggle {
      display: flex;
    }
    .header__nav {
      position: absolute;
      top: 100%;
      right: 0;
      background: #fff;
      flex-direction: column;
      align-items: flex-start;
      padding: 16px;
      gap: 12px;
      width: 200px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transform: translateY(-10px) scaleY(0);
      transform-origin: top;
      transition: transform 0.2s ease-in-out;
    }
    .header__nav--open {
      transform: translateY(0) scaleY(1);
    }
  }
  </style>  