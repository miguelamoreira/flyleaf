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
          <v-row justify="center">
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(book, index) in books.slice(0, 4)" :key="book.title" class="d-flex flex-wrap">
              <div class="book mx-12 my-4 mx-lg-14 my-lg-6" style="position: relative;"> 
                <router-link :to="{ name: 'catalogue'}">
                  <v-card :elevation="4" class="rounded-lg"  height="320" style="width: 25vh; height: 40vh;">
                    <img :src="`/src/assets/images/books/${book.image}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </router-link>
                <div style="position: absolute; bottom: -55px; left: 0; right: 0;">
                  <p class="font-weight-bold mt-2">{{ book.title }}</p>
                  <p>{{ book.author }}</p>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="mx-12 mt-16 mx-lg-14">
              <h2 style="font-family: Aleo, serif;" class="text-h5 font-weight-bold">Recently read</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(book, index) in books.slice(0, 4)" :key="book.title" class="d-flex flex-wrap">
              <div class="book mx-12 my-4 mx-lg-14 my-lg-6" style="position: relative;"> 
                <router-link :to="{ name: 'catalogue'}">
                  <v-card :elevation="4" class="rounded-lg"  height="320" style="width: 25vh; height: 40vh;">
                    <img :src="`/src/assets/images/books/${book.image}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </router-link>
                <div style="position: absolute; bottom: -55px; left: 0; right: 0;">
                  <p class="font-weight-bold mt-2">{{ book.title }}</p>
                  <p>{{ book.author }}</p>
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
  
  export default {
    components: {
      Sidebar, Navbar,
    },
    data() {
      return {
        books: [
          { title: 'Paper Names', author: 'Susie Luo', image: 'papernames.webp' },
          { title: 'A Breath of Life', author: 'Clarice Lispector', image: 'abreathoflife.webp' },
          { title: 'Poor Deer', author: 'Claire Oshetsky', image: 'poordeer.webp' },
          { title: 'Normal People', author: 'Sally Rooney', image: 'normalpeople.webp' },
        ]
      }
    }
  }
  </script>

  