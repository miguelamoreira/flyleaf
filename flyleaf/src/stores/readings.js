import { defineStore } from 'pinia';
import { fetchReadings } from '../services/readings.service.js'; 

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
                const readings = await fetchReadings();
                this.readings = readings;
            } catch (error) {
                throw error;
            }
        }
    }
})