<template>
    <header class="header">
      <div class="header__inner">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="Flash Green logo" class="header__logo" />
        </router-link>
        <nav class="header__nav">
          <router-link class="header__link"  to="/cards">Cards</router-link>
          <router-link class="header__link"  to="/quiz">Quizz</router-link>
          <router-link class="header__button" to="/login">Log in</router-link>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default { name: 'Header' }
  </script>
  
  <style scoped>
  .header {
    width: 100%;                 /* plein écran */
    background-color: #ffffff;   /* fond blanc */
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  }
  
  /* on centre et on restreint la largeur du contenu uniquement */
  .header__inner {
    max-width: 1200px;
    margin: 0 auto;
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .header__logo {
    height: 64px;
  }
  
  .header__nav {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  
  .header__link {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    color: #042A2B;
    text-decoration: none;
    padding: 8px 0;
  }
  .header__link:hover {
    text-decoration: underline;
  }
  
  .header__button {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    color: #ffffff;
    background-color: #042A2B;
    padding: 10px 24px;
    border-radius: 8px;
    text-decoration: none;
  }
  .header__button:hover {
    background-color: #031919;
  }
  </style>
  