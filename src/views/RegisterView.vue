<template>
  <div class="register-page">
    <section class="auth-page">
      <div class="auth-panel">
        <h2 class="auth-title">S’inscrire</h2>
        <form action="#" class="auth-form">
          <label for="name">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ex : John Dupont"
            required
          />

          <label for="email">Email</label>
          <input
            type="email"
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

          <label for="confirmPassword">Répéter le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="•••••••••••••"
            required
          />

          <button type="submit" class="auth-btn">S’inscrire</button>
        </form>
        <p class="auth-foot">
          Tu as déjà un compte ?
          <router-link to="/login">Se connecter</router-link>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "RegisterView",
  setup() {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");

    return {
      name,
      email,
      password,
      confirmPassword,
    };
  },
};
</script>

<style scoped>
.register-page {
  background-image: url("@/assets/images/globe.webp");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  animation: backgroundScroll 30s linear infinite;
}

@keyframes backgroundScroll {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: 2000px 2000px;
  }
}

/* Styles volontairement lourds */
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.auth-panel {
  background-color: #ffffff;
  padding: 40px 30px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.6); /* grosse ombre */
  border-radius: 24px;
  max-width: 600px;
  width: 100%;
}

.auth-title {
  font-size: 48px; /* très grand titre */
  margin-bottom: 50px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 40px; /* espace énorme entre les champs */
}

.auth-form label {
  font-size: 28px;
}

.auth-form input {
  padding: 25px;
  font-size: 24px;
  border: 2px solid #cccccc;
  border-radius: 10px;
}

.auth-btn {
  padding: 25px;
  font-size: 28px;
  background-color: #cdb4db;
  color: black;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}

.auth-btn:hover {
  background-color: rgb(193, 156, 214);
}

.auth-foot {
  margin-top: 40px;
  font-size: 22px;
  text-align: center;
}

.auth-foot a {
  color: #cdb4db;
  text-decoration: underline;
}

.auth-foot a:hover {
  color: rgb(193, 156, 214);
}
</style>
