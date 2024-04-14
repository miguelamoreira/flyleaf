<template>
    <v-container fluid>
      <v-row>
        <v-col cols="1">
          <Sidebar></Sidebar>
        </v-col>
        <v-col cols="11">
          <v-container fluid>
            <Navbar></Navbar>
            <v-row>
              <v-col cols="12" style="margin: 2vh 25vh" class="d-flex mb-4" align="center">
                <v-btn style="background-color: var(--vt-c-beige);" :elevation="0" :to="{name : 'myreadinglists'}"><img src="@/assets/images/icons/back.svg"></v-btn>
                <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">TBR</h2>
                <v-btn style="background-color: var(--vt-c-beige);" :elevation="0"><img src="@/assets/images/icons/settings.svg"></v-btn>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" sm="6" md="4" lg="3" v-for="(book, index) in books" :key="index" class="d-flex flex-wrap" style="margin-bottom: 8vh; margin-left: 1vh;">
                <div class="book" style="position: relative; margin-left: 4vh; margin-right: 4vh;" >
                  <v-card :elevation="4" class="rounded-lg" height="320" style="width: 25vh; height: 40vh;">
                    <img :src="`/src/assets/images/books/${book.image}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                  <div style="position: absolute; bottom: -55px; left: 0; right: 0;">
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
  import Sidebar from '../components/Sidebar.vue';
  import Navbar from '../components/Navbar.vue';
  
  export default {
    components: {
      Sidebar, Navbar
    },
    data() {
      return {
        books: [
          { title: 'Poor Deer', author: 'Claire Oshetsky', image: 'poordeer.webp' },
          { title: 'Normal People', author: 'Sally Rooney', image: 'normalpeople.webp' },
          { title: 'The Need for Roots', author: 'Simone Weil', image: 'theneedforroots.webp' },
          { title: 'August Blue', author: 'Deborah Levy', image: 'augustblue.webp' },
          { title: 'Paper Names', author: 'Susie Luo', image: 'papernames.webp' },
          { title: 'A Breath of Life', author: 'Clarice Lispector', image: 'abreathoflife.webp' },
        ]
      }
    }
  }
  </script>
  