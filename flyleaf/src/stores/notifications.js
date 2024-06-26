import { defineStore } from 'pinia';
import { fetchNotifications, fetchNotificationsSettings, updateNotification, updateFavouriteGenres } from '../services/notifications.service.js'; 
import { useAuthStore } from './auth.js';

export const useNotificationStore = defineStore('notification', {
    state: () => ({
        notifications: [],
        notificationSettings: [],
    }),
    getters: {
        getNotifications: (state) => state.notifications,
        getNotificationSettings: (state) => state.notificationSettings,
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
        },
        async fetchNotificationsSettings(userId) {
            try {
                const token = useAuthStore().token;
                const settings = await fetchNotificationsSettings(userId, token);
                this.notificationSettings = settings;
            } catch (error) {
                throw error;
            }
        },
        async updateNotification(typeNotifId, userId, state) {
            try {
                const token = useAuthStore().token;
                await updateNotification(typeNotifId, userId, state, token);
                await this.fetchNotifications();
            } catch (error) {
                throw error;
            }
        },
        async updateFavouriteGenres(userId, genres, state) {
            try {
                const token = useAuthStore().token;
                await updateFavouriteGenres(userId, genres, state, token);
                await this.fetchNotifications();
            } catch (error) {
                throw error;
            }
        }
    }
})