<template>
  <div class="progress-panel">
    <h2>À revoir</h2>
    <table class="progress-table" v-if="unknown.length > 0">
      <thead>
        <tr>
          <th>Question</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in unknown" :key="item.id">
          <td>{{ item.Intitule }}</td>
          <td>
            <a :href="'/card.html?id=' + item.id">
              <button class="btn-small">Relire</button>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>Aucune carte à revoir, bravo ! 🎉</p>
  </div>
</template>

<script>
export default {
  name: "ProgressionPanel",
  props: {
    unknown: {
      type: Array,
      required: true,
    },
  },
};
</script>


<style scoped>
.progress-panel {
  background: #fff;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  max-width: 1136px;
  width: 100%;
}

.progress-panel h2 {
  margin-top: 0;
  font-size: 30px;
  color: var(--color-primary);
}

.progress-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 24px;
}

.progress-table th,
.progress-table td {
  padding: 16px 12px;
  text-align: left;
  font-size: 19px;
}

.progress-table thead th {
  border-bottom: 2px solid #ddd;
}

.progress-table tbody tr + tr td {
  border-top: 1px solid #eee;
}

/* Bouton d'action */
.btn-small {
  padding: 8px 16px;
  font-size: 18px;
  background: #042A2B;
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-small:hover {
  opacity: 0.8;
}

</style>