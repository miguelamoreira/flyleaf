import { defineStore } from 'pinia';
import { fetchRequests, createRequest, updateRequest } from '../services/requests.service.js'; 
import { useAuthStore } from './auth.js';

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
                const token = useAuthStore().token;
                const requests = await fetchRequests(token);
                this.requests = requests;
            } catch (error) {
                throw error;
            }
        },
        async createNewRequest(requestData) {
            try {
                const token = useAuthStore().token;
                const newRequest = await createRequest(requestData, token);
                this.requests.push(newRequest);
                await this.fetchRequests();
            } catch (error) {
                throw error;
            }
        },
        async updateRequest(requestId, updatedData) {
            try {
                const token = useAuthStore().token;
                await updateRequest(requestId, updatedData, token);
                await this.fetchRequests();
            } catch (error) {
                throw error;
            }
        }
    }
})