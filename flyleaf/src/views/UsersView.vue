<template>
  <v-container fluid>
    <v-row>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <v-col cols="10">
        <v-container fluid>
          <v-row>
            <v-col cols="12" class="mx-12 mt-10 mx-lg-14 mx-xl-16">
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">Users</h2>
            </v-col>
          </v-row>
          <v-row v-for="(user, index) in users" :key="user.username" justify="center" class="px-10 mt-10">
            <v-col>
              <div class="users" style="position: relative; width: 130vh;">
                <div class="d-flex flex-row mx-4 mb-16 flex-nowrap align-items-start">
                  <img :src="`/src/assets/images/${user.image}`" width="200" height="200" class="rounded-lg" :elevation="4">
                <div class="mx-lg-12">
                <div class="d-flex flex-row align-center">
                  <p class="text-h6 font-weight-bold">{{ user.username }}</p>
                </div>
                <div class="d-flex flex-row justify-space-between my-4 flex-lg-row flex-sm-column">
                  <p class="text-center mt-2 mx-16">{{user.readings}} readings</p>
                  <p class="text-center mt-2 mx-16">{{ user.lists }} reading lists</p>
                  <p class="text-center mt-2 mx-16">{{ user.requests }} book requests</p>
                </div>
              </div>
              </div>
                <div class="d-flex mt-16" style="position: absolute; bottom: 0; left: 30vh; right: 0;">
                  <v-btn :elevation="0" style="background-color: var(--vt-c-beige);" class="mx-2"><img src="@/assets/images/icons/arrow.svg"></v-btn>
                  <v-btn :elevation="0" style="background-color: var(--vt-c-beige);"><img src="@/assets/images/icons/delete.svg"></v-btn>
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
        users: [
          { id: 1, username: 'Joca', readings: 5, image: 'avatar.svg', lists: 2, requests: 3 },
          { id: 2, username: 'B', readings: 2, image: 'avatar.svg', lists: 2, requests: 3 },
          { id: 3, username: 'C', readings: 4, image: 'avatar.svg', lists: 2, requests: 3 },
          { id: 4, username: 'D', readings: 1, image: 'avatar.svg', lists: 2, requests: 3 },
        ],
      }
    }
  }
</script>
      