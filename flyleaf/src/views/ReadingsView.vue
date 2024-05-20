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
                    <img :src="`data:image/jpg;base64,${readings[(rowIndex * 4) + (i - 1)].Livro.capaLivro}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </div>
                <div v-if="((rowIndex * 4) + (i - 1)) < readings.length" style="position: absolute; bottom: -55px; left: 0; right: 0;">
                  <div class="d-flex text-center" style="position: absolute; left: 4vh; bottom: 7.5vh;">
                    <v-btn :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0" style="background-color: rgba(64, 52, 43, 0.9);"><img src="@/assets/images/icons/settings.svg" width="30" height="30"></v-btn>
                    <v-btn :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0" style="background-color: rgba(64, 52, 43, 0.9);"><img src="@/assets/images/icons/delete.svg" width="30" height="30"></v-btn>
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
  
  
  </template>
  <script>
    import Sidebar from '@/components/Sidebar.vue';
    import Navbar from '@/components/Navbar.vue';
    import { useAuthStore } from '../stores/auth.js';
    import { useReadingsStore } from '../stores/readings.js';
    
    export default {
      components: {
        Sidebar, Navbar,
      },
      data() {
        return {
          authStore: useAuthStore(),
          readingsStore: useReadingsStore()
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
      mounted() {
        this.readingsStore.fetchReadings();
      }
    }
  </script>
    