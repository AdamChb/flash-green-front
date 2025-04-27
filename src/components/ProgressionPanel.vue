ProgressionPanel.vue : 
<template>
    <div class="progress-panel">
      <h2>À revoir</h2>
      <table class="progress-table">
        <thead>
          <tr>
            <th>Question</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Qu’est-ce que le Green IT ?</td>
            <td><button class="btn-small">Relire</button></td>
          </tr>
          <tr>
            <td>Quel est l’impact des datacenters ?</td>
            <td><button class="btn-small">Relire</button></td>
          </tr>
          <!-- … autres lignes en mockup … -->
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  name: "ProgressionPanel",
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

/* Responsive simple */
@media (max-width: 600px) {
  .progress-panel {
    padding: 20px;
  }
  .progress-table th,
  .progress-table td {
    font-size: 14px;
    padding: 12px 8px;
  }
  .btn-small {
    padding: 6px 12px;
    font-size: 12px;
  }
}
</style>