<template>
  <div id="app">
    <Header />
    <router-view class="page" />   <!-- router-view pousse le footer en bas -->
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

/* === base ============================================================ */
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: system-ui, sans-serif;
  background: var(--color-bg);
  color: var(--color-primary);
  line-height: 1.4;
}

body {
  display: flex;          /* empile header – contenu – footer */
  flex-direction: column;
}

/* === conteneur racine ================================================ */
#app {
  min-height: 100vh;      /* occupe tout le viewport                 */
  display: flex;          /* empile verticalement                    */
  flex-direction: column;
}

/* === zone de chaque page (router-view) =============================== */
.page {
  flex: 1;                /* prend l’espace libre → pousse le footer */
}
</style>
