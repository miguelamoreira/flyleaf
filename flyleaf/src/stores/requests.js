import { defineStore } from 'pinia';
import { fetchRequests } from '../services/requests.service.js'; 

export const useRequestStore = defineStore('request', {
    state: () => ({
        requests: [],
    }),
    getters: {
        getRequests: (state) => state.requests,
    },
    actions: {
        async fetchRequests() {
            try {
                const requests = await fetchRequests();
                this.requests = requests;
            } catch (error) {
                throw error;
            }
        }
    }
})