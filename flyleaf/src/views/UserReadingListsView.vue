<template>
  <v-container fluid>
    <v-row>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <v-col cols="10">
        <v-container fluid>
          <v-row>
            <v-col cols="12" class="mx-12 mt-10 mx-lg-14 mx-xl-16">
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">My reading lists</h2>
            </v-col>
          </v-row>
          <v-row v-for="(row, rowIndex) in Math.ceil((lists.length + 1) / 4)" :key="rowIndex" justify="center">
            <v-col v-for="i in 4" :key="i" cols="12" sm="6" md="3">
              <div class="list mx-12 my-6 mx-lg-14 my-lg-8" style="position: relative;"> 
                <router-link v-if="((rowIndex * 4) + (i - 1)) < lists.length" :to="{ name: 'list'}">
                  <v-card :elevation="4" class="rounded-lg" style="width: 25vh; height: 40vh;">
                    <img :src="`/src/assets/images/books/${lists[(rowIndex * 4) + (i - 1)].image}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </router-link>
                <div v-if="((rowIndex * 4) + (i - 1)) < lists.length" style="position: absolute; bottom: -55px; left: 0; right: 0;">
                  <p class="font-weight-bold mt-2">{{ lists[(rowIndex * 4) + (i - 1)].nomeLista }}</p>
                  <p>{{ lists[(rowIndex * 4) + (i - 1)].descricaoLista }}</p>
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
          user: null,
        }
      },
      computed: {
      user() {
        return this.authStore.getUser;
      },
      lists() {
        this.user = this.authStore.getUser;
        console.log('User:', this.user);
        const idUtilizador = this.user ? this.user.idUtilizador : null;
        console.log('idUtilizador:', idUtilizador);
        console.log("Listas:" ,this.listStore.getLists);
        return idUtilizador ? this.listStore.getLists.filter(list => list.idUtilizador === idUtilizador) : [];
      }
    },
    }
  </script>
    