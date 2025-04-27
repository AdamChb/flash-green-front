<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

html,
body {
  height: 100%; /* nécessaire pour le footer collant */
  margin: 0;
  padding: 0;
  font-family: system-ui, sans-serif;
  background: var(--color-bg);
  color: var(--color-primary);
  line-height: 1.4;
}

body {
  display: flex; /* empile : header – contenu – footer */
  flex-direction: column;
}
#app {
  min-height: 100vh;
}
</style>
