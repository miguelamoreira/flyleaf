import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000';

const apiClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
});

export const fetchLists = async (token) => {
    try {
      const response = await apiClient.get('/reading-lists', {
        headers: { Authorization: `Bearer ${token}` }
      }); 
      return response.data.data;
    } catch (error) {
      throw new Error('Failed to fetch reading lists');
    }
};

export const fetchList = async (readingListId, token) => {
  try {
    const response = await apiClient.get(`/reading-lists/${readingListId}`, {
      headers: { Authorization: `Bearer ${token}` }
    }); 
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch reading list');
  }
}

export const deleteList = async (readingListId, token) => {
  try {
    const response = await apiClient.delete(`/reading-lists/${readingListId}`, {
      headers: { Authorization: `Bearer ${token}` }
    }); 
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch reading list');
  }
}