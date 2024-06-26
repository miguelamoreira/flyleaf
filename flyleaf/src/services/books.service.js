import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000';
//const baseURL = 'https://flyleaf-backend.onrender.com/'

const apiClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
});

export const fetchBooks = async (token) => {
    try {
      const response = await apiClient.get('/books', {
        headers: { Authorization: `Bearer ${token}` }
      }); 
      return response.data.data;
    } catch (error) {
      throw new Error('Failed to fetch books');
    }
};

export const fetchBookById = async (bookId, token) => {
  try {
      const response = await apiClient.get(`/books/${bookId}`, {
        headers: { Authorization: `Bearer ${token}` }
      }); 
      return response.data.data;
  } catch (error) {
      throw new Error('Failed to fetch book by ID');
  }
};

export const deleteBookById = async (bookId, token) => {
  try {
    const response = await apiClient.delete(`/books/${bookId}`, {
      headers: { Authorization: `Bearer ${token}` }
    }); 
    return response.data.data;
  } catch (error) {
      throw new Error('Failed to delete book');
  }
}

export const fetchHighestRated = async (token) => {
  try {
    const response = await apiClient.get('/books/highest-rated'); 
    return response.data.data;
  } catch (error) {
    throw new Error('Failed to fetch books');
  }
};