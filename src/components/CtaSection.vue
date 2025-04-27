<template>
    <section class="cta">
      <button class="cta__btn">Cartes</button>
      <router-link class="cta__btn" to="/progression">Progression</router-link>

    </section>
  </template>
  
  <script>
  export default { name: 'CtaSection' }
  </script>
  
  <style scoped>
  .cta {
    background-color: #D6F0CF;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
    padding: 40px 24px;
  }
  
  .cta__btn {
    /* largeur fixe sur grand écran */
    display: inline-block;
    width: min(80vw, 300px);
    flex-shrink: 0;
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    color: #042A2B;
    background: #ffffffcc;
    border: 2px solid #042A2B;
    border-radius: 8px;
    padding: 16px 32px;
    cursor: pointer;
    transition: background-color .2s;
    white-space: nowrap;
    text-decoration: none;
    text-align: center;
    box-sizing: border-box;
    line-height: 1.4;
  }
  
  .cta__btn:hover {
    background-color: #042A2B;
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
  