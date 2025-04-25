<template>
    <header class="header">
      <div class="header__inner">
        <router-link to="/" class="header__logo-link">
          <img src="@/assets/logo.png" alt="Flash Green logo" class="header__logo" />
        </router-link>
        <nav class="header__nav">
          <router-link class="header__button" to="/login">Se connecter</router-link>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'Header'
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
    background: #042A2B;
    padding: 10px 24px;
    border-radius: 8px;
    text-decoration: none;
  }
  
  .header__button:hover {
    background: #031919;
  }
  </style>