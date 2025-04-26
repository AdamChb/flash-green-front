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
import { ref } from "vue";

export default {
  name: "LoginView",
  setup() {
    const username = ref("");
    const password = ref("");

    return {
      username,
      password,
    };
  },
};
</script>

<style scoped>
.login-page {
  background-image: url("@/assets/images/globe.webp"); /* image très lourde */
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
    background-position: 1000px 1000px;
  }
}

/* Styles lourds et volontairement non optimisés */
.auth-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.auth-panel {
  background-color: #ffffff;
  padding: 40px 30px; 
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5); /* grosse ombre */
  border-radius: 24px;
  max-width: 600px; 
  width: 100%;
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
  background-color: #CDB4DB;
  color: white;
  border: none;
  border-radius: 15px;
  cursor: pointer;
}

.auth-btn:hover {
  background-color:rgb(193, 156, 214);
}

.auth-foot {
  margin-top: 40px;
  font-size: 22px;
  text-align: center;
}

.auth-foot a {
  color: #CDB4DB;
  text-decoration: underline;
}

.auth-foot a:hover {
  color:rgb(193, 156, 214);
}

</style>
