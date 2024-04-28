<template>
  <v-container fluid>
    <v-row>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <v-col cols="10">
        <v-container fluid>
          <v-row>
            <v-col cols="12" class="mx-12 mt-10 mx-lg-14 mx-xl-16">
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">Catalogue</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(book, index) in books.slice(0, 4)" :key="book.title" class="d-flex flex-wrap">
              <div class="book mx-12 my-6 mx-lg-14 my-lg-8" style="position: relative;"> 
                <router-link :to="{ name: 'catalogue'}" :class="{ 'last-book-link': index === 3 }">
                  <v-card :elevation="4" class="rounded-lg"  height="320" style="width: 25vh; height: 40vh;">
                    <img :src="`/src/assets/images/books/${book.image}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </router-link>
                <div v-if="index !== 3" style="position: absolute; bottom: -55px; left: 0; right: 0;">
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
          <v-row>
            <v-col cols="12" class="mx-12 mt-16 mx-lg-14">
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">Reading lists</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(list, index) in readingLists.slice(0, 4)" :key="index" class="d-flex flex-wrap">
              <div class="book mx-12 my-6 mx-lg-14 my-lg-8" style="position: relative;">
                <router-link :to="{ name: 'myreadinglists'}" :class="{ 'last-book-link': index === 3 }">
                  <v-card :elevation="4" class="rounded-lg"  height="320" style="width: 25vh; height: 40vh;">
                    <img :src="`/src/assets/images/books/${list.image}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </router-link>
                <div v-if="index !== 3" style="position: absolute; bottom: -55px; left: 0; right: 0;">
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
        ],
        readingLists: [
          { id: 1, title: '2024 in books', description: '23 books', image: 'normalpeople.webp' },
          { id: 2, title: 'TBR', description: '2 books', image: 'poordeer.webp' },
          { id: 3, title: 'Favourites', description: '4 books', image: 'papernames.webp' },
          { id: 4, title: 'Classics', description: '1 books', image: 'papernames.webp' },
        ]
      }
    }
  }
</script>
  
<style>
  .last-book-link {
    opacity: 0.5; 
    cursor: pointer; 
  }
</style>
  