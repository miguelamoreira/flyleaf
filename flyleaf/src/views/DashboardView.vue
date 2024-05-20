<template>
  <v-container fluid>
    <v-row>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <v-col cols="10">
        <v-container fluid v-if="user.idTipoUtilizador === 1">
          <v-row>
            <v-col cols="12" class="mx-12 mt-10 mx-lg-14 mx-xl-16">
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">Catalogue</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(book, index) in books.slice(0, 4)" :key="book.title" class="d-flex flex-wrap">
              <div class="book mx-12 my-6 mx-lg-14 my-lg-8" style="position: relative;"> 
                <router-link :to="{ name: 'catalogue'}" :class="{ 'last-book-link': index === 3 }">
                  <v-card :elevation="4" class="rounded-lg"  height="320" style="width: 25vh; height: 40vh;">
                    <img :src="`data:image/jpg;base64,${book.capaLivro}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </router-link>
                <div v-if="index !== 3" style="position: absolute; bottom: -55px; left: 0; right: 0;">
                  <div class="text-center">
                    <v-btn @click="createReading(book.idLivro)" :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0" style="background-color: rgba(64, 52, 43, 0.9);"><img src="@/assets/images/icons/arrow.svg" width="30" height="30"></v-btn>
                    <v-btn @click="openNewReadingModal(book)" :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0" style="background-color: rgba(64, 52, 43, 0.9);"><img src="@/assets/images/icons/review.svg" width="30" height="30"></v-btn>
                  </div>
                  <p class="font-weight-bold mt-2">{{ book.nomeLivro }}</p>
                  <p>{{ book['autors.nomeAutor'] }}</p>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="mx-12 mt-16 mx-lg-14">
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">Reading lists</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(list, index) in lists.slice(0, 4)" :key="index" class="d-flex flex-wrap">
              <div class="book mx-12 my-6 mx-lg-14 my-lg-8" style="position: relative;">
                <router-link :to="{ name: 'readinglists'}" :class="{ 'last-book-link': index === 3 }">
                  <v-card :elevation="4" class="rounded-lg"  height="320" style="width: 25vh; height: 40vh;">
                    <img :src="`data:image/jpeg;base64,${list.Livros[0].capaLivro}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </router-link>
                <div v-if="index !== 3" style="position: absolute; bottom: -55px; left: 0; right: 0;">
                  <p class="font-weight-bold mt-2">{{ list.nomeLista }}</p>
                  <p>{{ list.descricaoLista }}</p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container fluid v-else-if="user.idTipoUtilizador === 2">
          <v-row>
            <v-col cols="12" class="mx-12 mt-10 mx-lg-14 mx-xl-16">
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">Book requests</h2>
            </v-col>
          </v-row>
          <v-row justify="center" v-for="(row, rowIndex) in Math.ceil((requests.length + 1) / 4)" :key="rowIndex">
            <v-col v-for="i in 4" :key="i" cols="12" sm="6" md="3">
              <div class="book mx-12 my-6 mx-lg-14 my-lg-8" style="position: relative;"> 
                <router-link :to="{ name: 'bookrequests'}" :class="{ 'last-book-link': index === 3 }" v-if="((rowIndex * 4) + (i - 1)) < requests.length">
                    <v-card :elevation="4" class="rounded-lg"  height="320" style="width: 25vh; height: 40vh;">
                      <img :src="`data:image/jpg;base64,${requests[(rowIndex * 4) + (i - 1)].capaLivroPedido}`" style="width: 25vh; height: 40vh;">
                    </v-card>
                </router-link>
                <div v-if="index !== 3 && ((rowIndex * 4) + (i - 1)) < requests.length" style="position: absolute; bottom: -55px; left: 0; right: 0;">
                    <div class="text-center d-flex" style="position: inherit; left: 30px; bottom: 60px;" >
                      <v-btn @click="acceptRequest(requests[(rowIndex * 4) + (i - 1)].idPedido)" :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0" style="background-color: rgba(64, 52, 43, 0.9);"><img src="@/assets/images/icons/arrow.svg" width="30" height="30"></v-btn>
                      <v-btn @click="denyRequest(requests[(rowIndex * 4) + (i - 1)].idPedido)" :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0" style="background-color: rgba(64, 52, 43, 0.9);"><img src="@/assets/images/icons/delete.svg" width="30" height="30"></v-btn>
                    </div>
                    <p class="font-weight-bold mt-2">{{ requests[(rowIndex * 4) + (i - 1)].nomeLivroPedido }}</p>
                    <p>{{ requests[(rowIndex * 4) + (i - 1)]['autors.nomeAutor'] }}</p>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="mx-12 mt-16 mx-lg-14">
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">Users</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(user, index) in users.slice(0, 4)" :key="index" class="d-flex flex-wrap">
              <div class="users mx-12 mx-lg-14" style="position: relative;">
                <div :class="{ 'last-book-link': index === 3 }">
                  <router-link :to="{ name: 'users'}">
                    <v-card :elevation="0" class="rounded-lg mb-4"  height="320" style="width: 25vh; height: 35vh; background-color: var(--vt-c-beige);">
                      <img :src="`/src/assets/images/${user.image}`" style="width: 25vh; height: 35vh;">
                    </v-card>
                  </router-link>
                  <div v-if="index !== 3" style="position: absolute; bottom: -60px; left: 0; right: 0;">
                    <div class="text-center">
                      <v-btn :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0" style="background-color: rgba(64, 52, 43, 0.9);"><img src="@/assets/images/icons/block.svg" width="30" height="30"></v-btn>
                      <v-btn :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0" style="background-color: rgba(64, 52, 43, 0.9);"><img src="@/assets/images/icons/delete.svg" width="30" height="30"></v-btn>
                    </div>
                    <p class="font-weight-bold mt-2">{{ user.username }}</p>
                    <p>{{ user.readings }} books</p>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-col>
    </v-row>
  </v-container>

  <!-- Confirming reading logging modal (UX purposes) -->
  <v-dialog v-model="readingModal" max-width="600px" persistent>
    <v-card class="rounded-lg pa-4" style="background-color: var(--vt-c-beige);">
      <v-card-title style="font-family: Aleo, serif;" class="text-h5">New Reading</v-card-title>
      <v-card-text class="text-center">{{ textModal }}</v-card-text>
      <v-card-actions class="d-flex justify-center mt-6">
        <v-btn style="background-color: var(--vt-c-green-dark); color: var(--vt-c-green-light);" text @click="closeReadingModal">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

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
  import { useListStore } from '../stores/lists.js';
  import { useRequestStore } from '../stores/requests.js';
  import { useReadingsStore } from '../stores/readings.js';
  import { useReviewStore } from '../stores/reviews.js';
  
  export default {
    components: {
      Sidebar, Navbar,
    },
    data() {
      return {
        users: [
          { id: 1, username: 'Joca', readings: 5, image: 'avatar.svg' },
          { id: 2, username: 'B', readings: 2, image: 'avatar.svg' },
          { id: 3, username: 'C', readings: 4, image: 'avatar.svg' },
          { id: 4, username: 'D', readigns: 1, image: 'avatar.svg' },
        ],
        authStore: useAuthStore(),
        bookStore: useBookStore(),
        listStore: useListStore(),
        requestStore: useRequestStore(),
        readingsStore: useReadingsStore(),
        reviewStore: useReviewStore(),
        textModal: '',
        readingModal: false,
        newReadingModal: false,
        newReadingTitle: '',
        newReadingAuthor: '',
        newReadingCover: '',
        newReadingReview: '',
        newReadingRating: null
      }
    },
    computed: {
      user() {
        return this.authStore.getUser;
      },
      books() {
        return this.bookStore.getBooks;
      },
      lists() {
        return this.listStore.getLists;
      },
      requests() {
        return this.requestStore.getRequests.filter(request => request.estadoPedido === "validating");
      }
    },
    mounted() {
      this.bookStore.fetchBooks();
      this.listStore.fetchLists();
      this.requestStore.fetchRequests();
    },
    methods: {
      async acceptRequest(requestId) {
        try {
          await this.requestStore.updateRequest(requestId, { estadoPedido: 'accepted' });

          await this.requestStore.fetchRequests(); 
        } catch (error) {
          console.error(error);
        }
      },
      async denyRequest(requestId) {
        try {
          await this.requestStore.updateRequest(requestId, { estadoPedido: 'denied' });

          await this.requestStore.fetchRequests(); 
        } catch (error) {
          console.error(error);
        }
      },
      async createReading(idLivro) {
        const idUtilizador = this.authStore.getUser ? this.authStore.getUser.idUtilizador : null;
    
        try {
          await this.readingsStore.createReading(idUtilizador, idLivro);
          this.readingModal = true;
          this.textModal = "Your reading has been logged sucessfully."
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
          this.closeNewReadingModal();
        } catch (error) {
          console.error('Error saving new reading:', error);
        }
      }
    }
  }
</script>
  
<style>
  .last-book-link {
    opacity: 0.5; 
    cursor: pointer; 
  }
</style>
  