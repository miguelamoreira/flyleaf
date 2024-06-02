<template>
  <v-container fluid>
    <v-row>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <v-col cols="10">
        <v-container fluid>
          <v-row>
            <v-col cols="12" class="mx-8 mt-10 mx-lg-10 mx-xl-16 d-flex">
              <v-btn style="background-color: var(--vt-c-beige);" :elevation="0" :to="{name : 'readinglists'}"><img src="@/assets/images/icons/back.svg"></v-btn>
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">{{ list.nomeLista }}</h2>
              <v-btn v-if="canEditList" style="background-color: var(--vt-c-beige);" :elevation="0" :to="{name : 'editlist', params: { readingListId: list.idLista }}"><img src="@/assets/images/icons/settings.svg"></v-btn>
            </v-col>
          </v-row>
          <v-row v-if="list.Livros && list.Livros.length > 0" v-for="(row, rowIndex) in Math.ceil((list.Livros.length + 1) / 4)" :key="rowIndex" justify="center">
            <v-col v-for="i in 4" :key="i" cols="12" sm="6" md="3">
              <div class="list mx-12 my-6 mx-lg-14 my-lg-8" style="position: relative;"> 
                <div v-if="((rowIndex * 4) + (i - 1)) < list.Livros.length">
                  <v-card :elevation="4" class="rounded-lg" height="320" style="width: 25vh; height: 40vh;">
                    <img :src="`data:image/jpg;base64,${list.Livros[(rowIndex * 4) + (i - 1)].capaLivro}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </div>
                <div v-if="((rowIndex * 4) + (i - 1)) < list.Livros.length" style="position: absolute; bottom: -55px; left: 0; right: 0;">
                  <p class="font-weight-bold mt-2">{{ list.Livros[(rowIndex * 4) + (i - 1)].nomeLivro }}</p>
                  <p>{{ list.Livros[(rowIndex * 4) + (i - 1)].autors[0].nomeAutor }}</p>
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
  
  
  </template>
  <script>
    import Sidebar from '@/components/Sidebar.vue';
    import Navbar from '@/components/Navbar.vue';
    import { useAuthStore } from '../stores/auth.js';
    import { useListStore } from '../stores/lists.js';
    
    export default {
      components: {
        Sidebar, Navbar,
      },
      data() {
        return {
          authStore: useAuthStore(),
          listStore: useListStore(),
          listId: null,
          books: [],
        }
      },
      computed: {
        user() {
          return this.authStore.getUser;
        },
        list() {
          this.books = this.listStore.getList.Livros;
          return this.listStore.getList;
        },
        canEditList() {
          return this.user && this.list.idUtilizador === this.user.idUtilizador;
        },
      },
      mounted() {
        this.listId = this.$route.params.readingListId;
        this.listStore.fetchList(this.listId);
      },
    }
  </script>
    