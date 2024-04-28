<template>
  <v-container fluid>
    <v-row>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <v-col cols="10">
        <v-container fluid>
          <v-row>
            <v-col cols="12" class="mx-12 mt-10 mx-lg-14 mx-xl-16">
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">Book requests</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(request, index) in requests.slice(0, 4)" :key="request.title" class="d-flex flex-wrap">
              <div class="book mx-12 my-6 mx-lg-14 my-lg-8" style="position: relative;"> 
                <router-link :to="{ name: 'bookrequests'}" :class="{ 'last-book-link': index === 3 }">
                    <v-card :elevation="4" class="rounded-lg"  height="320" style="width: 25vh; height: 40vh;">
                      <img :src="`/src/assets/images/books/${request.image}`" style="width: 25vh; height: 40vh;">
                    </v-card>
                </router-link>
                <div v-if="index !== 3" style="position: absolute; bottom: -55px; left: 0; right: 0;">
                    <div class="text-center">
                      <v-btn :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0"><img src="@/assets/images/icons/arrow.svg" width="30" height="30"></v-btn>
                      <v-btn :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0"><img src="@/assets/images/icons/delete.svg" width="30" height="30"></v-btn>
                    </div>
                    <p class="font-weight-bold mt-2">{{ request.title }}</p>
                    <p>{{ request.author }}</p>
                </div>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="mx-12 mt-16 mx-lg-14">
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">Users</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="6" md="4" lg="3" v-for="(user, index) in users.slice(0, 4)" :key="index" class="d-flex flex-wrap">
              <div class="users mx-12 mx-lg-14" style="position: relative;">
                <div :class="{ 'last-book-link': index === 3 }">
                  <router-link :to="{ name: 'users'}">
                    <v-card :elevation="0" class="rounded-lg mb-4"  height="320" style="width: 25vh; height: 35vh; background-color: var(--vt-c-beige);">
                      <img :src="`/src/assets/images/${user.image}`" style="width: 25vh; height: 35vh;">
                    </v-card>
                  </router-link>
                  <div v-if="index !== 3" style="position: absolute; bottom: -60px; left: 0; right: 0;">
                    <div class="text-center">
                      <v-btn :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0"><img src="@/assets/images/icons/block.svg" width="30" height="30"></v-btn>
                      <v-btn :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0"><img src="@/assets/images/icons/delete.svg" width="30" height="30"></v-btn>
                    </div>
                    <p class="font-weight-bold mt-2">{{ user.username }}</p>
                    <p>{{ user.readings }} books</p>
                  </div>
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
        requests: [
          { title: 'The Need for Roots', author: 'Simone Weil', image: 'theneedforroots.webp' },
          { title: 'August Blue', author: 'Deborah Levy', image: 'augustblue.webp' },
          { title: 'Greek Lessons', author: 'Han Kang', image: 'greeklessons.webp' },
          { title: 'Brutes', author: 'Dizz Tate', image: 'brutes.webp' },
        ],
        users: [
          { id: 1, username: 'Joca', readings: 5, image: 'avatar.svg' },
          { id: 2, username: 'B', readings: 2, image: 'avatar.svg' },
          { id: 3, username: 'C', readings: 4, image: 'avatar.svg' },
          { id: 4, username: 'D', readigns: 1, image: 'avatar.svg' },
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
  