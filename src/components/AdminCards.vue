<template>
  <div>
    <h2>Gestion des cartes</h2>

    <table class="admin-table">
      <thead>
        <tr>
          <th>Question</th>
          <th>Réponse</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="card in cards" :key="card.ID_question">
          <td>{{ card.Intitule }}</td>
          <td>{{ card.Reponse }}</td>
          <td>
            <button class="btn-small" @click="editCard(card)">Éditer</button>
            <button class="btn-small btn-danger" @click="deleteCard(card.ID_question)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>

    <button class="btn-small" @click="openAddModal">+ Ajouter une carte</button>

    <!-- Modal Carte -->
    <div class="modal" :class="{ active: showModal }">
      <div class="modal-content">
        <h3>{{ modalTitle }}</h3>
        <form @submit.prevent="submitForm">
          <label>Question :</label>
          <textarea v-model="form.question" rows="3" required></textarea>

          <label>Réponse :</label>
          <textarea v-model="form.answer" rows="3" required></textarea>

          <div class="modal-actions">
            <button type="submit" class="btn-small">Enregistrer</button>
            <button type="button" class="btn-small btn-cancel" @click="closeModal">Annuler</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  name: 'AdminCards',
  setup() {
    const API_BASE = 'https://flash-green.api.arcktis.fr/api';
    const token = localStorage.getItem('token');

    const cards = ref([]);
    const showModal = ref(false);
    const isEdit = ref(false);
    const modalTitle = ref('Ajouter une carte');

    const form = ref({
      id: null,
      question: '',
      answer: ''
    });

    const fetchCards = async () => {
      try {
        const res = await fetch(`${API_BASE}/questions`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!res.ok) throw new Error(res.statusText);
        cards.value = await res.json();
      } catch (error) {
        alert('Erreur chargement cartes : ' + error.message);
      }
    };

    const openAddModal = () => {
      isEdit.value = false;
      modalTitle.value = 'Ajouter une carte';
      form.value = { id: null, question: '', answer: '' };
      showModal.value = true;
    };

    const editCard = (card) => {
      isEdit.value = true;
      modalTitle.value = 'Modifier une carte';
      form.value = {
        id: card.ID_question,
        question: card.Intitule,
        answer: card.Reponse
      };
      showModal.value = true;
    };

    const deleteCard = async (id) => {
      if (!confirm('Supprimer cette carte ?')) return;
      try {
        const res = await fetch(`${API_BASE}/questions/${id}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!res.ok) throw new Error(res.statusText);
        cards.value = cards.value.filter(c => c.ID_question !== id);
      } catch (error) {
        alert('Erreur suppression carte : ' + error.message);
      }
    };

    const submitForm = async () => {
      try {
        const payload = {
          title: form.value.question,
          content: form.value.answer
        };
        let url = `${API_BASE}/questions`;
        let method = 'POST';

        if (isEdit.value && form.value.id) {
          url = `${API_BASE}/questions/${form.value.id}`;
          method = 'PUT';
        }

        const res = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(payload)
        });

        if (!res.ok) throw new Error(res.statusText);

        closeModal();
        await fetchCards();
      } catch (error) {
        alert('Erreur enregistrement carte : ' + error.message);
      }
    };

    const closeModal = () => {
      showModal.value = false;
    };

    onMounted(fetchCards);

    return {
      cards,
      showModal,
      isEdit,
      modalTitle,
      form,
      openAddModal,
      editCard,
      deleteCard,
      submitForm,
      closeModal
    };
  }
};
</script>

<style scoped>
/* aucun style spécifique, tout est prévu par ton CSS global */
</style>
