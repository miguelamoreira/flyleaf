import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000';

const apiClient = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const fetchReviews = async (bookId) => {
    try {
        const response = await apiClient.get(`/books/${bookId}/reviews`);
        return response.data.data; 
    } catch (error) {
        throw new Error('Failed to fetch book reviews');
    }
};

export const createReviewOrReading = async (bookId, reviewData) => {
    try {
        const response = await apiClient.post(`/books/${bookId}/reviews`, reviewData); 
        return response.data; 
    } catch (error) {
        throw new Error('Failed to create review or reading');
    }
};
