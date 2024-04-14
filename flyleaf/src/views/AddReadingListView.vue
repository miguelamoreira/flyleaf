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
              <v-col cols="12" style="margin: 0 4vh" class="d-flex" align="center">
                <v-btn style="background-color: var(--vt-c-beige);" :elevation="0" :to="{name: 'profile'}"><img src="@/assets/images/icons/back.svg"></v-btn>
                <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold mb-4 ">New reading list</h2>
              </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12">
                    <v-form class="mt-6 mx-12" style="width: 100%;">
                        <v-row>
                            <v-col cols="12" sm="6" class="pa-4">
                                <v-text-field label="Name" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg"></v-text-field>
                                <v-switch v-model="model" :label="`Switch: ${model}`" false-value="Private" true-value="Public" hide-details class="mx-2"></v-switch>
                            </v-col>
                            <v-col cols="12" sm="6" class="pa-4">
                                <v-textarea label="Description" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg"></v-textarea>
                            </v-col>
                        </v-row>
                        <v-row align="center">
                            <v-col cols="10" sm="6" class="pa-4">
                                <v-select label="Add a book" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg"></v-select>
                            </v-col>
                            <v-col cols="2" class="d-flex flex-row ml-16">
                                <v-btn type="submit" block class="mx-4" style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);">Save</v-btn>
                                <v-btn block class="mx-4" style="background-color: var(--vt-c-green-dark); color: var(--vt-c-green-light);">Cancel</v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-col>
            </v-row>
            <v-row justify="center">
                <v-col cols="12">
                    <div style="border: 5px solid var(--vt-c-brown-light); border-radius: 1rem; color: var(--vt-c-brown-dark); width: 130vh; min-height: 50vh;" class="mx-12 d-flex align-center justify-center flex-column text-center">
                        <div>
                          <p class="text-h6">Your list is empty</p>
                          <p class="text-subtitle-2">Add books using the field above</p>
                        </div>
                    </div>
                </v-col>
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
        model: "Public",
      }
    },
  }
  </script>
