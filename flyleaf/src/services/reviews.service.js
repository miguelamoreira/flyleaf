import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000';
//const baseURL = 'https://flyleaf-backend.onrender.com/'

const apiClient = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const fetchReviews = async (bookId, token) => {
    try {
        const response = await apiClient.get(`/books/${bookId}/reviews`, {
            headers: { Authorization: `Bearer ${token}` }
          }); 
        return response.data.data; 
    } catch (error) {
        throw new Error('Failed to fetch book reviews');
    }
};

export const createReviewOrReading = async (bookId, reviewData, token) => {
    try {
        const response = await apiClient.post(`/books/${bookId}/reviews`, reviewData,
      {
        headers: { Authorization: `Bearer ${token}` }
      });
        return response.data; 
    } catch (error) {
        throw new Error('Failed to create review or reading');
    }
};

export const updateReview = async (bookId, reviewId, reviewData, token) => {
    try {
        const response = await apiClient.patch(`/books/${bookId}/reviews/${reviewId}`, reviewData,
      {
        headers: { Authorization: `Bearer ${token}` }
      });
        return response.data; 
    } catch (error) {
        throw new Error('Failed to create review or reading');
    }
};

export const deleteReview = async (bookId, reviewId, token) => {
    try {
        const response = await apiClient.delete(`/books/${bookId}/reviews/${reviewId}`,
      {
        headers: { Authorization: `Bearer ${token}` }
      });
        return response; 
    } catch (error) {
        throw new Error('Failed to create review or reading');
    }
};