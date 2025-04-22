<template>
  <div class="all-cards">
    <h1>All Cards</h1>
    <div class="cards__list">
      <div class="card" v-for="(card, index) in cards" :key="index">
        <Cards :card="card" />
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
export default {
  name: "CardsView",
  components: {
    Cards,
  },
  data() {
    return {
      cards: [
        {
          q: `Quelle est la différence entre Green IT et IT for Green ?`,
          a: `<strong>Green IT :</strong> réduire l’empreinte du numérique.<br>
         <strong>IT for Green :</strong> verdir les autres secteurs.`,
        },

        {
          q: `Donne 3 indicateurs clés du Green IT.`,
          a: `Empreinte carbone, conso d'énergie, durée de vie des équipements.`,
        },

        {
          q: `Cite un pattern d'éco-conception côté front.`,
          a: `Lazy-loading des médias.`,
        },

        {
          q: `Quel format d'image est efficace en compression ?`,
          a: `WebP (ou AVIF) : 25‑35 % plus léger que JPEG/PNG.`,
        },

        {
          q: `Qu(est-ce que l'accessibilité numérique ?`,
          a: `Garantir l'accès à tous, y compris les personnes en situation de handicap.`,
        },
      ],
    };
  },
};
</script>
