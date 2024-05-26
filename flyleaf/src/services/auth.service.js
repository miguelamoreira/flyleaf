import axios from 'axios';
import { useAuthStore } from '@/stores/auth.js';

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
      return { token: response.data.token, user: response.data.user };
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

export const getAllUsers = async (token) => {
  try {
    const response = await apiClient.get('/users', { headers: { Authorization: `Bearer ${token}` }});
    return response.data;
  } catch (error) {
    throw new Error('Fetching users failed');
  }
};

export const deleteUser = async (userId, token) => {
  try {
    const response = await apiClient.delete(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error deleting user')
  }
}

export const toggleState = async (userId, token, stateData) => {
  try {
    const response = await apiClient.patch(`/users/${userId}`, stateData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw new Error("Error updating user's state");
  }
}

export const updateAvatar = async (userId, token, avatarData) => {
  try {
      const response = await apiClient.patch(`/users/${userId}/avatar`, avatarData, {
          headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
  } catch (error) {
      throw new Error("Error updating user's avatar");
  }
}

export default apiClient;
