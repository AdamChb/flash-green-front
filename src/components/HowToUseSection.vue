<template>
  <section class="how">
    <div class="how__text">
      <h2 class="how__title">
        <span class="how__icon">💡</span>
        Comment utiliser <strong>Flash Green</strong> ?
      </h2>
      <ol class="how__list">
        <li>
          <span class="how__step">1</span>
          <span class="how__desc">
            Crée ton compte et révise le Green IT comme un pro !
          </span>
        </li>
        <li>
          <span class="how__step">2</span>
          <span class="how__desc">Apprends avec des flashcards</span>
        </li>
        <li>
          <span class="how__step">3</span>
          <span class="how__desc">Entraîne‑toi avec des quizz</span>
        </li>
      </ol>
    </div>
    <div class="how__image">
      <img src="@/assets/globe.png" alt="Illustration globe Flash Green" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'HowToUseSection'
}
</script>

<style scoped>
.how {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
}

.how__text {
  flex: 1 1 60%;
  padding-right: 24px;
}

.how__title {
  color: #042A2B;
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 24px;
  white-space: nowrap;
  font-weight: 600;
}

.how__icon {
  font-size: 36px;
  margin-right: 12px;
}

.how__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.how__list li {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.how__step {
  flex: 0 0 48px;
  width: 48px;
  height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #042A2B;
  color: #fff;
  border-radius: 50%;
  font-size: 24px;
  margin-right: 16px;
}

.how__desc {
  flex: 1;
  font-size: 20px;
  line-height: 1.386;
  color: #042A2B;
  word-break: break-word;
}

.how__image {
  flex: 1 1 40%;
  text-align: right;
}

.how__image img {
  width: 100%;
  max-width: 559px;
  height: auto;
}

/* ===== Tablette et petits desktops ===== */
@media (max-width: 1024px) {
  .how__title {
    font-size: 42px;
    white-space: normal;
  }
  .how__desc {
    font-size: 18px;
  }
  .how__image img {
    max-width: 350px;
  }
}

/* ===== Mobile ===== */
@media (max-width: 768px) {
  .how {
    flex-direction: column;
    padding: 40px 16px;
  }
  .how__text {
    flex: 1 1 100%;
    padding-right: 0;
    text-align: center;
  }
  .how__title {
    font-size: 32px;
    margin-bottom: 16px;
  }
  .how__icon {
    font-size: 28px;
    margin-right: 8px;
  }
  .how__list li {
    justify-content: center;
  }
  /* On garde le cercle à 48px pour la visibilité */
  .how__step {
    width: 48px;
    height: 48px;
    font-size: 20px;
    margin-right: 12px;
  }
  .how__desc {
    font-size: 16px;
    text-align: left;
  }
  .how__image {
    flex: 1 1 100%;
    text-align: center;
    margin-top: 24px;
  }
  .how__image img {
    width: 80vw;
    max-width: 300px;
  }
}
</style>