<template>
    <v-container fluid>
      <v-row>
        <v-col cols="1">
          <Sidebar></Sidebar>
        </v-col>
        <v-col cols="11">
          <v-container fluid>
            <Navbar></Navbar>
          </v-container>
          <v-container style="background-color: var(--vt-c-beige);" class="mx-12">
            <div>
              <div class="d-flex flex-row mx-12 mb-10">
                <v-btn style="background-color: var(--vt-c-beige);" :elevation="0" :to="{name : 'catalogue'}"><img src="@/assets/images/icons/back.svg"></v-btn>
                <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold mb-4">Catalogue</h2>
              </div>
              <div class="d-flex flex-row mx-4 mb-4 flex-wrap flex-sm-nowrap justify-center px-12">
                <img src="@/assets/images/books/papernames.webp" width="300" height="420" class="rounded-lg" :elevation="4">
                <div class="mx-lg-12">
                  <div class="d-flex flex-row">
                    <p class="text-h6 font-weight-bold">Paper Names</p>
                    <p class="text-body-2 mx-4 mt-2">2023</p>
                  </div>
                  <p class="font-weight-bold">Susie Luo</p>
                  <p class="my-12 font-weight-bold">Fiction</p>
                  <p class="my-12 font-weight-bold">3.7/5</p>
                  <p class="mt-12 mb-4 font-weight-bold">Description</p>
                  <p class="text-center">
                    An unexpected act of violence brings together a Chinese-American family and a wealthy white lawyer in this propulsive and sweeping story of family, identity and the American experience—for fans of Jean Kwok, Mary Beth Keane and Naima Coster.
                  </p>
                </div>
              </div>
            </div>
          </v-container>
          <v-container style="background-color: var(--vt-c-beige);" class="mx-12 pa-12">
            <v-row justify="center">
                <h2 style="font-family: Aleo, serif;" class="text-h5 font-weight-bold mb-4">Reviews</h2>
            </v-row>
            <v-row justify="center">
              <v-col cols="10" md="6" lg="5" v-for="(review, index) in reviews" :key="index">
                <v-card class="rounded-lg pa-4 ma-4" style="background-color: var(--vt-c-yellow-light);">
                  <div class="d-flex">
                    <img :src="`/src/assets/images/${review.avatar}`" width="80" class="mx-4">
                    <div class="d-flex flex-column text-center">
                      <v-card-title class="text-h6 font-weight-bold">{{ review.username }}</v-card-title>
                      <p>{{ review.readings }} books</p>
                    </div>
                  </div>
                  <v-card-text class="text-center pt-12">
                    {{ review.review }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import Sidebar from '../components/Sidebar.vue'
  import Navbar from '../components/Navbar.vue'
  
  export default {
    components: {
      Sidebar, Navbar,
    },
    data() {
      return {
        reviews: [
          { username: 'Joca', avatar: 'avatar.svg', readings: 5, review: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' },
          { username: 'A', avatar: 'avatar.svg', readings: 2, review: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' },
          { username: 'A', avatar: 'avatar.svg', readings: 2, review: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' },
          { username: 'A', avatar: 'avatar.svg', readings: 2, review: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' },
        ]
      };
    }
  }
  </script>
  