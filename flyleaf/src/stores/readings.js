import { defineStore } from 'pinia';
import { fetchReadings, createReading, deleteReading } from '../services/readings.service.js'; 
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
        async createReading(userId, bookId) {
            try {
                const token = useAuthStore().token;
                const newReading = await createReading(userId, bookId, token);
                this.readings.push(newReading);
            } catch (error) {
                throw error;
            }
        },
        async deleteReading(reading) {
            try {
                const token = useAuthStore().token;
                await deleteReading(reading.dataLeitura, reading.idUtilizador, reading.idLivro, token);
                await this.fetchReadings();
            } catch (error) {
                throw error;
            }
        }
    }
})