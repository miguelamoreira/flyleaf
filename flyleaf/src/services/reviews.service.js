import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000';

const apiClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
});

export const fetchReviews = async () => {
    try {
      const response = await apiClient.get(`/books/${bookId}/reviews`); 
      return response.data.reviews;
    } catch (error) {
      throw new Error('Failed to fetch book requests');
    }
};

export const createReviewOrReading = async (reviewData) => {
    try {
        const response = await apiClient.post(`/book/${bookId}/reviews`, reviewData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create review or reading');
    }
};