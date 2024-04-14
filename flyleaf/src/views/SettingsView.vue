<template>
    <v-container fluid>
      <v-row>
        <v-col cols="1">
          <Sidebar></Sidebar>
        </v-col>
        <v-col cols="11" >
          <v-container fluid>
            <Navbar></Navbar>
            <v-row>
              <v-col cols="12" style="margin: 0 2vh" class="d-flex" align="center">
                <v-btn style="background-color: var(--vt-c-beige);" :elevation="0" :to="{name: 'profile'}"><img src="@/assets/images/icons/back.svg"></v-btn>
                <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold mb-4 ">Settings</h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" style="margin: 0 4vh">
                <h2 style="font-family: Aleo, serif;" class="text-h5 font-weight-bold mb-6">Favourites</h2>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" sm="6" md="4" lg="3" v-for="(book, index) in books.slice(0, 4)" :key="book.title" class="d-flex flex-wrap">
                <div class="book mb-16" style="position: relative; margin: 0 4vh">
                  <div class="favourites" @click="openFavouritesModal">
                    <v-card :elevation="4" class="rounded-lg"  height="320" style="width: 25vh; height: 40vh;">
                      <img :src="`/src/assets/images/books/${book.image}`" style="width: 25vh; height: 40vh;">
                    </v-card>
                </div>
                  <div style="position: absolute; bottom: -55px; left: 0; right: 0;" class="d-flex align-center justify-space-between">
                    <div>
                        <p class="font-weight-bold mt-2">{{ book.title }}</p>
                        <p>{{ book.author }}</p>
                    </div>
                    <v-btn :elevation="0" style="background-color: var(--vt-c-beige);" size="small"><img src="@/assets/images/icons/delete.svg"></v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" style="margin: 0vh 4vh;">
                <h2 style="font-family: Aleo, serif;" class="text-h5 font-weight-bold mt-8">User data</h2>
              </v-col>
            </v-row>
            <v-row justify="center">
                <v-form class="mt-6 mx-12" style="width: 100%;">
                    <v-row>
                        <v-col cols="12" sm="6" class="pa-4">
                            <v-text-field label="Username" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" class="pa-4">
                            <v-text-field label="E-mail" type="email" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" sm="6" class="pa-4">
                            <v-text-field label="Password" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" class="pa-4">
                            <v-text-field label="Confirm your password" type="password" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg"></v-text-field>
                        </v-col>
                    </v-row>
                    <v-row justify="center">
                        <v-col cols="4" sm="2">
                            <v-btn type="submit" block class="mt-4" style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);">Save</v-btn>
                        </v-col>
                        <v-col cols="4" sm="2">
                            <v-btn block class="mt-4" style="background-color: var(--vt-c-green-dark); color: var(--vt-c-green-light);">Cancel</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>


    <!-- Favourites Modal -->
    <v-dialog v-model="favouritesModal" max-width="600px" persistent="true" @input="closeFavouritesModal">
      <v-card class="rounded-lg pa-4" style="background-color: var(--vt-c-beige);">
        <div class="d-flex">
          <v-btn style="background-color: var(--vt-c-beige);" text @click="closeFavouritesModal" :elevation="0" size="small"><img src="@/assets/images/icons/back.svg"></v-btn>
          <v-card-title style="font-family: Aleo, serif; color: var(--vt-c-brown-dark);" class="text-h5">Favourites</v-card-title>
        </div>
        <v-card-text style="color: var(--vt-c-brown-medium);">
          <v-select label="Title" hide-details style="background-color: var(--vt-c-yellow-light);" class="rounded-lg mt-6"></v-select>
          <p class="mt-4">Author</p>
        </v-card-text>
      </v-card>
    </v-dialog>
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
        favouritesModal: false,
      }
    },
    methods: {
        openFavouritesModal() {
            this.favouritesModal = true;
        },
        closeFavouritesModal() {
            this.favouritesModal = false;
        },
    }
  }
  </script>

<style>
.favourites {
  opacity: 0.5; 
  cursor: pointer; 
}
</style>