import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000';
//const baseURL = 'https://flyleaf-backend.onrender.com/'

const apiClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
});

export const fetchReadings = async (token) => {
    try {
      const response = await apiClient.get('/readings', {
        headers: { Authorization: `Bearer ${token}` }
      }); 
      return response.data.data;
    } catch (error) {
      throw new Error('Failed to fetch readings');
    }
};

export const createReading = async (userId, bookId, token) => {
  try {
      const response = await apiClient.post('/readings', {
        userId,
        bookId
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data.data;
  } catch (error) {
      throw new Error('Failed to create reading');
  }
};

export const deleteReading = async (date, userId, bookId, token) => {
  try {
    const response = await apiClient.delete('/readings', { data: { bookId, userId, date },
      headers: { Authorization: `Bearer ${token}` }
    });
    return response;
  } catch (error) {
    throw new Error('Failed to delete reading');
  }
}
