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
              <v-col cols="12" style="margin: 2vh 25vh" class="d-flex align-center">
                <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold mb-4">My reading lists</h2>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" sm="6" md="4" lg="3" v-for="(list, index) in readingLists" :key="index" class="d-flex flex-wrap" style="margin-bottom: 8vh; margin-left: 1vh;">
                <div class="book" style="position: relative; margin-left: 4vh; margin-right: 4vh;" >
                  <v-card :elevation="4" class="rounded-lg" height="320" style="width: 25vh; height: 40vh;">
                    <img :src="`/src/assets/images/books/${list.image}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                  <div style="position: absolute; bottom: -55px; left: 0; right: 0;">
                    <p class="font-weight-bold mt-2">{{ list.title }}</p>
                    <p>{{ list.description }}</p>
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
        readingLists: [
          { id: 1, title: '2024 in books', description: '23 books', image: 'normalpeople.webp' },
          { id: 2, title: 'TBR', description: '2 books', image: 'poordeer.webp' },
          { id: 3, title: 'Favourites', description: '4 books', image: 'papernames.webp' },
          { id: 4, title: 'Classics', description: '1 books', image: 'greeklessons.webp' },
          { id: 5, title: 'Favourites', description: '4 books', image: 'augustblue.webp' },
          { id: 6, title: 'Classics', description: '1 books', image: 'brutes.webp' },
        ]
      }
    }
  }
  </script>
  