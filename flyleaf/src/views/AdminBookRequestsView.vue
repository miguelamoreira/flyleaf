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
                <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold mb-4">Book requests</h2>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="12" sm="6" md="4" lg="3" style="max-width: 1000px;">
                <v-row v-for="(book, index) in requests" :key="book.title">
                  <v-col>
                    <div class="requests" style="position: relative; width: 130vh;">
                      <div class="d-flex flex-row mx-4 mb-10 flex-nowrap align-items-start">
                        <img :src="`/src/assets/images/books/${book.image}`" width="200" height="310" class="rounded-lg" :elevation="4">
                        <div class="mx-lg-12">
                          <div class="d-flex flex-row align-center">
                            <p class="text-h6 font-weight-bold">{{ book.title }}</p>
                          </div>
                          <p class="font-weight-bold">{{ book.author }}</p>
                          <p class="text-center mt-5">{{book.description}}</p>
                          <p class="text-body-2 text-center mt-5">{{book.year}} - {{book.genre}}</p>
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
        requests: [
          { title: 'The Need for Roots', author: 'Simone Weil', image: 'theneedforroots.webp', genre: 'Fiction', year: 2023, description: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' },
          { title: 'August Blue', author: 'Deborah Levy', image: 'augustblue.webp', genre: 'Fiction', year: 2023, description: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' },
          { title: 'Greek Lessons', author: 'Han Kang', image: 'greeklessons.webp', genre: 'Fiction', year: 2023, description: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' },
          { title: 'Brutes', author: 'Dizz Tate', image: 'brutes.webp', genre: 'Fiction', year: 2023, description: 'Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.' },
        ],
      }
    }
  }
  </script>
  