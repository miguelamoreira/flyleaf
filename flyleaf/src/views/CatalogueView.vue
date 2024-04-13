<template>
    <v-container fluid>
      <v-row>
        <v-col cols="1">
          <NavBar></NavBar>
        </v-col>
        <v-col cols="11">
          <v-container fluid>
            <v-row>
              <v-col cols="12" class="mb-10">
                  <v-btn :elevation="0" style="background-color: var(--vt-c-beige); position: absolute; right: 15vh"><img src="@/assets/images/icons/notif1.svg"></v-btn>
                  <v-btn :elevation="0" style="background-color: var(--vt-c-beige); position: absolute; right: 5vh" :to="{name: 'home'}"><img src="@/assets/images/icons/logout.svg"></v-btn>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="2" style="margin: 2vh 25vh" class="d-flex align-center">
                <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold mb-4">Catalogue</h2>
              </v-col>
              <v-col cols="6" lg="6" md="3" sm="2" class="d-flex align-center justify-space-evenly">
                <v-select style="max-width: 200px; background-color: var(--vt-c-yellow-light);" hide-details label="Search by genre" class="rounded-lg"></v-select>
                <v-text-field class="rounded-lg" style="max-width: 400px; background-color: var(--vt-c-yellow-light);" hide-details label="Search by title, author or year"></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" sm="6" md="4" lg="3" v-for="(book, index) in books" :key="index" class="d-flex flex-wrap" style="margin-bottom: 8vh; margin-left: 1vh;">
                <div class="book" style="position: relative; margin-left: 4vh; margin-right: 4vh;" >
                  <v-card :elevation="4" class="rounded-lg" height="320" style="width: 25vh; height: 40vh;">
                    <img :src="`/src/assets/images/books/${book.image}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                  <div style="position: absolute; bottom: -55px; left: 0; right: 0;">
                    <div class="text-center">
                      <v-btn :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0"><img src="@/assets/images/icons/arrow.svg" width="30" height="30"></v-btn>
                      <v-btn :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0"><img src="@/assets/images/icons/review.svg" width="30" height="30"></v-btn>
                    </div>
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
  import NavBar from '../components/Navbar.vue'
  
  export default {
    components: {
      NavBar,
    },
    data() {
      return {
        books: [
          { title: 'Paper Names', author: 'Susie Luo', image: 'papernames.webp' },
          { title: 'A Breath of Life', author: 'Clarice Lispector', image: 'abreathoflife.webp' },
          { title: 'Poor Deer', author: 'Claire Oshetsky', image: 'poordeer.webp' },
          { title: 'Normal People', author: 'Sally Rooney', image: 'normalpeople.webp' },
          { title: 'The Need for Roots', author: 'Simone Weil', image: 'theneedforroots.webp' },
          { title: 'August Blue', author: 'Deborah Levy', image: 'augustblue.webp' },
        ]
      }
    }
  }
  </script>
  