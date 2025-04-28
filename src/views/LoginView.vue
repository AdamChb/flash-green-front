<template>
  <div class="login-page">
    <section class="auth-page">
      <div class="auth-panel">
        <h2 class="auth-title">Se connecter</h2>
        <form @submit.prevent="submitForm" class="auth-form">
          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            v-model="email"
            name="email"
            placeholder="Ex : ajdmab@gmail.com"
            required
          />

          <label for="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            v-model="password"
            name="password"
            placeholder="•••••••••••••"
            required
          />

          <button type="submit" class="auth-btn">Se connecter</button>
        </form>
        <p class="auth-foot">
          Tu n’as pas de compte ?
          <router-link to="/register">S'inscrire</router-link>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "LoginView",
  setup() {
    const email = ref("");
    const password = ref("");
    const router = useRouter(); // pour naviguer après login

    const submitForm = async () => {
      try {
        const response = await fetch(
          "https://flash-green.api.arcktis.fr/api/auth/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email.value,
              password: password.value,
            }),
          }
        );

        if (!response.ok) {
          console.error("HTTP error", response.status, response.statusText);
          throw new Error("Erreur réseau : " + response.statusText);
        }

        const data = await response.json();

        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);

        router.push("/");
      } catch (error) {
        console.error("Erreur de connexion:", error);
        alert("Connexion échouée. Vérifie tes identifiants.");
      }
    };

    return {
      email,
      password,
      submitForm,
    };
  },
};
</script>

<style src="@/css/style.css" scoped></style>

<style scoped>
.login-page {
  background-image: url("@/assets/images/globe.webp");
  background-size: cover;
  background-attachment: fixed;
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
</style>
