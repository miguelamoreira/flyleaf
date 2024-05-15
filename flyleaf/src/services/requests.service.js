import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000';

const apiClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
});

export const fetchRequests = async () => {
    try {
      const response = await apiClient.get('/requests'); 
      return response.data.data;
    } catch (error) {
      throw new Error('Failed to fetch book requests');
    }
};

export const createRequest = async (requestData) => {
  try {
      const response = await apiClient.post('/requests', requestData);
      return response.data.data;
  } catch (error) {
      throw new Error('Failed to create book request');
  }
};

export const updateRequest = async (requestId, requestData) => {
  try {
      const response = await apiClient.patch(`/requests/${requestId}`, requestData);
      return response.data.data;
  } catch (error) {
      throw new Error('Failed to update book request');
  }
};