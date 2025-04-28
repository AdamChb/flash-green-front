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
      <router-link to="/cards" class="hero__cta"
        >Commence à apprendre !</router-link
      >
    </div>
  </section>
</template>

<script>
export default { name: "HeroSection" };
</script>

<style scoped>
.hero {
  background-color: #d6f0cf;
  display: flex;
  justify-content: center;
  padding: 80px 24px;
}
.hero__inner {
  max-width: 1200px;
  text-align: center;
  font-family: "Inter", sans-serif;
}
.hero__logo {
  display: block;
  margin: 0 auto 24px;
  height: 120px;
}
.hero__title {
  color: #042a2b;
  font-size: 72px;
  line-height: 1.2;
  margin-bottom: 24px;
}
.hero__subtitle {
  color: #042a2b;
  font-size: 24px;
  line-height: 1.386;
  margin-bottom: 40px;
}
.hero__cta {
  font-size: 24px;
  font-family: "Inter", sans-serif;
  color: #042a2b;
  background: transparent;
  border: 2px solid #042a2b;
  border-radius: 8px;
  padding: 12px 24px;
  cursor: pointer;
  transition: background-color 0.2s;
}
.hero__cta:hover {
  background-color: #042a2b;
  color: #fff;
}
</style>
