<template>
  <div class="login-page">

    <section class="auth-page">
      <div class="auth-panel">
        <h2 class="auth-title">Se connecter</h2>
        <form action="#" class="auth-form">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Ex : ajdmab@gmail.com"
            required
          />

          <label for="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="•••••••••••••"
            required
          />

          <button type="submit" class="auth-btn">Se connecter</button>
        </form>
        <p class="auth-foot">
          Tu n’as pas de compte ? <a href="register.html">S’inscrire</a>
        </p>
      </div>
    </section>

  </div>
</template>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

import { ref } from 'vue';

export default {
  name: 'LoginView',
  components: {
    Header,
    Footer
  },
  setup() {
    const username = ref('');
    const password = ref('');

    return {
      username,
      password
    };
  }
};
</script>

<style scoped>
.login-page {
  background-image: url('@/assets/globe.png'); /* image très lourde */
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  animation: backgroundScroll 30s linear infinite;
}

@keyframes backgroundScroll {
  0% { background-position: 0 0; }
  100% { background-position: 1000px 1000px; }
}

/* Styles lourds et volontairement non optimisés */
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 50px;
  min-height: 100vh;
}

.auth-panel {
  background-color: rgba(255, 255, 255, 0.9);
  padding: 80px; /* énorme padding */
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5); /* grosse ombre */
  border-radius: 30px;
  width: 600px; /* panel très large */
}

.auth-title {
  font-size: 48px; /* titre immense */
  margin-bottom: 50px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 40px; /* écart géant entre les inputs */
}

.auth-form label {
  font-size: 28px;
}

.auth-form input {
  padding: 25px;
  font-size: 24px;
  border: 2px solid #ccc;
  border-radius: 10px;
}

.auth-btn {
  padding: 25px;
  font-size: 28px;
  background-color: #2c7a7b;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}

.auth-btn:hover {
  background-color: #285e61;
}

.auth-foot {
  margin-top: 40px;
  font-size: 22px;
  text-align: center;
}

.auth-foot a {
  color: #2c7a7b;
  text-decoration: underline;
}
</style>
