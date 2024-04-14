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
              <v-col cols="12" style="margin: 0 4vh">
                <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold mb-4">Users</h2>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" sm="6" md="4" lg="3" style="max-width: 1000px;">
                <v-row v-for="(user, index) in users" :key="user.username">
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
  