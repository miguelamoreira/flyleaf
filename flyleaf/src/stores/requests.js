import { defineStore } from 'pinia';
import { fetchRequests, createRequest } from '../services/requests.service.js'; 

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
        },
        async createNewRequest(requestData) {
            try {
                const newRequest = await createRequest(requestData);
                this.requests.push(newRequest);
            } catch (error) {
                throw error;
            }
        }
    }
})