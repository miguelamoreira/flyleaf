
<template>
  <v-layout>
    <v-container>
      <v-app-bar :elevation="0" style="background-color: var(--vt-c-beige); width: 50%; position: absolute; left: 50%;" scroll-behavior="hide" scroll-threshold="50">
        <v-spacer></v-spacer>
        <v-btn :elevation="0" style="background-color: var(--vt-c-beige);" @click="openNotificationsModal">
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
          <div v-for="(notification, index) in notifications" :key="index" class="mb-4">
            <div class="d-flex align-center mb-4">
              <img :src="`/src/assets/images/icons/${notification.state === 'new' ? 'newnotif.svg' : 'oldnotif.svg'}`" class="mr-4">
              <p class="text-h6 font-weight-bold mr-2">{{ notification.title }}</p>
              <p class="text-caption">{{ notification.date }}</p>
            </div>
            <p>{{ notification.content }}</p>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </template>
  
<script>
  export default {
    data() {
      return {
        notificationsModal: false,
        notifications: [
          {state: 'old',title: 'Book request denied', date: '28/03/2024', content: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. '},
          {state: 'new', title: 'Book request accepted', date: '30/03/2024', content: 'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. '},
        ],
        notificationIcon: '',
      }
    },
    created() {
      // Determine the initial notification icon based on the presence of new notifications
      this.notificationIcon = this.hasNewNotifications ? '/src/assets/images/icons/notif2.svg' : '/src/assets/images/icons/notif1.svg';
    },
    methods: {
      openNotificationsModal() {
        this.notificationsModal = true;
      },
      closeNotificationsModal() {
        this.notificationsModal = false;
        this.notifications.forEach(notification => {
          if (notification.state === 'new') {
            notification.state = 'old';
          }
        });
        // Update the notification icon based on the presence of new notifications after closing the modal
        this.notificationIcon = this.hasNewNotifications ? '/src/assets/images/icons/notif2.svg' : '/src/assets/images/icons/notif1.svg';
      },
      logout() {
        localStorage.clear();
        this.$router.push({ name: 'home' });
      }
    },
    computed: {
      hasNewNotifications() {
        return this.notifications.some(notification => notification.state === 'new');
      }
    },
  }
</script>
  