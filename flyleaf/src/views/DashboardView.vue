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
                    <img :src="`/src/assets/images/books/${book.capaLivro}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </router-link>
                <div v-if="index !== 3" style="position: absolute; bottom: -55px; left: 0; right: 0;">
                  <div class="text-center">
                    <v-btn :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0"><img src="@/assets/images/icons/arrow.svg" width="30" height="30"></v-btn>
                    <v-btn :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0"><img src="@/assets/images/icons/review.svg" width="30" height="30"></v-btn>
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
                    <img :src="`/src/assets/images/books/${list.Livros[0]['capaLivro']}`" style="width: 25vh; height: 40vh;">
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
                      <img :src="`/src/assets/images/books/${requests[(rowIndex * 4) + (i - 1)].image}`" style="width: 25vh; height: 40vh;">
                    </v-card>
                </router-link>
                <div v-if="index !== 3 && ((rowIndex * 4) + (i - 1)) < requests.length" style="position: absolute; bottom: -55px; left: 0; right: 0;">
                    <div class="text-center d-flex" style="position: inherit; left: 30px; bottom: 60px;" >
                      <v-btn :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0"><img src="@/assets/images/icons/arrow.svg" width="30" height="30"></v-btn>
                      <v-btn :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0"><img src="@/assets/images/icons/delete.svg" width="30" height="30"></v-btn>
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
                      <v-btn :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0"><img src="@/assets/images/icons/block.svg" width="30" height="30"></v-btn>
                      <v-btn :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0"><img src="@/assets/images/icons/delete.svg" width="30" height="30"></v-btn>
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
</template>
<script>
  import Sidebar from '@/components/Sidebar.vue';
  import Navbar from '@/components/Navbar.vue';
  import { useAuthStore } from '../stores/auth.js';
  import { useBookStore } from '../stores/books.js';
  import { useListStore } from '../stores/lists.js';
  import { useRequestStore } from '../stores/requests.js';
  
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
        return this.requestStore.getRequests;
      }
    },
    mounted() {
      this.bookStore.fetchBooks();
      this.listStore.fetchLists();
      this.requestStore.fetchRequests();
    },
  }
</script>
  
<style>
  .last-book-link {
    opacity: 0.5; 
    cursor: pointer; 
  }
</style>
  