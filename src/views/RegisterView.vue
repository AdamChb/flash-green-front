<template>
  <div class="register-page">
    <section class="auth-page">
      <div class="auth-panel">
        <h2 class="auth-title">S’inscrire</h2>
        <form @submit.prevent="submitForm" class="auth-form">
          <label for="name">Nom</label>
          <input
            type="text"
            id="name"
            v-model="name"
            name="name"
            placeholder="Ex : John Dupont"
            required
          />

          <label for="email">Email</label>
          <input
            type="email"
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

          <label for="confirmPassword">Répéter le mot de passe</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
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
import { useRouter } from "vue-router";

export default {
  name: "RegisterView",
  setup() {
    const name = ref("");
    const email = ref("");
    const password = ref("");
    const confirmPassword = ref("");
    const router = useRouter();

    const submitForm = async () => {
      if (password.value !== confirmPassword.value) {
        alert("Les mots de passe ne correspondent pas. Veuillez réessayer.");
        return;
      }

      try {
        const response = await fetch(
          "https://flash-green.api.arcktis.fr/api/auth/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username: name.value, // ton back attend `username`
              email: email.value,
              password: password.value,
            }),
          }
        );

        if (!response.ok) {
          console.error("HTTP error", response.status, response.statusText);
          throw new Error("Erreur réseau : " + response.statusText);
        }

        await response.json(); // pas besoin de traiter ici, juste vérifier que ça passe

        router.push("/login"); // Redirige proprement sur la page de connexion
      } catch (error) {
        console.error("Erreur d'inscription:", error);
        alert("Échec de l'inscription. Veuillez vérifier vos informations.");
      }
    };

    return {
      name,
      email,
      password,
      confirmPassword,
      submitForm,
    };
  },
};
</script>

<style src="@/css/style.css"></style>

<style scoped>
.register-page {
  background-image: url("@/assets/images/globe.webp");
  background-size: cover;
  background-attachment: fixed;
  min-height: 100vh;
  animation: backgroundScroll 30s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
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
