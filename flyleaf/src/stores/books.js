import { defineStore } from 'pinia';
import { fetchBooks, fetchBookById } from '../services/books.service.js'; 

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
                const books = await fetchBooks();
                this.books = books;
            } catch (error) {
                throw error;
            }
        },
        async fetchBookById(bookId) {
            try {
                const book = await fetchBookById(bookId); 
                this.currentBook = book;
            } catch (error) {
                throw error;
            }
        }
    }
})