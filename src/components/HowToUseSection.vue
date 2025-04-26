<template>
  <section class="how">
    <div class="how__text">
      <h2 class="how__title">
        <span class="how__icon">💡</span>
        <span class="no-break">Comment utiliser</span>
        <strong>Flash Green</strong> ?
      </h2>
      <ol class="how__list">
        <li>
          <span class="how__step">1</span>
          <span class="how__desc">
            Crée ton compte pour débutertes révisions
          </span>
        </li>
        <li>
          <span class="how__step">2</span>
          <span class="how__desc">Apprends avec des flashcards</span>
        </li>
        <li>
          <span class="how__step">3</span>
          <span class="how__desc"
            >Suis ta progression et deviens incollable en Green IT !</span
          >
        </li>
      </ol>
    </div>
    <div class="how__image">
      <img
        src="@/assets/images/globe.webp"
        alt="Illustration globe Flash Green"
      />
    </div>
  </section>
</template>

<script>
export default {
  name: "HowToUseSection",
};
</script>

<style scoped>
.how {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  padding: 80px 24px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
}

.how__text {
  flex: 1 1 60%;
  padding-right: 24px;
}

.how__title {
  color: #042a2b;
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
  background-color: #042a2b;
  color: #fff;
  border-radius: 50%;
  font-size: 24px;
  margin-right: 16px;
}

.how__desc {
  flex: 1;
  font-size: 20px;
  line-height: 1.386;
  color: #042a2b;
  word-break: break-word;
}

.how__image {
  flex: 1 1 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
}

.how__image img {
  width: 100%;
  max-width: 559px;
  height: auto;
  display: block;
}

.no-break {
  white-space: nowrap;
}

/* ===== Tablette et petits desktops ===== */
@media (max-width: 1170px) {
  .how__title {
    font-size: 48px;
    white-space: normal;
  }
  .how__image img {
    max-width: 400px;
  }
}

/* ===== Mobile ===== */
@media (max-width: 768px) {
  .how {
    flex-direction: column;
    padding: 40px 16px;
  }
  .how__text {
    text-align: center;
    padding-right: 0;
  }
  .how__title {
    font-size: 48px;
    white-space: normal;
    margin-bottom: 16px;
  }
  .how__icon {
    font-size: 28px;
    margin-right: 8px;
  }
  .how__list li {
    justify-content: center;
  }
  .how__step {
    width: 48px;
    height: 48px;
    font-size: 20px;
    margin-right: 12px;
  }
  .how__desc {
    font-size: 20px;
    text-align: left;
  }

  /* ——— CENTRAGE DE L’IMAGE ——— */
  .how__image {
    flex: 1 1 100%;
    text-align: center;
    margin-top: 24px;
    display: block;
  }
  .how__image img {
    display: block;
    max-width: 350px;
    margin: 0 auto;
    width: 80vw;
    max-width: 300px;
    height: auto;
  }
}
</style>
