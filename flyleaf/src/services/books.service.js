import axios from 'axios';

const baseURL = 'http://127.0.0.1:3000';

const apiClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json'
    }
});

export const fetchBooks = async () => {
    try {
      const response = await apiClient.get('/books'); 
      return response.data.data;
    } catch (error) {
      throw new Error('Failed to fetch books');
    }
};

export const fetchBookById = async (bookId) => {
  try {
      const response = await apiClient.get(`/books/${bookId}`);
      return response.data.data;
  } catch (error) {
      throw new Error('Failed to fetch book by ID');
  }
};