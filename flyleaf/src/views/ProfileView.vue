<template>
  <v-container fluid>
    <v-row>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <v-col cols="10">
        <v-container fluid>
          <v-row>
            <v-col cols="12" class="mx-12 mt-10 mx-lg-14 mx-xl-16 d-flex">
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">Profile</h2>
              <v-btn style="background-color: var(--vt-c-beige);" :elevation="0" :to="{name: 'settings'}"><img src="@/assets/images/icons/settings.svg"></v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="mx-12 mt-5 mx-lg-14 mx-xl-16">
              <h2 style="font-family: Aleo, serif;" class="text-h5 font-weight-bold">Favourites</h2>
            </v-col>
          </v-row>
          <v-row v-if="favourites && favourites.length" v-for="(row, rowIndex) in Math.ceil((favourites.length + 1) / 4)" :key="rowIndex" justify="center">
            <v-col v-for="i in 4" :key="i" cols="12" sm="6" md="3">
              <div class="book mx-12 my-4 mx-lg-14 my-lg-6" style="position: relative;"> 
                <div v-if="((rowIndex * 4) + (i - 1)) < favourites.length">
                  <v-card :elevation="4" class="rounded-lg"  height="320" style="width: 25vh; height: 40vh;">
                    <img :src="`${favourites[(rowIndex * 4) + (i - 1)].capaLivro}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </div>
                <div v-if="((rowIndex * 4) + (i - 1)) < favourites.length" style="position: absolute; bottom: -55px; left: 0; right: 0;">
                  <p class="font-weight-bold mt-2">{{ favourites[(rowIndex * 4) + (i - 1)].nomeLivro }}</p>
                  <p>{{ favourites[(rowIndex * 4) + (i - 1)].autors[0].nomeAutor }}</p>
                </div>
                <v-card v-else-if="favourites.length < 4" :elevation="4" class="rounded-lg" height="320" style="width: 25vh; height: 40vh; background-color: white;"></v-card>
              </div>
            </v-col>
          </v-row>
          <v-row v-else-if="favourites && favourites.length == 0">
            <v-col v-for="i in 4" :key="i" cols="12" sm="6" md="3">
              <div class="book mx-12 my-4 mx-lg-14 my-lg-6" style="position: relative;"> 
                <v-card :elevation="4" class="rounded-lg" height="320" style="width: 25vh; height: 40vh; background-color: white;"></v-card>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="mx-12 mt-16 mx-lg-14">
              <h2 style="font-family: Aleo, serif;" class="text-h5 font-weight-bold">Recently read</h2>
            </v-col>
          </v-row>
          <v-row justify="center" v-for="(row, rowIndex) in Math.ceil((readings.length + 1) / 4)" :key="rowIndex">
            <v-col v-for="i in 4" :key="i" cols="12" sm="6" md="3">
              <div class="book mx-12 my-4 mx-lg-14 my-lg-6" style="position: relative;"> 
                <router-link v-if="((rowIndex * 4) + (i - 1)) < readings.length" :to="{ name: 'book', params: { bookId: readings[(rowIndex * 4) + (i - 1)].idLivro }}">
                  <v-card :elevation="4" class="rounded-lg"  height="320" style="width: 25vh; height: 40vh;">
                    <img :src="`${readings[(rowIndex * 4) + (i - 1)].Livro.capaLivro}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </router-link>
                <div v-if="((rowIndex * 4) + (i - 1)) < readings.length" style="position: absolute; bottom: -55px; left: 0; right: 0;">
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
      favourites() {
        console.log('user favourites', this.authStore.getFavourites);
        return this.authStore.getFavourites;
      },
      readings() {
        this.user = this.authStore.getUser;
        const idUtilizador = this.user ? this.user.idUtilizador : null;
        const userReadings = idUtilizador ? this.readingsStore.getReadings.filter(reading => reading.idUtilizador === idUtilizador) : [];
        console.log('user readings', userReadings);
        
        const reversedReadings = userReadings.slice().reverse();

        return reversedReadings.length <= 4 ? reversedReadings : reversedReadings.slice(0, 4);
      }
    },
    mounted() {
      this.authStore.fetchFavourites(this.authStore.getUser.idUtilizador);
      this.readingsStore.fetchReadings();
    }
  }
  </script>

  