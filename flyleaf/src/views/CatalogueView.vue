<template>
  <v-container fluid>
    <v-row>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <v-col cols="10" style="position: relative; left: 0vh; top: 0vh;">
        <v-container fluid>
          <v-row class="d-flex justify-space-between flex-nowrap flex-md-wrap" align="center">
            <v-col cols="2" class="mx-12 mt-8 mx-lg-14 mx-xl-16">
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">Catalogue</h2>
            </v-col>
            <v-col cols="5" class="mx-3 mt-8 d-flex flex-end flex-nowrap flex-md-wrap align-center">
              <v-btn @click="orderBooks" size="large" style="background-color: var(--vt-c-yellow-light); color: var(--vt-c-beige-light);">{{ btnOrder }}</v-btn>
              <v-text-field id="searchBook" v-model="searchQuery" class="rounded-lg ml-4" style="max-width: 400px; background-color: var(--vt-c-yellow-light);" hide-details label="Search by title, author, year or genre"></v-text-field>
            </v-col>
          </v-row>
          <v-row v-for="(row, rowIndex) in Math.ceil((filteredBooks.length + 1) / 4)" :key="rowIndex" justify="center">
            <v-col v-for="i in 4" :key="i" cols="12" sm="6" md="3">
              <div class="book mx-12 mb-6 mx-lg-14 my-lg-10" style="position: relative;"> 
                <router-link v-if="((rowIndex * 4) + (i - 1)) < filteredBooks.length" :to="{ name: 'book', params: { bookId: filteredBooks[(rowIndex * 4) + (i - 1)].idLivro }}">
                  <v-card :elevation="4" class="rounded-lg" style="width: 25vh; height: 40vh;">
                    <img :src="`${filteredBooks[(rowIndex * 4) + (i - 1)].capaLivro}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </router-link>
                <div v-if="((rowIndex * 4) + (i - 1)) < filteredBooks.length && user.idTipoUtilizador === 1" style="position: absolute; bottom: -55px; left: 0; right: 0;">
                  <div class="d-flex text-center" style="position: absolute; left: 4vh; bottom: 7.5vh;">
                    <v-btn @click="createReading(filteredBooks[(rowIndex * 4) + (i - 1)].idLivro)" :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0" style="background-color: rgba(64, 52, 43, 0.9); width: 8vh; height: 5vh"><img src="@/assets/images/icons/arrow.svg" style="width: 4vh; height: 4vh;"></v-btn>
                    <v-btn @click="openNewReadingModal(filteredBooks[(rowIndex * 4) + (i - 1)])" :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0" style="background-color: rgba(64, 52, 43, 0.9); width: 8vh; height: 5vh"><img src="@/assets/images/icons/review.svg" style="width: 4vh; height: 4vh;"></v-btn>
                  </div>
                  <p class="font-weight-bold mt-2">{{ filteredBooks[(rowIndex * 4) + (i - 1)].nomeLivro }}</p>
                  <p>{{ filteredBooks[(rowIndex * 4) + (i - 1)]['autors.nomeAutor'] }}</p>
                </div>
                <div v-if="((rowIndex * 4) + (i - 1)) < filteredBooks.length && user.idTipoUtilizador === 2" style="position: absolute; bottom: -55px; left: 0; right: 0;" class="d-flex align-center justify-space-between">
                  <div>
                    <p class="font-weight-bold mt-2">{{ filteredBooks[(rowIndex * 4) + (i - 1)].nomeLivro }}</p>
                    <p>{{ filteredBooks[(rowIndex * 4) + (i - 1)]['autors.nomeAutor'] }}</p>
                  </div>
                  <v-btn @click="deleteBook(filteredBooks[(rowIndex * 4) + (i - 1)].idLivro)" :elevation="0" style="background-color: var(--vt-c-beige); position: absolute; left: 20vh;" size="small"><img src="@/assets/images/icons/delete.svg"></v-btn>
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

  <!-- Confirming reading logging modal (UX purposes) -->
  <v-snackbar v-model="modalConfirm" color="brown-darken-1">
      {{ modalText }}
      <template v-slot:actions>
        <v-btn  variant="text" @click="modalConfirm = false">Close</v-btn>
      </template>
  </v-snackbar>

  <!-- New reading/review modal -->
  <v-dialog v-model="newReadingModal" max-width="600px" persistent>
      <v-card class="rounded-lg pa-4" style="background-color: var(--vt-c-beige);">
        <v-card-title style="font-family: Aleo, serif;" class="text-h5">New reading</v-card-title>
        <v-card-text>
          <v-row class="d-flex flex-row-reverse">
            <v-col cols="7">
              <p>{{ newReadingTitle }}</p>
              <p class="mb-4">{{ newReadingAuthor }}</p>
              <v-textarea v-model="newReadingReview" label="Review" max-length="150" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg mb-4"></v-textarea>
              <v-select v-model="newReadingRating" :items="[1, 2, 3, 4, 5]" label="Rating" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg mb-4"></v-select>
            </v-col>
            <v-col>
              <img :src="newReadingTitle ? `data:image/jpg;base64,${newReadingCover}` : '/src/assets/images/books/none.svg'" width="200" height="320" class="rounded-lg">
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);" text @click="saveNewReading">Save</v-btn>
          <v-btn style="background-color: var(--vt-c-green-dark); color: var(--vt-c-green-light);" text @click="closeNewReadingModal">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import Navbar from '@/components/Navbar.vue';
import { useAuthStore } from '../stores/auth.js';
import { useBookStore } from '../stores/books.js';
import { useGenreStore } from '../stores/genres.js';
import { useReadingsStore } from '../stores/readings.js';
import { useReviewStore } from '../stores/reviews.js';

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
      readingsStore: useReadingsStore(),
      reviewStore: useReviewStore(),
      modalText: '',
      modalConfirm: false,
      newReadingModal: false,
      newReadingTitle: '',
      newReadingAuthor: '',
      newReadingCover: '',
      newReadingReview: '',
      newReadingRating: null,
      btnOrder: 'A-Z',
      sortedBooks: []
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
      let filtered = this.books.filter(book => {
        const title = book.nomeLivro.toLowerCase();
        const author = book['autors.nomeAutor'].toLowerCase();
        const category = book['categoria.nomeCategoria'].toLowerCase();
        const year = book.anoLivro.toString();
        if (title.includes(query) || author.includes(query) || category.includes(query) || year.includes(query)) {
          return true;
        }
        return false;
      });

      return filtered.sort((a, b) => {
        if (this.btnOrder === 'A-Z') {
          return a.nomeLivro.localeCompare(b.nomeLivro);
        } else {
          return b.nomeLivro.localeCompare(a.nomeLivro);
        }
      });
    },
  },
  methods: {
    async searchBooks() {
      try {
        await this.bookStore.fetchBooks();
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    },
    async createReading(idLivro) {
      const idUtilizador = this.authStore.getUser ? this.authStore.getUser.idUtilizador : null;

      try {
        await this.readingsStore.createReading(idUtilizador, idLivro);
        this.modalConfirm = true;
        this.modalText = "Your reading has been logged sucessfully."

        await this.readingsStore.fetchReadings();
      } catch (error) {
        console.error('Error creating reading:', error);
      }
    },
    closeReadingModal() {
      this.readingModal = false;
      this.textModal = '';
    },
    openNewReadingModal(book) {
      this.newReadingTitle = book.nomeLivro;
      this.newReadingAuthor = book['autors.nomeAutor'];
      this.newReadingCover = book.capaLivro;
      this.newReadingModal = true;
    },
    closeNewReadingModal() {
      this.newReadingModal = false;
      this.newReadingReview = '';
      this.newReadingRating = null;
      this.newReadingTitle = '';
      this.newReadingAuthor = '';
      this.newReadingCover = '';
      },
    async saveNewReading() {
      try {
        const book = this.bookStore.getBooks.find(book => book.nomeLivro === this.newReadingTitle);
        if (!book) {
          return;
        }
        const bookId = book.idLivro;
        const reviewData = {
          idLivro: bookId,
          idUtilizador: this.user.idUtilizador,
          comentario: this.newReadingReview,
          classificacao: this.newReadingRating
        };

        await this.reviewStore.createReviewOrReading(bookId, reviewData);
        await this.readingsStore.fetchReadings();
        this.closeNewReadingModal();
        this.modalConfirm = true;
        this.modalText = "Review created sucessfully."
      } catch (error) {
        console.error('Error saving new reading:', error);
      }
    },
    async deleteBook(bookId) {
      try {
        await this.bookStore.deleteBookById(bookId);
        this.modalConfirm = true;
        this.modalText = "Book deleted sucessfully."
      } catch (error) {
        console.log('Error deleting book:', error);
      }
    },
    orderBooks() {
      this.btnOrder = this.btnOrder === 'A-Z' ? 'Z-A' : 'A-Z';
    },
  },
  mounted() {
    this.genreStore.fetchGenres();
    this.searchBooks();
  },
}
</script>
