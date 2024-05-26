import { defineStore } from 'pinia';
import { fetchNotifications } from '../services/notifications.service.js'; 
import { useAuthStore } from './auth.js';

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
                const token = useAuthStore().token;
                const notifications = await fetchNotifications(token);
                this.notifications = notifications;
            } catch (error) {
                throw error;
            }
        }
    }
})