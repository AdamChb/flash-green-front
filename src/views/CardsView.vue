<script setup>
const token = localStorage.getItem("token");
/* --------- Cartes ------------------------------------ */

/*fetch("https://flash-green.api.arcktis.fr/api/questions/", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  },
})
  .then((response) => {
    if (!response.ok) {
      console.error("HTTP error", response.status, response.statusText);
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {*/
/* --------- start ----------------------------------------------- */
//showNext();
/*  })
  .catch((error) => {
    console.error("There was a problem with the fetch operation:", error);
    alert("Erreur de chargement des cartes. Veuillez réessayer.");
  });*/
</script>

<template>
  <div>
    <Cards
      :card="queue[0]"
      :chargement="chargement"
      :termine="termine"
      @okClicked="okClicked"
      @koClicked="koClicked"
    ></Cards>
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
      questions: [
        {
          ID_question: 1,
          Intitule: "Quel est l’objectif principal du bilan carbone ?",
          Reponse:
            "Mesurer les émissions de gaz à effet de serre d’un produit ou d’une organisation sur une période donnée afin de cibler les leviers de réduction.",
        },
        {
          ID_question: 2,
          Intitule: "Qu’est-ce que le Green IT ?",
          Reponse:
            "Une approche globale visant à réduire l’impact environnemental du numérique, depuis la conception jusqu’à la fin de vie des équipements.",
        },
        {
          ID_question: 3,
          Intitule:
            "Quel gaz est principalement responsable du réchauffement climatique ?",
          Reponse:
            "Le dioxyde de carbone (CO₂) est le principal gaz à effet de serre émis par les activités humaines.",
        },
        {
          ID_question: 4,
          Intitule:
            "Classez du gaz le plus pollueur au moins pollueur : CH₄, CO₂, N₂, O₂ ?",
          Reponse:
            "Méthane (CH₄) est plus puissant à court terme que le CO₂, puis viennent N₂ et O₂ qui sont non-actifs comme GES.",
        },
        {
          ID_question: 5,
          Intitule:
            "Quels sont les principaux postes d’émission de GES dans le numérique ?",
          Reponse:
            "La fabrication des équipements, l’exploitation des data centers et l’acheminement via les réseaux représentent l’essentiel des émissions.",
        },
      ],
      queue: [], // tableau de cartes
      chargement: true,
      termine: false,
    };
  },
  mounted() {
    this.init(); // initialisation du tableau de cartes
  },

  methods: {
    init() {
      this.queue = [...this.questions]; // copie du tableau de questions
      this.queue.sort(() => Math.random() - 0.5); // mélange le tableau
      this.chargement = false;
    },
    showNext() {
      if (!queue.length) {
        termine = true;
        btnOK.disabled = btnKO.disabled = true;
        return;
      }
    },
    okClicked() {
      this.showNext();
      queue.shift(); // retire définitif
    },
    koClicked() {
      this.showNext();
      const cur = queue.shift();
      queue.push(cur); // remet à la fin
    },
  },
};
</script>
