<template>
  <div class="progress">
    <div class="progress-page">
      <h1 class="progress-title">Suivi de progression</h1>
      <ProgressionBar :known="known.length" :total="total" />
      <ProgressionPanel :unknown="unknown" />
    </div>
  </div>
</template>

<script>
import ProgressionBar from "@/components/ProgressionBar.vue";
import ProgressionPanel from "@/components/ProgressionPanel.vue";

export default {
  name: "ProgressionView",
  components: { ProgressionBar, ProgressionPanel },
  data() {
    return {
      known: [],
      unknown: [],
      total: 0,
    };
  },
  mounted() {
    this.fetchProgress();
  },
  methods: {
    async fetchProgress() {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      try {
        const knownResponse = await fetch(
          `https://flash-green.api.arcktis.fr/api/questions/known/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const known = await knownResponse.json();
        this.known = known;

        const unknownResponse = await fetch(
          `https://flash-green.api.arcktis.fr/api/questions/unknown/${userId}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const unknown = await unknownResponse.json();
        this.unknown = unknown;

        this.total = this.known.length + this.unknown.length;
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }
    },
  },
};
</script>



<style scoped>
.progress {
  flex: 1;
  background-color: #D6F0CF;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 48px 16px;
}

.progress-page {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 64px 16px;
}

.progress-title {
  font-size: 62px;
  font-weight: bold;
  margin: 0;
  color: #042A2B;
  text-align: center;
}
</style>