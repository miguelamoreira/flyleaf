<template>
  <v-container fluid>
      <v-row>
          <v-col cols="1">
              <NavBar></NavBar>
          </v-col>
          <v-col cols="11">
              <v-container fluid>
                  <v-btn :elevation="0" style="background-color: var(--vt-c-beige); position: absolute; right: 15vh;"><img src="@/assets/images/icons/notif1.svg"></v-btn>
                  <v-btn :elevation="0" style="background-color: var(--vt-c-beige); position: absolute; right: 5vh;" :to="{name: 'home'}"><img src="@/assets/images/icons/logout.svg"></v-btn>
              </v-container>
              <v-container fluid class="mx-12 pa-12">
                <div class="d-flex flex-row ma-12">
                  <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold mb-4">Catalogue</h2>
                  <v-spacer></v-spacer>
                  <v-text-field label="Search by title, author, genre or year" style="background-color: var(--vt-c-yellow-light);" hide-details="auto" class="rounded-lg"></v-text-field>
                </div>
                  <div class="d-flex flex-row ma-12 justify-content-evenly flex-wrap" style="width: 130vh;" >
                      <div class="book mr-12">
                          <v-card :elevation="4" style="width: 200px; height: 320px;" class="rounded-lg">
                              <img src="@/assets/images/books/papernames.webp" width="200" height="320">
                          </v-card>
                          <p class="font-weight-bold mt-2">Paper Names</p>
                          <p>Susie Luo</p>
                          <div style="position: relative; bottom: 12vh" class="text-center">
                              <v-btn :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0"><img src="@/assets/images/icons/arrow.svg" width="30" height="30"></v-btn>
                              <v-btn :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0"><img src="@/assets/images/icons/review.svg" width="30" height="30"></v-btn>
                          </div>
                      </div>
                      <div class="book mr-12">
                          <v-card :elevation="4" style="width: 200px; height: 320px;" class="rounded-lg">
                              <img src="@/assets/images/books/abreathoflife.webp" width="200" height="320">
                          </v-card>
                          <p class="font-weight-bold mt-2">A Breath of Life</p>
                          <p>Clarice Lispector</p>
                          <div style="position: relative; bottom: 12vh" class="text-center">
                              <v-btn :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0"><img src="@/assets/images/icons/arrow.svg" width="30" height="30"></v-btn>
                              <v-btn :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0"><img src="@/assets/images/icons/review.svg" width="30" height="30"></v-btn>
                          </div>
                      </div>
                      <div class="book mr-12">
                          <v-card :elevation="4" style="width: 200px; height: 320px;" class="rounded-lg">
                              <img src="@/assets/images/books/poordeer.webp" width="200" height="320">
                          </v-card>
                          <p class="font-weight-bold mt-2">Poor Deer</p>
                          <p>Claire Oshetsky</p>
                          <div style="position: relative; bottom: 12vh" class="text-center">
                              <v-btn :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0"><img src="@/assets/images/icons/arrow.svg" width="30" height="30"></v-btn>
                              <v-btn :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0"><img src="@/assets/images/icons/review.svg" width="30" height="30"></v-btn>
                          </div>
                      </div>
                      <div class="book mr-12">
                          <v-card :elevation="4" style="width: 200px; height: 320px;" class="rounded-lg">
                              <img src="@/assets/images/books/normalpeople.jpeg" width="200" height="320">
                          </v-card>
                          <p class="font-weight-bold mt-2">Normal People</p>
                          <p>Sally Rooney</p>
                          <div style="position: relative; bottom: 12vh" class="text-center">
                              <v-btn :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0"><img src="@/assets/images/icons/arrow.svg" width="30" height="30"></v-btn>
                              <v-btn :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0"><img src="@/assets/images/icons/review.svg" width="30" height="30"></v-btn>
                          </div>
                      </div>
                      <div class="book mr-12">
                          <v-card :elevation="4" style="width: 200px; height: 320px;" class="rounded-lg">
                              <img src="@/assets/images/books/normalpeople.jpeg" width="200" height="320">
                          </v-card>
                          <p class="font-weight-bold mt-2">Normal People</p>
                          <p>Sally Rooney</p>
                          <div style="position: relative; bottom: 12vh" class="text-center">
                              <v-btn :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0"><img src="@/assets/images/icons/arrow.svg" width="30" height="30"></v-btn>
                              <v-btn :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0"><img src="@/assets/images/icons/review.svg" width="30" height="30"></v-btn>
                          </div>
                      </div>
                  </div>
              </v-container>
          </v-col>
      </v-row>
  </v-container>


</template>

<script>
  import NavBar from '../components/Navbar.vue'

  export default {
      components: {
          NavBar,
      }
  }
</script>