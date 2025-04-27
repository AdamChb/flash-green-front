<template>
  <div>
    <h2>Gestion des utilisateurs</h2>

    <table class="admin-table">
      <thead>
        <tr>
          <th>Pseudo</th>
          <th>Email</th>
          <th>Rôle</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.ID_personne">
          <td>{{ user.Pseudo }}</td>
          <td>{{ user.Email }}</td>
          <td>{{ roleLabel(user.Role_User) }}</td>
          <td>
            <button class="btn-small" @click="editUser(user)">Éditer</button>
            <button class="btn-small btn-danger" @click="deleteUser(user.ID_personne)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>

    <button class="btn-small" @click="openAddModal">+ Ajouter un utilisateur</button>

    <!-- Modal Utilisateur -->
    <div class="modal" :class="{ active: showModal }">
      <div class="modal-content">
        <h3>{{ modalTitle }}</h3>
        <form @submit.prevent="submitForm">
          <label>Pseudo :</label>
          <input type="text" v-model="form.pseudo" required />

          <label>Email :</label>
          <input type="email" v-model="form.email" required />

          <div v-if="!isEdit" class="password-group">
            <label>Mot de passe :</label>
            <input type="password" v-model="form.password" required />
          </div>

          <label>Rôle :</label>
          <select v-model="form.role" required>
            <option value="0">Admin</option>
            <option value="1">Enseignant</option>
            <option value="2">Utilisateur</option>
          </select>

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
  name: 'AdminUsers',
  setup() {
    const API_BASE = 'https://flash-green.api.arcktis.fr/api';
    const token = localStorage.getItem('token');

    const users = ref([]);
    const showModal = ref(false);
    const isEdit = ref(false);
    const modalTitle = ref('Ajouter un utilisateur');

    const form = ref({
      id: null,
      pseudo: '',
      email: '',
      password: '',
      role: 2
    });

    const fetchUsers = async () => {
      try {
        const res = await fetch(`${API_BASE}/admin/users`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!res.ok) throw new Error(res.statusText);
        users.value = await res.json();
      } catch (error) {
        alert('Erreur chargement utilisateurs : ' + error.message);
      }
    };

    const openAddModal = () => {
      isEdit.value = false;
      modalTitle.value = 'Ajouter un utilisateur';
      form.value = { id: null, pseudo: '', email: '', password: '', role: 2 };
      showModal.value = true;
    };

    const editUser = (user) => {
      isEdit.value = true;
      modalTitle.value = 'Modifier un utilisateur';
      form.value = {
        id: user.ID_personne,
        pseudo: user.Pseudo,
        email: user.Email,
        role: user.Role_User,
        password: ''
      };
      showModal.value = true;
    };

    const deleteUser = async (id) => {
      if (!confirm('Supprimer cet utilisateur ?')) return;
      try {
        const res = await fetch(`${API_BASE}/admin/users/${id}`, {
          method: 'DELETE',
          headers: { Authorization: `Bearer ${token}` }
        });
        if (!res.ok) throw new Error(res.statusText);
        users.value = users.value.filter(u => u.ID_personne !== id);
      } catch (error) {
        alert('Erreur suppression utilisateur : ' + error.message);
      }
    };

    const submitForm = async () => {
      try {
        const payload = {
          username: form.value.pseudo,
          email: form.value.email,
          role: parseInt(form.value.role, 10)
        };
        let url = `${API_BASE}/admin/users`;
        let method = 'POST';

        if (isEdit.value && form.value.id) {
          url = `${API_BASE}/admin/users/${form.value.id}`;
          method = 'PUT';
        } else {
          payload.password = form.value.password;
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
        await fetchUsers();
      } catch (error) {
        alert('Erreur enregistrement utilisateur : ' + error.message);
      }
    };

    const closeModal = () => {
      showModal.value = false;
    };

    const roleLabel = (code) => {
      return { 0: 'Admin', 1: 'Enseignant', 2: 'Utilisateur' }[code] || 'N/A';
    };

    onMounted(fetchUsers);

    return {
      users,
      showModal,
      isEdit,
      modalTitle,
      form,
      openAddModal,
      editUser,
      deleteUser,
      submitForm,
      closeModal,
      roleLabel
    };
  }
};
</script>

<style scoped>
/* rien de spécial ici, tout utilise le CSS global admin */
</style>
