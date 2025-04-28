<template>
  <section class="hero">
    <div class="hero__inner">
      <h1 class="hero__title">Deviens un pro du Green IT 🌿</h1>
      <p class="hero__subtitle">
        Trop d'infos, pas assez de mémoire ? Respire.
        <strong>Flash Green</strong> t’aide à réviser l’essentiel du Green IT
        avec des flashcards claires. Apprends vite, retiens durablement, tout en
        respectant la planète.
      </p>
      <router-link to="/cards" class="hero__cta cta__button"
        >Commence à apprendre !</router-link
      >
    </div>
  </section>
</template>

<script>
export default { name: "HeroSection" };
</script>

<style src="@/css/style.css"></style>

<style scoped>
.cta__btn {
  /* largeur fixe sur grand écran */
  display: inline-block;
  width: min(80vw, 300px);
  flex-shrink: 0;
  font-family: "Inter", sans-serif;
  font-size: 24px;
  color: #042a2b;
  background: #ffffffcc;
  border: 2px solid #042a2b;
  border-radius: 8px;
  padding: 16px 32px;
  cursor: pointer;
  transition: background-color 0.2s;
  white-space: nowrap;
  text-decoration: none;
  text-align: center;
  box-sizing: border-box;
  line-height: 1.4;
}
</style>
