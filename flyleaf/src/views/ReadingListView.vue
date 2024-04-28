<template>
  <v-container fluid>
    <v-row>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <v-col cols="10">
        <v-container fluid>
          <v-row>
            <v-col cols="12" class="mx-8 mt-10 mx-lg-10 mx-xl-16 d-flex">
              <v-btn style="background-color: var(--vt-c-beige);" :elevation="0" :to="{name : 'myreadinglists'}"><img src="@/assets/images/icons/back.svg"></v-btn>
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">{{ list.title }}</h2>
              <v-btn style="background-color: var(--vt-c-beige);" :elevation="0" :to="{name : 'editlist'}"><img src="@/assets/images/icons/settings.svg"></v-btn>
            </v-col>
          </v-row>
          <v-row v-for="(row, rowIndex) in Math.ceil((books.length + 1) / 4)" :key="rowIndex" justify="center">
            <v-col v-for="i in 4" :key="i" cols="12" sm="6" md="3">
              <div class="list mx-12 my-6 mx-lg-14 my-lg-8" style="position: relative;"> 
                <router-link v-if="((rowIndex * 4) + (i - 1)) < books.length" :to="{ name: 'list'}">
                  <v-card :elevation="4" class="rounded-lg" height="320" style="width: 25vh; height: 40vh;">
                    <img :src="`/src/assets/images/books/${books[(rowIndex * 4) + (i - 1)].image}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </router-link>
                <div v-if="((rowIndex * 4) + (i - 1)) < books.length" style="position: absolute; bottom: -55px; left: 0; right: 0;">
                  <p class="font-weight-bold mt-2">{{ books[(rowIndex * 4) + (i - 1)].title }}</p>
                  <p>{{ books[(rowIndex * 4) + (i - 1)].author }}</p>
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
          list: { 
            id: 1, 
            title: 'TBR', 
            description: '5 books', 
            image: 'normalpeople.webp' 
          }, 
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
    