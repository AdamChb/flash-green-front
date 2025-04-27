<template>
  <div class="progress-summary">
    <p>Cartes maîtrisées : <strong>{{ known }} / {{ total }}</strong></p>
    <div class="progress-bar">
      <div
        class="progress-fill"
        :style="{ width: total ? (known / total) * 100 + '%' : '0%' }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressionBar",
  props: {
    known: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.progress-summary {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 15px;
  width: 100%;          
  max-width: 1200px;     
}
.progress-summary p {
  margin: 0;
  font-size: 23px;
}
.progress-bar {
  background: #eee;
  border-radius: 8px;
  overflow: hidden;
  height: 16px;
}
.progress-fill {
  background: #042A2B;
  height: 100%;
  width: 0;              /* ajusté en ligne */
  transition: width .3s ease;
}

</style>
