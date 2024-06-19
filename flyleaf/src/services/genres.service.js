import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000';
//const baseURL = 'https://flyleaf-backend.onrender.com/'

const apiClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
});

export const fetchGenres = async (token) => {
    try {
      const response = await apiClient.get('/categories', {
        headers: { Authorization: `Bearer ${token}` }
      }); 
      return response.data.data;
    } catch (error) {
      throw new Error('Failed to fetch genres');
    }
};