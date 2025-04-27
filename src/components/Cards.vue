<template>
  <h1 class="cards-title">Cartes</h1>

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
      <img src="assets/icons/cross.svg" alt="" />
    </button>

    <div id="card-container" class="card-wrapper">
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
    </div>

    <!-- ─────────── Bouton « bonne réponse » -->
    <button
      id="btn-success"
      class="card-btn card-btn--success"
      aria-label="Je connais la réponse"
    >
      <img src="assets/icons/check.svg" alt="" />
    </button>
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
    },
    swipe(dir) {
      const card = this.$el.querySelector(".flashcard");
      if (!card) {
        cb();
        return;
      }
      card.classList.add(dir === "right" ? "swipe-right" : "swipe-left");
    },
  },
};
</script>

<style scoped>
#cards {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* centre la section cartes */
  background: var(--color-accent);
}

/* --- wrapper interne --------------------------------------------------- */
.cards-page {
  flex: 1;
  padding: 48px 16px 64px; /* padding bas réduit */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards-title {
  font-size: 56px;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0 0 48px;
  text-align: center;
}

/* --- zone (❌ carte ✔) -------------------------------------------------- */
.card-panel {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
  max-width: 900px;
}

/* ==== wrapper des cartes : prend tout l'espace entre les boutons ==== */
.card-wrapper,
#card-container {
  flex: 1; /* remplit l'espace horizontal restant */
  display: flex; /* flex interne pour centrer la carte */
  justify-content: center; /* centre horizontalement */
  align-items: center; /* centre verticalement */
}

/* --- boutons carrés ---------------------------------------------------- */
.card-btn {
  width: 88px;
  height: 88px;
  aspect-ratio: 1/1;
  background: #fff;
  border: none;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
}
.card-btn img {
  width: 40px;
  height: 40px;
  pointer-events: none;
}
.card-btn--fail:hover {
  background: #ffe8e8;
}
.card-btn--success:hover {
  background: #e8ffe8;
}

/* --- carte recto ‑ verso ---------------------------------------------- */
.flashcard {
  flex: 1 1 auto;
  width: 100%;
  max-width: 900px;
  position: relative;
  background: #fff;
  border-radius: 24px;
  padding: 60px 48px; /* espace interne */
  min-height: 280px; /* ↙  hauteur minimale ajoutée */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 1000px; /* profondeur 3D pour le flip */
}

.flashcard__inner {
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.4s;
}
.flashcard.is-flipped .flashcard__inner {
  transform: rotateY(180deg);
}

/* faces --------------------------------------------------------------- */
.flashcard__face {
  display: flex;
  flex-direction: column; /* empile chaque nœud (textes, <br>, etc.) verticalement */
  justify-content: center;
  align-items: center;
}

/* pour que le verso (réponse) colle à gauche du conteneur */
.flashcard__back {
  align-items: flex-start;
}

.flashcard__face {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 32px; /* padding horizontal seulement */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 24px;
  backface-visibility: hidden;
}
.flashcard__back {
  transform: rotateY(180deg);
}

.flashcard__text {
  font-size: 32px;
  line-height: 1.3;
  margin: 0 auto;
  color: var(--color-primary);
}

.flashcard__front {
  text-align: center;
}
.flashcard__back {
  text-align: left;
}

.cards-progress-btn {
  display: inline-block;
  margin-bottom: 24px;
  font-size: 18px;
  color: var(--color-primary);
  border: 2px solid var(--color-primary);
  border-radius: var(--radius);
  padding: 8px 16px;
  transition: background 0.2s, color 0.2s;
}
.cards-progress-btn:hover {
  background: var(--color-primary);
  color: #fff;
}
</style>
