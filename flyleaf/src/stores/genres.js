import { defineStore } from 'pinia';
import { fetchGenres } from '../services/genres.service.js'; 

export const useGenreStore = defineStore('genre', {
    state: () => ({
        genres: [],
    }),
    getters: {
        getGenres: (state) => state.genres,
    },
    actions: {
        async fetchGenres() {
            try {
                const genres = await fetchGenres();
                this.genres = genres;
            } catch (error) {
                throw error;
            }
        }
    }
})