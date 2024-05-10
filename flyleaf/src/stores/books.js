import { defineStore } from 'pinia';
import { fetchBooks } from '../services/books.service.js'; 

export const useBookStore = defineStore('book', {
    state: () => ({
        books: [],
    }),
    getters: {
        getBooks: (state) => state.books,
    },
    actions: {
        async fetchBooks() {
            try {
                const books = await fetchBooks();
                this.books = books;
            } catch (error) {
                throw error;
            }
        }
    }
})