import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000';

const apiClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
});

export const fetchRequests = async (token) => {
    try {
      const response = await apiClient.get('/requests', {
        headers: { Authorization: `Bearer ${token}` }
      }); 
      return response.data.data;
    } catch (error) {
      throw new Error('Failed to fetch book requests');
    }
};

export const createRequest = async (requestData, token) => {
  try {
      const response = await apiClient.post('/requests', requestData,
      {
        headers: { 'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` }
      });
      return response.data.data;
  } catch (error) {
      throw new Error('Failed to create book request');
  }
};

export const updateRequest = async (requestId, requestData, token) => {
  try {
      const response = await apiClient.patch(`/requests/${requestId}`, requestData,
      {
        headers: { Authorization: `Bearer ${token}` }
      });
      return response.data.data;
  } catch (error) {
      throw new Error('Failed to update book request');
  }
};