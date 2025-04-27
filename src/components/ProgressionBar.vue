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
  animation: fadeIn 1s ease-in forwards;
}

.progress-summary p {
  margin: 0;
  font-size: 23px;
  animation: slideInDown 1s ease forwards;
}

.progress-bar {
  background: #eee;
  border-radius: 8px;
  overflow: hidden;
  height: 16px;
  position: relative;
}

.progress-fill {
  background: linear-gradient(90deg, #042A2B, #0E4749);
  height: 100%;
  width: 0;
  transition: width 1.8s cubic-bezier(0.25, 1.5, 0.5, 1);
  animation: pulse 2s infinite;
}

.progress-glow {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(120deg, transparent 0%, #ffffff66 50%, transparent 100%);
  background-size: 200% 100%;
  animation: shine 2.5s infinite;
  pointer-events: none;
}

/* ANIMATIONS */

@keyframes fadeIn {
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes slideInDown {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}

@keyframes shine {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}

@keyframes pulse {
  0% { transform: scaleX(1); }
  50% { transform: scaleX(1.02); }
  100% { transform: scaleX(1); }
}
</style>
