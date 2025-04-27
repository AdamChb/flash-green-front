<template>
  <section id="admin" class="admin-page">
    <h1 class="admin-title">Panneau d’administration</h1>

    <!-- Onglets -->
    <div class="admin-tabs" v-if="isAdminOrTeacher">
      <button
        class="admin-tab"
        :class="{ 'is-active': activeTab === 'users' }"
        @click="activeTab = 'users'"
        v-if="isAdmin"
      >
        Utilisateurs
      </button>
      <button
        class="admin-tab"
        :class="{ 'is-active': activeTab === 'cards' }"
        @click="activeTab = 'cards'"
      >
        Cartes
      </button>
    </div>

    <!-- Panels -->
    <div class="admin-panel" v-show="activeTab === 'users'" v-if="isAdmin">
      <AdminUsers />
    </div>
    <div class="admin-panel" v-show="activeTab === 'cards'">
      <AdminCards />
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import AdminUsers from '@/components/AdminUsers.vue';
import AdminCards from '@/components/AdminCards.vue';

export default {
  name: 'AdminView',
  components: {
    AdminUsers,
    AdminCards
  },
  setup() {
    const router = useRouter();
    const activeTab = ref('cards'); // Par défaut "Cartes"
    const role = ref(null); // 0 = admin, 1 = enseignant, 2 = utilisateur

    onMounted(() => {
      const token = localStorage.getItem('token');
      const storedRole = localStorage.getItem('userRole');

      if (!token || storedRole === null) {
        router.push('/login');
        return;
      }

      role.value = parseInt(storedRole, 10);

      if (role.value === 2) {
        router.push('/cards'); // Redirige les utilisateurs simples
      }

      if (role.value === 1) {
        activeTab.value = 'cards'; // Enseignant = commence sur cartes
      }
    });

    const isAdmin = () => role.value === 0;
    const isTeacher = () => role.value === 1;
    const isAdminOrTeacher = () => role.value === 0 || role.value === 1;

    return {
      activeTab,
      isAdmin,
      isTeacher,
      isAdminOrTeacher
    };
  }
};
</script>

<style scoped>
/* Aucun style supplémentaire ici car tout vient déjà de ton style.css */
</style>
