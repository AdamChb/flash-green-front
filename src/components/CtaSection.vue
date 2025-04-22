<template>
  <section class="cta">
    <router-link to="/cards">
      <button class="cta__btn">Cartes</button>
    </router-link>
    <button class="cta__btn">Progression</button>
  </section>
</template>

<script>
export default { name: "CtaSection" };
</script>

<style scoped>
.cta {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
  background-color: #d6f0cf;
  padding: 60px 24px;
  box-sizing: border-box;
}

.cta__btn {
  /* largeur fixe sur grand écran */
  width: 300px;
  flex-shrink: 0;

  font-family: "Inter", sans-serif;
  font-size: 32px;
  color: #042a2b;
  background: #ffffffcc;
  border: 2px solid #042a2b;
  border-radius: 8px;
  padding: 16px 48px;
  cursor: pointer;
  transition: background-color 0.2s;
  white-space: nowrap;
}

.cta__btn:hover {
  background-color: #042a2b;
  color: #fff;
}

/* ===== Vertical sous 768px ===== */
@media (max-width: 768px) {
  .cta {
    flex-direction: column;
    align-items: center;
    padding: 40px 16px;
    gap: 24px;
  }
  .cta__btn {
    /* conservent les 300px jusqu’à 415px */
    width: 300px;
  }
}

/* ===== Adaptation sous 415px ===== */
@media (max-width: 415px) {
  .cta__btn {
    /* passent à 80vw pour tenir l’écran */
    width: 80vw;
    max-width: 300px;
  }
}
</style>
