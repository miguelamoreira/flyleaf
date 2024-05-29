import { defineStore } from 'pinia';
import { fetchReviews, createReviewOrReading, updateReview, deleteReview } from '../services/reviews.service.js'; 
import { useAuthStore } from './auth.js';

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
                const token = useAuthStore().token;
                const reviews = await fetchReviews(bookId, token);
                this.reviews = reviews;
            } catch (error) {
                throw error;
            }
        },
        async createReviewOrReading(bookId, reviewData) {
            try {
                const token = useAuthStore().token;
                const newReview = await createReviewOrReading(bookId, reviewData, token);
                this.reviews.push(newReview); 
            } catch (error) {
                throw error;
            }
        },
        async deleteReview(bookId, reviewId) {
            try {
                const token = useAuthStore().token;
                await deleteReview(bookId, reviewId, token);
                await this.fetchReviews(bookId);
            } catch (error) {
                throw error;
            }
        },
        async updateReview(bookId, reviewId, reviewData) {
            try {
                const token = useAuthStore().token;
                await updateReview(bookId, reviewId, reviewData, token);
                await this.fetchReviews(bookId);
            } catch (error) {
                throw error;
            }
        }
    }
});