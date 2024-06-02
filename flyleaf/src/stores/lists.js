import { defineStore } from 'pinia';
import { fetchLists, fetchList, deleteList } from '../services/lists.service.js'; 
import { useAuthStore } from './auth.js';

export const useListStore = defineStore('list', {
    state: () => ({
        lists: [],
        list: []
    }),
    getters: {
        getLists: (state) => state.lists,
        getList: (state) => state.list
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
        },
        async fetchList(readingListId) {
            try {
                const token = useAuthStore().token;
                const list = await fetchList(readingListId, token);
                this.list = list;
            } catch (error) {
                throw error;
            }
        },
        async deleteList(readingListId) {
            try {
                const token = useAuthStore().token;
                await deleteList(readingListId, token);
            } catch (error) {
                throw error;
            }
        }
    }
})