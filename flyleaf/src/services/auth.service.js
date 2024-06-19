import axios from 'axios';
import { useAuthStore } from '@/stores/auth.js';

const baseURL = 'http://127.0.0.1:3000';
//const baseURL = 'https://flyleaf-backend.onrender.com/'

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

export const findUserById = async (userId, token) => {
  try {
      const response = await apiClient.get(`/users/${userId}`, { headers: { Authorization: `Bearer ${token}` } });
      return response.data;
  } catch (error) {
      throw new Error('Fetching user failed');
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
    const response = await apiClient.patch(`/users/${userId}/state`, stateData, {
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

export const updateUser = async (userId, token, userData) => {
  try {
    const response = await apiClient.put(`/users/${userId}`, userData, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw new Error("Error updating user");
  }
};

export const getFavourites = async (userId, token) => {
  try {
      const response = await apiClient.get(`/users/${userId}/favourites`, {
          headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
  } catch (error) {
      throw new Error("Error fetching user's favorite books");
  }
}

export const addFavourite = async (userId, token, bookId) => {
  try {
      const response = await apiClient.post(`/users/${userId}/favourites`, {idLivro: bookId}, {
          headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
  } catch (error) {
      throw new Error("Error adding book to favorites");
  }
}

export const removeFavourite = async (userId, token, bookId) => {
  try {
      const response = await apiClient.delete(`/users/${userId}/favourites`, {data: { idLivro: bookId }, 
          headers: { Authorization: `Bearer ${token}` }
      });
      return response.data;
  } catch (error) {
      throw new Error("Error adding book to favorites");
  }
}

export const updateFavourites = async (userId, token, oldFavId, newFavId) => {
  try {
    const response = await apiClient.put(`/users/${userId}/favourites`, { oldFav: oldFavId, newFav: newFavId }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error updating favorites');
  }
};

export default apiClient;
