<template>
  <v-container fluid>
    <v-row>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <v-col cols="10">
        <v-container fluid class="px-8">
          <v-row>
            <v-col cols="12" class="mx-8 mt-10 mx-lg-10 mx-xl-16 d-flex"> 
              <v-btn style="background-color: var(--vt-c-beige);" :elevation="0" :to="{name: 'catalogue'}"><img src="@/assets/images/icons/back.svg"></v-btn>
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">Catalogue</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12">
              <div class="d-flex flex-row mx-4 mb-4 flex-wrap flex-sm-nowrap justify-center px-12 mt-8">
                <v-card :elevation="4" style="width: 90vh; height: 60vh;" class="rounded-lg"> 
                  <img :src="`/src/assets/images/books/${book.image}`" style="width: 38vh; height: 60vh;">
                </v-card>
                <div class="ml-lg-8">
                  <div class="d-flex flex-row">
                    <p class="text-h6 font-weight-bold">{{ book.title }}</p>
                    <p class="text-body-2 mx-4 mt-2">{{ book.year }}</p>
                  </div>
                  <p class="font-weight-bold">{{ book.author }}</p>
                  <p class="my-12 font-weight-bold">{{ book.categories.join(', ') }}</p>
                  <p class="my-12 font-weight-bold">{{ book.rating }}/5</p>
                  <p class="mt-12 mb-6 font-weight-bold">Description</p>
                  <p class="text-center">
                    {{ book.description }}
                  </p>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="mx-12 mt-5 mx-lg-14 mx-xl-16">
              <h2 style="font-family: Aleo, serif;" class="text-h5 font-weight-bold">Reviews</h2>
            </v-col>
          </v-row>
          <v-row v-for="(row, rowIndex) in Math.ceil((reviews.length) / 2)" :key="rowIndex" justify="center" class="px-10">
            <v-col v-for="i in 2" :key="i" cols="12" sm="6" md="6">
              <v-card v-if="((rowIndex * 2) + (i - 1)) < reviews.length" class="rounded-lg pa-4 ma-4" style="background-color: var(--vt-c-yellow-light);" :elevation="2">
                <div class="d-flex">
                  <img :src="`/src/assets/images/${reviews[(rowIndex * 2) + (i - 1)].avatar}`" width="80" class="mx-4">
                  <div class="d-flex flex-column text-center">
                    <v-card-title class="text-h6 font-weight-bold">{{ reviews[(rowIndex * 2) + (i - 1)].username }}</v-card-title>
                    <p>{{ reviews[(rowIndex * 2) + (i - 1)].readings }} books</p>
                  </div>
                </div>
                <v-card-text class="text-center pt-12">
                  {{ reviews[(rowIndex * 2) + (i - 1)].review }}
                </v-card-text>
              </v-card>
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
          book: { 
            title: 'Paper Names', 
            year: 2023,
            categories: ['Fiction'],
            rating: 3.7,
            author: 'Susie Luo', 
            image: 'papernames.webp',
            description: 'An unexpected act of violence brings together a Chinese-American family and a wealthy white lawyer in this propulsive and sweeping story of family, identity and the American experience—for fans of Jean Kwok, Mary Beth Keane and Naima Coster.' 
          },
          reviews: [
            { username: 'Joca', avatar: 'avatar.svg', readings: 5, review: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' },
            { username: 'A', avatar: 'avatar.svg', readings: 2, review: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' },
            { username: 'A', avatar: 'avatar.svg', readings: 2, review: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' },
            { username: 'A', avatar: 'avatar.svg', readings: 2, review: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' },
          ]
        }
      }
    }
</script>
    