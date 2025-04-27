<template>
  <div class="cards-page">
    <h1 class="cards-title">Cartes</h1>
    <router-link class="cards-progress-btn" to="/progression"
      >Voir ma progression</router-link
    >

    <div class="card-panel">
      <!-- ─────────── Bouton « mauvaise réponse » -->
      <button
        id="btn-fail"
        class="card-btn card-btn--fail"
        aria-label="Je n'ai pas retenu"
        @click="
          if (!chargement && !termine) {
            koClicked();
          }
        "
      >
        <img src="@/assets/icons/cross.svg" alt="" />
      </button>

      <div id="card-container" class="card-wrapper">
        <article class="flashcard" @click="reverseCard()">
          <div v-if="chargement" class="flashcard__loader">
            <p>Chargement...</p>
          </div>
          <div v-else-if="termine" class="flashcard__loader">
            <p>Terminé !</p>
          </div>
          <div v-else-if="!chargement" class="flashcard__inner">
            <div class="flashcard__face flashcard__front flashcard__text">
              {{ card.Intitule }}
            </div>
            <div class="flashcard__face flashcard__back flashcard__text">
              {{ card.Reponse }}
            </div>
          </div>
        </article>
      </div>

      <!-- ─────────── Bouton « bonne réponse » -->
      <button
        id="btn-success"
        class="card-btn card-btn--success"
        aria-label="Je connais la réponse"
        @click="
          if (!chargement && !termine) {
            okClicked();
          }
        "
      >
        <img src="@/assets/icons/check.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: {
    card: {
      type: Object,
      required: true,
    },
    chargement: {
      type: Boolean,
      default: true,
    },
    termine: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    okClicked() {
      this.$emit("okClicked");
      this.swipe("right");
    },
    koClicked() {
      this.$emit("koClicked");
      this.swipe("left");
    },
    swipe(dir) {
      const card = document.querySelector(".flashcard");
      if (!card) {
        return;
      }
      card.classList.add(dir === "right" ? "swipe-right" : "swipe-left");
      card.addEventListener("transitionend", () => {
        card.classList.remove("swipe-out", "swipe-right", "swipe-left");
      });
    },
    reverseCard() {
      const card = document.querySelector(".flashcard");
      if (card) {
        card.classList.toggle("is-flipped");
      }
    },
  },
};
</script>

<style src="@/css/style.css"></style>
