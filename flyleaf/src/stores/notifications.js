import { defineStore } from 'pinia';
import { fetchNotifications } from '../services/notifications.service.js'; 

export const useNotificationStore = defineStore('notification', {
    state: () => ({
        notifications: [],
    }),
    getters: {
        getNotifications: (state) => state.notifications,
    },
    actions: {
        async fetchNotifications() {
            try {
                const notifications = await fetchNotifications();
                this.notifications = notifications;
            } catch (error) {
                throw error;
            }
        }
    }
})