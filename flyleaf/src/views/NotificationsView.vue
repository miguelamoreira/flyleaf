<template>
  <v-container fluid>
    <v-row>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <v-col cols="10">
        <v-container fluid class="px-8">
          <v-row>
            <v-col cols="12" class="d-flex align-center mx-8 mt-10 mx-lg-10 mx-xl-16">
              <v-btn style="background-color: var(--vt-c-beige);" :elevation="0" :to="{ name: 'dashboard' }">
                <img src="@/assets/images/icons/back.svg">
              </v-btn>
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold ml-4">Notifications</h2>
            </v-col>
          </v-row>
          <v-row class="mx-8 mx-lg-10 mx-xl-16 mt-12">
            <v-col cols="12">
              <div v-for="(notification, index) in reversedNotifications" :key="index" class="mb-6 pb-4"> <!-- Added mb-6 for more space between notifications -->
                <div class="d-flex align-center mb-4">
                  <p class="text-h6 font-weight-bold mr-2">{{ notification.tituloNotificacao }}</p>
                  <p class="text-caption">{{ notification.dataNotificacao }}</p>
                </div>
                <p>{{ notification.conteudoNotificacao }}</p>
              </div>
            </v-col>
          </v-row>
          <v-row justify-center>
            <div class="mx-12 my-6 mx-lg-14 my-lg-8" style="position: relative;">
              <v-card :elevation="0" class="rounded-lg" style="width: 160vh; height: 40vh; background-color: var(--vt-c-beige);"></v-card>
            </div>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import Sidebar from '@/components/Sidebar.vue';
  import Navbar from '@/components/Navbar.vue';
  import { useAuthStore } from '../stores/auth.js';
  import { useNotificationStore } from '../stores/notifications.js';

  export default {
    components: {
      Sidebar,
      Navbar,
    },
    data() {
      return {
        authStore: useAuthStore(),
        notificationStore: useNotificationStore(),
      }
    },
    computed: {
      user() {
        return this.authStore.getUser;
      },
      notifications() {
        const idUtilizador = this.user ? this.user.idUtilizador : null;
        return idUtilizador ? this.notificationStore.getNotifications.filter(notification => notification.idUtilizador === idUtilizador) : [];
      },
      reversedNotifications() {
        return this.notifications.slice().reverse();
      }
    },
    mounted() {
      this.notificationStore.fetchNotifications();
      this.authStore.fetchUserById(this.authStore.getUser.idTipoUtilizador);
    },
  }
</script>