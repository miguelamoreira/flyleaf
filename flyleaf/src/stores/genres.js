import { defineStore } from 'pinia';
import { fetchGenres } from '../services/genres.service.js'; 
import { useAuthStore } from './auth.js';

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
                const token = useAuthStore().token;
                const genres = await fetchGenres(token);
                this.genres = genres;
            } catch (error) {
                throw error;
            }
        }
    }
})