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
          <v-row v-for="(book, index) in requests" :key="book.title" justify="center" class="px-10 mt-10">
            <v-col>
              <div class="requests" style="position: relative; width: 130vh;">
                <div class="d-flex flex-row mx-4 mb-10 flex-nowrap align-items-start">
                  <img :src="`/src/assets/images/books/${book.image}`" width="200" height="310" class="rounded-lg" :elevation="4">
                  <div class="mx-lg-12">
                    <div class="d-flex flex-row align-center">
                      <p class="text-h6 font-weight-bold">{{ book.title }}</p>
                    </div>
                    <p class="font-weight-bold">{{ book.author }}</p>
                    <p class="text-center mt-5">{{ book.description }}</p>
                    <p class="text-body-2 text-center mt-5">{{ book.year }} - {{ book.genre }}</p>
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
      