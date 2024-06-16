
<template>
  <v-layout>
    <v-container>
      <v-app-bar :elevation="0" style="background-color: var(--vt-c-beige); width: 50%; position: absolute; left: 50%;" scroll-behavior="hide" scroll-threshold="50">
        <v-spacer></v-spacer>
        <v-btn :elevation="0" style="background-color: var(--vt-c-beige);" @click="openNotificationsModal" v-if="user.idTipoUtilizador === 1 && notificationEnabled">
          <img :src="notificationIcon">
        </v-btn>
        <v-btn :elevation="0" style="background-color: var(--vt-c-beige);" @click="logout">
          <img src="@/assets/images/icons/logout.svg">
        </v-btn>
      </v-app-bar>
    </v-container>
  </v-layout>


    <!-- Notifications Modal -->
    <v-dialog v-model="notificationsModal" max-width="600px" persistent>
      <v-card class="rounded-lg pa-4" style="background-color: var(--vt-c-beige);">
        <div class="d-flex">
          <v-btn style="background-color: var(--vt-c-beige);" text @click="closeNotificationsModal" :elevation="0" size="small"><img src="@/assets/images/icons/back.svg"></v-btn>
          <v-card-title style="font-family: Aleo, serif; color: var(--vt-c-brown-dark);" class="text-h5">Notifications</v-card-title>
        </div>
        <v-card-text style="color: var(--vt-c-brown-medium);">
          <div v-for="(notification, index) in reversedNotifications.slice(0, 3)" :key="index" class="mb-4">
            <div class="d-flex align-center mb-4">
              <p class="text-h6 font-weight-bold mr-2">{{ notification.tituloNotificacao }}</p>
              <p class="text-caption">{{ notification.dataNotificacao }}</p>
            </div>
            <p>{{ notification.conteudoNotificacao }}</p>
          </div>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);" text :to="{'name': 'notifications'}">More</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
<script>
  import { useAuthStore } from '../stores/auth.js';
  import { useNotificationStore } from '../stores/notifications.js'
  export default {
    data() {
      return {
        notificationsModal: false,
        notificationIcon: '/src/assets/images/icons/notif.svg',
        authStore: useAuthStore(),
        notificationStore: useNotificationStore(),
        notificationEnabled: true,
      }
    },
    methods: {
      openNotificationsModal() {
        this.notificationsModal = true;
      },
      closeNotificationsModal() {
        this.notificationsModal = false;
      },
      logout() {
        this.authStore.logout();
        this.$router.push({ name: 'home' });
      },
      async settings() {
        try {
          if (this.authStore.getUser.idTipoUtilizador === 1) {
            await this.notificationStore.fetchNotificationsSettings(this.authStore.getUser.idUtilizador);
            
            const notificationSettings = this.notificationStore.notificationSettings;
            const stateNotifStatus = notificationSettings.find(setting => setting.idTipoNotificacao === 1)?.estadoNotificacao;
            const stateGenres = notificationSettings.find(setting => setting.idTipoNotificacao === 2)?.estadoNotificacao;

            this.notificationEnabled = stateNotifStatus || stateGenres;
          }
        } catch (error) {
          console.error('Error fetching notification settings:', error);
          this.notificationEnabled = false;
        }
      }
    },
    computed: {
      user() {
        return this.authStore.getUser;
      },
      notifications() {
        this.user = this.authStore.getUser;
        const idUtilizador = this.user ? this.user.idUtilizador : null;
        if (this.notificationEnabled) {
          return idUtilizador ? this.notificationStore.getNotifications.filter(notification => notification.idUtilizador === idUtilizador) : [];
        }
      },
      reversedNotifications() {
        return this.notifications ? this.notifications.slice().reverse() : [];
      }
    },
    mounted() {
      this.notificationStore.fetchNotifications();
      this.authStore.fetchUserById(this.authStore.getUser.idTipoUtilizador);
      this.settings();
    },
  }
</script>
  