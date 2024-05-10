import { defineStore } from 'pinia';
import { fetchLists } from '../services/lists.service.js'; 

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
                const lists = await fetchLists();
                this.lists = lists;
            } catch (error) {
                throw error;
            }
        }
    }
})