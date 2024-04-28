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
          <v-row v-for="(row, rowIndex) in Math.ceil((readingLists.length + 1) / 4)" :key="rowIndex" justify="center">
            <v-col v-for="i in 4" :key="i" cols="12" sm="6" md="3">
              <div class="list mx-12 my-6 mx-lg-14 my-lg-8" style="position: relative;"> 
                <router-link v-if="((rowIndex * 4) + (i - 1)) < readingLists.length" :to="{ name: 'list'}">
                  <v-card :elevation="4" class="rounded-lg" style="width: 25vh; height: 40vh;">
                    <img :src="`/src/assets/images/books/${readingLists[(rowIndex * 4) + (i - 1)].image}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </router-link>
                <div v-if="((rowIndex * 4) + (i - 1)) < readingLists.length" style="position: absolute; bottom: -55px; left: 0; right: 0;">
                  <p class="font-weight-bold mt-2">{{ readingLists[(rowIndex * 4) + (i - 1)].title }}</p>
                  <p>{{ readingLists[(rowIndex * 4) + (i - 1)].description }}</p>
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
    