import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000';

const apiClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
});

export const login = async (emailUtilizador, passeUtilizador) => {
    try {
      const response = await apiClient.post('/users/login', { emailUtilizador, passeUtilizador });
      return { token: response.data.token, userType: response.data.userType };
    } catch (error) {
      throw new Error('Login failed');
    }
};

export const signup = async (nomeUtilizador, emailUtilizador, passeUtilizador) => {
  try {
    const response = await apiClient.post('/users', { nomeUtilizador, emailUtilizador, passeUtilizador});
    return response.data;
  } catch (error) {
    throw new Error('Signup failed');
  }
};

export default apiClient;
