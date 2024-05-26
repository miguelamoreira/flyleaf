import { defineStore } from 'pinia';
import { fetchLists } from '../services/lists.service.js'; 
import { useAuthStore } from './auth.js';

export const useListStore = defineStore('list', {
    state: () => ({
        lists: [],
    }),
    getters: {
        getLists: (state) => state.lists,
    },
    actions: {
        async fetchLists() {
            try {
                const token = useAuthStore().token;
                const lists = await fetchLists(token);
                this.lists = lists;
            } catch (error) {
                throw error;
            }
        }
    }
})