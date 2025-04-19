<template>
    <section class="cta">
      <button class="cta__btn">Cards</button>
      <button class="cta__btn">Quizz</button>
    </section>
  </template>
  
  <script>
  export default { name: 'CtaSection' }
  </script>
  
  <style scoped>
  .cta {
    display: flex;
    justify-content: center;
    gap: 40px;
    background-color: #D6F0CF;
    padding: 60px 24px;
  }
  .cta__btn {
    font-family: 'Inter', sans-serif;
    font-size: 32px;
    color: #042A2B;
    background: #ffffffcc;
    border: 2px solid #042A2B;
    border-radius: 8px;
    padding: 16px 48px;
    cursor: pointer;
    transition: background-color .2s;
  }
  .cta__btn:hover {
    background-color: #042A2B;
    color: #fff;
  }
  </style>
  