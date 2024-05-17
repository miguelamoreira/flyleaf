import { defineStore } from 'pinia';
import { fetchReviews, createReviewOrReading } from '../services/reviews.service.js'; 

export const useReviewStore = defineStore('review', {
    state: () => ({
        reviews: [],
    }),
    getters: {
        getReviews: (state) => state.reviews,
    },
    actions: {
        async fetchReviews(bookId) {
            try {
                const reviews = await fetchReviews(bookId);
                this.reviews = reviews;
            } catch (error) {
                throw error;
            }
        },
        async createReviewOrReading(bookId, reviewData) {
            try {
                const newReview = await createReviewOrReading(bookId, reviewData);
                this.reviews.push(newReview); 
            } catch (error) {
                throw error;
            }
        },
    }
});