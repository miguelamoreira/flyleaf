<template>
    <v-container fluid>
      <v-row>
        <v-col cols="1">
          <Sidebar></Sidebar>
        </v-col>
        <v-col cols="11" >
          <v-container fluid>
            <Navbar></Navbar>
            <v-row>
              <v-col cols="12" style="margin: 0 4vh" class="d-flex" align="center">
                <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold mb-4 ">Profile</h2>
                <v-btn style="background-color: var(--vt-c-beige);" :elevation="0" :to="{name: 'settings'}"><img src="@/assets/images/icons/settings.svg"></v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" style="margin: 0 4vh">
                <h2 style="font-family: Aleo, serif;" class="text-h5 font-weight-bold">Favourites</h2>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" sm="6" md="4" lg="3" v-for="(book, index) in books.slice(0, 4)" :key="book.title" class="d-flex flex-wrap">
                <div class="book" style="position: relative; margin: 0 4vh">
                  <router-link :to="{ name: 'catalogue'}">
                    <v-card :elevation="4" class="rounded-lg"  height="320" style="width: 25vh; height: 40vh;">
                      <img :src="`/src/assets/images/books/${book.image}`" style="width: 25vh; height: 40vh;">
                    </v-card>
                  </router-link>
                  <div style="position: absolute; bottom: -30px; left: 0; right: 0;">
                    <p class="font-weight-bold mt-2">{{ book.title }}</p>
                    <p>{{ book.author }}</p>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" style="margin: 0vh 4vh; margin-top: 4vh;">
                <h2 style="font-family: Aleo, serif;" class="text-h5 font-weight-bold mt-8">Recently read</h2>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" sm="6" md="4" lg="3" v-for="(book, index) in books.slice(0, 4)" :key="index" class="d-flex flex-wrap">
                <div class="book" style="position: relative; margin: 0 4vh; margin-bottom: 4vh;">
                  <router-link :to="{ name: 'catalogue'}">
                    <v-card :elevation="4" class="rounded-lg"  height="320" style="width: 25vh; height: 40vh;">
                      <img :src="`/src/assets/images/books/${book.image}`" style="width: 25vh; height: 40vh;">
                    </v-card>
                  </router-link>
                  <div style="position: absolute; bottom: -30px; left: 0; right: 0;">
                    <p class="font-weight-bold mt-2">{{ book.title }}</p>
                    <p>{{ book.author }}</p>
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

  