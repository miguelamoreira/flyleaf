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
        async fetchReviews() {
            try {
                const reviews = await fetchReviews();
                this.reviews = reviews;
            } catch (error) {
                throw error;
            }
        },
        async createReviewOrReading(bookId, reviewData) {
            try {
                const newReview = await createReviewOrReading(bookId, reviewData);
                this.requests.push(newReview);
            } catch (error) {
                throw error;
            }
        },
    }
})