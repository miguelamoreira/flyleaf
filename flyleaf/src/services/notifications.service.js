import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000';
//const baseURL = 'https://flyleaf-backend.onrender.com/'

const apiClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
});

export const fetchNotifications = async (token) => {
    try {
      const response = await apiClient.get('/notifications', {
        headers: { Authorization: `Bearer ${token}` }
      }); 
      return response.data.data;
    } catch (error) {
      throw new Error('Failed to fetch notifications');
    }
};

export const fetchNotificationsSettings = async (userId, token) => {
  try {
    const response = await apiClient.get(`/users/${userId}/notifications/settings`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data.data;
  } catch (error) {
      throw new Error('Failed to fetch notifications settings');
  }
}

export const updateNotification = async (typeNotifId, userId, state, token) => {
  try {
    const response = await apiClient.patch(`/users/${userId}/notifications/settings`, { typeNotifId, state}, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data.msg; 
  } catch (error) {
    throw new Error('Failed to update notification status');
  }
};

export const updateFavouriteGenres = async (userId, genres, state, token) => {
  try {
    const response = await apiClient.put(`/users/${userId}/favouriteGenres`, { genres, state }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data.data; 
  } catch (error) {
    throw new Error('Failed to update favourite genres');
  }
};

export default apiClient;