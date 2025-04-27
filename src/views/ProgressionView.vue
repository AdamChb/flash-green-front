<template>
    <div class="progress">
        <div class="progress-page">
            <!-- 1. Titre -->
            <h1 class="progress-title">Suivi de progression</h1>
            <!-- 2. Barre de progression globale -->
            <ProgressionBar />
            <!-- 3. Tableau des cartes à revoir -->
            <ProgressionPanel/>
        </div>
    </div>
</template>

<script>
import ProgressionBar from "@/components/ProgressionBar.vue";
import ProgressionPanel from "@/components/ProgressionPanel.vue";

export default {
  name: "ProgressionView",
  components: { ProgressionBar, ProgressionPanel},
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