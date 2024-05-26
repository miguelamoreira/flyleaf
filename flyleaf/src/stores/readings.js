import { defineStore } from 'pinia';
import { fetchReadings, createReading } from '../services/readings.service.js'; 
import { useAuthStore } from './auth.js';

export const useReadingsStore = defineStore('reading', {
    state: () => ({
        readings: [],
    }),
    getters: {
        getReadings: (state) => state.readings,
    },
    actions: {
        async fetchReadings() {
            try {
                const token = useAuthStore().token;
                const readings = await fetchReadings(token);
                this.readings = readings;
            } catch (error) {
                throw error;
            }
        },
        async createReading(idUtilizador, idLivro) {
            try {
                const token = useAuthStore().token;
                const newReading = await createReading(idUtilizador, idLivro, token);
                this.readings.push(newReading);
            } catch (error) {
                throw error;
            }
        }
    }
})