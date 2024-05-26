import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000';

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

export const createReading = async (idUtilizador, idLivro, token) => {
  try {
      const response = await apiClient.post('/readings', {
        idUtilizador,
        idLivro
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data.data;
  } catch (error) {
      throw new Error('Failed to create reading');
  }
};
