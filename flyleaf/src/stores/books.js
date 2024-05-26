import { defineStore } from 'pinia';
import { fetchBooks, fetchBookById } from '../services/books.service.js'; 
import { useAuthStore } from './auth.js';

export const useBookStore = defineStore('book', {
    state: () => ({
        books: [],
        currentBook: null,
    }),
    getters: {
        getBooks: (state) => state.books,
        getCurrentBook: (state) => state.currentBook,
    },
    actions: {
        async fetchBooks() {
            try {
                const token = useAuthStore().token;
                const books = await fetchBooks(token);
                this.books = books;
            } catch (error) {
                throw error;
            }
        },
        async fetchBookById(bookId) {
            try {
                const token = useAuthStore().token;
                const book = await fetchBookById(bookId, token); 
                this.currentBook = book;
            } catch (error) {
                throw error;
            }
        }
    }
})