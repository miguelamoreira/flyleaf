<template>
  <v-container fluid>
    <v-row>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <v-col cols="10">
        <v-container fluid class="px-8">
          <v-row>
            <v-col cols="12" class="mx-8 mt-10 mx-lg-10 mx-xl-16 d-flex"> 
              <v-btn style="background-color: var(--vt-c-beige);" :elevation="0" :to="{name: 'catalogue'}"><img src="@/assets/images/icons/back.svg"></v-btn>
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">Catalogue</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12">
              <div class="d-flex flex-row mx-4 mb-4 flex-wrap flex-sm-nowrap justify-center px-12 mt-8">
                <div>
                  <v-card :elevation="4" style="width: 35vh; height: 55vh;" class="rounded-lg"> 
                    <img :src="`${book.capaLivro}`" style="width: 35vh; height: 55vh;">
                  </v-card>
                </div>
                <div class="ml-lg-8">
                  <div class="d-flex flex-row">
                    <p class="text-h6 font-weight-bold">{{ currentBook.nomeLivro }}</p>
                    <p class="text-body-2 mx-4 mt-2">{{ currentBook.anoLivro }}</p>
                  </div>
                  <p class="font-weight-bold">{{ checkAuthors(currentBook['authors']) }}</p>
                  <p class="my-12 font-weight-bold">{{ checkGenres(currentBook['categoria']) }}</p>
                  <p class="my-12 font-weight-bold">{{ averageRating }}/5</p>
                  <p class="mt-12 mb-6 font-weight-bold">Description</p>
                  <p class="text-center">
                    {{ currentBook.descricaoLivro }}
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="mx-12 mt-5 mx-lg-14 mx-xl-16">
              <h2 v-if="reviews.length > 0" style="font-family: Aleo, serif;" class="text-h5 font-weight-bold">Reviews</h2>
              <h2 v-else style="font-family: Aleo, serif;" class="text-h5 font-weight-bold">No reviews yet</h2>
            </v-col>
          </v-row>
          <v-row v-for="(row, rowIndex) in Math.ceil((reviews.length) / 2)" :key="rowIndex" justify="center" class="px-10">
            <v-col v-for="i in 2" :key="i" cols="12" sm="6" md="6">
              <v-card v-if="((rowIndex * 2) + (i - 1)) < reviews.length" class="rounded-lg pa-4 ma-4" style="background-color: var(--vt-c-yellow-light);" :elevation="2">
                <div class="d-flex">
                  <img :src="`/src/assets/images/avatars/${reviews[(rowIndex * 2) + (i - 1)].avatarUtilizador}`" width="80" class="mx-4">
                  <div class="d-flex flex-column text-center">
                    <v-card-title class="text-h6 font-weight-bold">{{ reviews[(rowIndex * 2) + (i - 1)].nomeUtilizador }}</v-card-title>
                    <p>{{ userBookCount(reviews[(rowIndex * 2) + (i - 1)].idUtilizador) }} books</p>
                  </div>
                </div>
                <v-card-text class="text-center pt-12">
                  {{ reviews[(rowIndex * 2) + (i - 1)].comentario }}
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
          <v-row justify-center>
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
    import { useBookStore } from '../stores/books.js';
    import { useReviewStore } from '../stores/reviews.js';
    import { useReadingsStore } from '../stores/readings';
    
    export default {
      components: {
        Sidebar, Navbar,
      },
      data() {
        return {
          bookId: null,
          book: null,
          bookStore: useBookStore(),
          reviewStore: useReviewStore(),
          readingsStore: useReadingsStore()
        }
      },
      computed: {
        books() {
          return this.bookStore.getBooks;
        },
        currentBook() {
          this.bookId = this.$route.params.bookId;
          this.book = this.books.find(book => book.idLivro == this.bookId)
          return this.book;
        },
        reviews() {
          const uniqueReviews = new Set();
          return this.reviewStore.getReviews.filter(review => {
            if (!uniqueReviews.has(review.idCritica)) {
              uniqueReviews.add(review.idCritica);
              return true;
            }
            return false;
          });
        },
        averageRating() {
          if (this.reviews.length === 0) return 0;

          const totalRating = this.reviews.reduce((sum, review) => {
            const rating = parseFloat(review.classificacao);
            if (isNaN(rating)) return sum;
            return sum + rating;
          }, 0);
          
          const average = totalRating / this.reviews.length;
          if (isNaN(average)) return 0;
          return average.toFixed(1);
        }
      },
      mounted() {
        this.bookStore.fetchBooks();
        this.currentBook;
        this.reviewStore.fetchReviews(this.bookId)
        this.readingsStore.fetchReadings();
      },
      methods: {
        userBookCount(idUtilizador) {
          return this.readingsStore.getReadings.filter(reading => reading.idUtilizador === idUtilizador).length;
        },
        checkAuthors(authors) {
          if (Array.isArray(authors)) {
            return authors.join(', ')
          }
          return authors
        },
        checkGenres(genres) {
          if (Array.isArray(genres)) {
            return genres.join(', ')
          }
          return genres
        }
          }
    }
</script>
    