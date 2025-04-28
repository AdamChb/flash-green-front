<template>
  <div id="cards">
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
      questions: [],
      queue: [{}], // tableau de cartes
      chargement: true,
      termine: false,
    };
  },
  mounted() {
    this.init(); // initialisation du tableau de cartes
  },

  methods: {
    async validateQuestion(questionId, isValid) {
      const response = await fetch(
        `https://flash-green.api.arcktis.fr/api/questions/validate`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ questionId, isValid }),
        }
      );
      if (!response.ok) {
        console.error("HTTP error", response.status, response.statusText);
        throw new Error("Network response was not ok " + response.statusText);
      }
    },
    async init() {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://flash-green.api.arcktis.fr/api/questions/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        console.error("HTTP error", response.status, response.statusText);
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      this.queue = [...data]; // copie du tableau de questions
      this.queue.sort(() => Math.random() - 0.5); // mélange le tableau
      this.chargement = false;
    },
    showNext() {
      if (!this.queue.length) {
        this.termine = true;
        btnOK.disabled = btnKO.disabled = true;
        return;
      }
    },
    okClicked() {
      this.showNext();
      this.queue.shift(); // retire définitif
      console.log("okClicked", this.queue[0]);
    },
    koClicked() {
      this.showNext();
      const cur = this.queue.shift();
      this.queue.push(cur); // remet à la fin
      console.log("koClicked", this.queue[0]);
    },
  },
};

/*const token = localStorage.getItem("token");
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
