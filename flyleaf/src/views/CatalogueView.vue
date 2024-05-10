<template>
  <v-container fluid>
    <v-row>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <v-col cols="10" style="position: relative; left: 0vh; top: 0vh;">
        <v-container fluid>
          <v-row class="d-flex justify-space-between flex-nowrap flex-md-wrap" align="center">
            <v-col cols="6" class="mx-12 mt-8 mx-lg-14 mx-xl-16">
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">Catalogue</h2>
            </v-col>
            <v-col cols="4" class="ml-12 mt-8 mx-xl-16 d-flex flex-end flex-nowrap flex-md-wrap">
              <v-text-field v-model="searchQuery" class="rounded-lg ml-4" style="max-width: 400px; background-color: var(--vt-c-yellow-light);" hide-details label="Search by title, author, year or genre"></v-text-field>
            </v-col>
          </v-row>
          <v-row v-for="(row, rowIndex) in Math.ceil((filteredBooks.length + 1) / 4)" :key="rowIndex" justify="center">
            <v-col v-for="i in 4" :key="i" cols="12" sm="6" md="3">
              <div class="book mx-12 mb-6 mx-lg-14 my-lg-8" style="position: relative;"> 
                <router-link v-if="((rowIndex * 4) + (i - 1)) < filteredBooks.length" :to="{ name: 'book'}">
                  <v-card :elevation="4" class="rounded-lg" style="width: 25vh; height: 40vh;">
                    <img :src="`/src/assets/images/books/${filteredBooks[(rowIndex * 4) + (i - 1)].image}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </router-link>
                <div v-if="((rowIndex * 4) + (i - 1)) < filteredBooks.length" style="position: absolute; bottom: -55px; left: 0; right: 0;">
                  <div class="d-flex text-center" style="position: absolute; left: 4vh; bottom: 7.5vh;">
                    <v-btn :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0"><img src="@/assets/images/icons/arrow.svg" width="30" height="30"></v-btn>
                    <v-btn :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0"><img src="@/assets/images/icons/review.svg" width="30" height="30"></v-btn>
                  </div>
                  <p class="font-weight-bold mt-2">{{ filteredBooks[(rowIndex * 4) + (i - 1)].nomeLivro }}</p>
                  <p>{{ filteredBooks[(rowIndex * 4) + (i - 1)]['autores.nomeAutor'] }}</p>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row justify-center>
            <div class="mx-12 my-6 mx-lg-14 my-lg-8" style="position: relative;"> 
                <v-card :elevation="0" class="rounded-lg" height="320" style="width: 160vh; height: 40vh; background-color: var(--vt-c-beige);"></v-card> 
            </div>
          </v-row>
          <v-row justify-center v-if="filteredBooks == 0">
            <div class="mx-12 my-6 mx-lg-14 my-lg-8" style="position: relative;"> 
                <v-card :elevation="0" class="rounded-lg" height="320" style="width: 160vh; height: 40vh; background-color: var(--vt-c-beige);"></v-card> 
            </div>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';
import { useAuthStore } from '../stores/auth.js';
import { useBookStore } from '../stores/books.js';
import { useGenreStore } from '../stores/genres.js';

export default {
  components: {
    Sidebar, Navbar,
  },
  data() {
    return {
      authStore: useAuthStore(),
      bookStore: useBookStore(),
      genreStore: useGenreStore(),
      searchQuery: '',
    }
  },
  computed: {
    user() {
      return this.authStore.getUser;
    },
    books() {
      return this.bookStore.getBooks;
    },
    genres() {
      return this.genres;
    },
    filteredBooks() {
      const query = this.searchQuery.toLowerCase();
      return this.books.filter(book => {
        const title = book.nomeLivro.toLowerCase();
        const author = book['autores.nomeAutor'].toLowerCase();
        const category = book['categoria.nomeCategoria'].toLowerCase();
        const year = book.anoLivro.toString();
        return title.includes(query) || author.includes(query) || category.includes(query) || year.includes(query);
      });
    }
  },
  methods: {
    async searchBooks() {
      try {
        await this.bookStore.fetchBooks();
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    }
  },
  mounted() {
    this.genreStore.fetchGenres();
    this.searchBooks();
  },
}
</script>
