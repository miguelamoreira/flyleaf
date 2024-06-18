<template>
  <v-container fluid>
    <v-row>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <v-col cols="10">
        <v-container fluid>
          <v-row>
            <v-col cols="12" class="mx-12 mt-10 mx-lg-14 mx-xl-16">
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">My readings</h2>
            </v-col>
          </v-row>
          <v-row v-for="(row, rowIndex) in Math.ceil((readings.length + 1) / 4)" :key="rowIndex" justify="center">
            <v-col v-for="i in 4" :key="i" cols="12" sm="6" md="3">
              <div class="book mx-12 my-6 mx-lg-14 my-lg-8" style="position: relative;"> 
                <div v-if="((rowIndex * 4) + (i - 1)) < readings.length">
                  <v-card :elevation="4" class="rounded-lg" height="320" style="width: 25vh; height: 40vh;">
                    <img :src="`${readings[(rowIndex * 4) + (i - 1)].Livro.capaLivro}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </div>
                <div v-if="((rowIndex * 4) + (i - 1)) < readings.length" style="position: absolute; bottom: -55px; left: 0; right: 0;">
                  <div class="d-flex text-center" style="position: absolute; left: 4vh; bottom: 7.5vh;">
                    <v-btn @click="openReadingModal(readings[(rowIndex * 4) + (i - 1)])" :disabled="readings[(rowIndex * 4) + (i - 1)].criticaLivro === null" :elevation="0" class="btnReview rounded-ts-lg rounded-bs-lg rounded-0" style="background-color: rgba(64, 52, 43, 0.9); width: 8vh; height: 5vh"><img src="@/assets/images/icons/settings.svg" style="width: 4vh; height: 4vh;"></v-btn>
                    <v-btn @click="deleteReading(readings[(rowIndex * 4) + (i - 1)])" :elevation="0" class="btnDelete rounded-te-lg rounded-be-lg rounded-0" style="background-color: rgba(64, 52, 43, 0.9); width: 8vh; height: 5vh"><img src="@/assets/images/icons/delete.svg" style="width: 4vh; height: 4vh;"></v-btn>
                  </div>
                  <p class="font-weight-bold mt-2">{{ readings[(rowIndex * 4) + (i - 1)].Livro.nomeLivro }}</p>
                  <p>{{ readings[(rowIndex * 4) + (i - 1)].dataLeitura }}</p>
                </div>
              </div>
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
  
  <!-- Edit Reading Modal -->
  <v-dialog v-model="readingModal" max-width="600px" persistent>
      <v-card class="rounded-lg pa-4" style="background-color: var(--vt-c-beige);">
        <v-card-title style="font-family: Aleo, serif;" class="text-h5">New reading</v-card-title>
        <v-card-text>
          <v-row class="d-flex flex-row-reverse">
            <v-col cols="7">
              <v-select v-model="readingTitle" disabled label="Title" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg mb-2"></v-select>
              <p class="mb-4">{{ readingAuthor }}</p>
              <v-textarea v-model="review" label="Review" max-length="150" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg mb-4"></v-textarea>
              <v-select v-model="rating" :items="[1, 2, 3, 4, 5]" label="Rating" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg mb-4"></v-select>
            </v-col>
            <v-col>
              <img :src="`${readingCover}`" width="200" height="320" class="rounded-lg">
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);" text @click="saveReview">Save</v-btn>
          <v-btn style="background-color: var(--vt-c-red-medium); color: var(--vt-c-beige);" text @click="deleteReview(currentReading.Livro.idLivro, currentReading.criticaLivro.idCritica)">Delete</v-btn>
          <v-btn style="background-color: var(--vt-c-green-dark); color: var(--vt-c-green-light);" text @click="closeReadingModal">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="modalConfirm" color="brown-darken-1">
      {{ modalText }}
      <template v-slot:actions>
        <v-btn  variant="text" @click="modalConfirm = false">Close</v-btn>
      </template>
    </v-snackbar>
  
  </template>
  <script>
    import Sidebar from '@/components/Sidebar.vue';
    import Navbar from '@/components/Navbar.vue';
    import { useAuthStore } from '../stores/auth.js';
    import { useReadingsStore } from '../stores/readings.js';
    import { useReviewStore } from '../stores/reviews';
    
    export default {
      components: {
        Sidebar, Navbar,
      },
      data() {
        return {
          authStore: useAuthStore(),
          readingsStore: useReadingsStore(),
          reviewStore: useReviewStore(),
          readingModal: false,
          readingTitle: '',
          readingAuthor: '',
          review: '',
          rating: '',
          currentReading: '',
          modalConfirm: false,
          modalText: ''
        }
      },
      computed: {
        user() {
          return this.authStore.getUser;
        },
        readings() {
          this.user = this.authStore.getUser;
          const idUtilizador = this.user ? this.user.idUtilizador : null;
          return idUtilizador ? this.readingsStore.getReadings.filter(reading => reading.idUtilizador === idUtilizador) : [];
        }
      },
      methods: {
        async deleteReading(reading) {
          try {
            await this.readingsStore.deleteReading(reading);
            this.modalConfirm = true;
            this.modalText = 'Reading deleted successfully'
          } catch (error) {
            console.error('Error deleting reading:', error);
          }
        },
        openReadingModal(reading) {
          this.currentReading = reading;
          this.readingCover = reading.Livro.capaLivro;
          this.readingTitle = reading.Livro.nomeLivro;
          this.readingAuthor = reading.Livro.autors.map(autor => autor.nomeAutor).join(', ');
          this.review = reading.criticaLivro.comentario;
          this.rating = reading.criticaLivro.classificacao;
          this.readingModal = true;
        },
        closeReadingModal() {
          this.readingModal = false;
          this.readingCover = '';
          this.readingTitle = '';
          this.readingAuthor = '';
          this.review = '';
        },
        async saveReview() {
          try {
            const bookId = this.currentReading.Livro.idLivro;
            const reviewId = this.currentReading.criticaLivro.idCritica;
            
            if (!this.review.trim() && !this.rating) {
              await this.deleteReview(bookId, reviewId);
              return;
            }

            await this.reviewStore.updateReview(bookId, reviewId, {
              comentario: this.review,
              classificacao: this.rating
            });
            
            await this.readingsStore.fetchReadings();
            this.closeReadingModal();
            this.modalConfirm = true;
            this.modalText = 'Review updated successfully'
          } catch (error) {
            console.error('Error saving review:', error);
          }
        },
        async deleteReview(bookId, reviewId) {
          try {
            await this.reviewStore.deleteReview(bookId, reviewId);
            this.closeReadingModal();
            await this.readingsStore.fetchReadings();
            this.modalConfirm = true;
            this.modalText = 'Review deleted successfully'
          } catch (error) {
            console.error('Error deleting review:', error);
          }
        }
      },
      mounted() {
        this.readingsStore.fetchReadings();
      }
    }
  </script>
    