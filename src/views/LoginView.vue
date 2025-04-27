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
          Tu n’as pas de compte ? <router-link to="/register">S'inscrire</router-link>
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
        const response = await fetch("https://flash-green.api.arcktis.fr/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email.value,
            password: password.value,
          }),
        });

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


<style scoped>
.login-page {
  background-image: url("@/assets/images/globe.webp");
  background-size: cover;
  background-attachment: fixed;
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

/* Styles volontairement lourds */
.auth-page {
  max-width: 500px;
  width: 100%;
  margin: 80px auto 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.auth-panel {
  background-color: #ffffff;
  padding: 70px 40px;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.6); /* grosse ombre */
  border-radius: 24px;
  width: 100%;
}

.auth-title {
  font-size: 40px; 
  margin-bottom: 30px;
}

.auth-form {
  display: flex;
  flex-direction: column;
  gap: 20px; 
}

.auth-form label {
  font-size: 18px;
}

.auth-form input {
  padding: 20px;
  font-size: 18px;
  border: 2px solid #cccccc;
  border-radius: 10px;
}

.auth-btn {
  padding: 20px;
  font-size: 24px;
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
  margin-top: 25px;
  font-size: 16px;
  text-align: center;
}

.auth-foot a {
  color: #cdb4db;
  text-decoration: underline;
}

.auth-foot a:hover {
  color: rgb(193, 156, 214);
}

@media (max-width: 768px) {
  .auth-panel {
    padding: 20px 15px;
    border-radius: 16px;
  }

  .auth-title {
    font-size: 28px;
    margin-bottom: 20px;
    text-align: center;
  }

  .auth-form {
    gap: 15px;
  }

  .auth-form label {
    font-size: 16px;
  }

  .auth-form input {
    padding: 15px;
    font-size: 16px;
  }

  .auth-btn {
    padding: 15px;
    font-size: 18px;
  }

  .auth-foot {
    margin-top: 20px;
    font-size: 14px;
  }

  .auth-page {
    padding: 20px;
  }
}
</style>
