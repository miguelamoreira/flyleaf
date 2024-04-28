<template>
  <v-container fluid>
    <v-row>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <v-col cols="10">
        <v-container fluid class="px-10">
          <v-row>
            <v-col cols="12" class="mx-8 mt-10 mx-lg-10 mx-xl-16 d-flex"> 
              <v-btn style="background-color: var(--vt-c-beige);" :elevation="0" :to="{name: 'list'}"><img src="@/assets/images/icons/back.svg"></v-btn>
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">{{ list.title }}</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-form class="mt-6 mx-14 mb-4 mx-lg-14 my-lg-6" style="width: 100%;">
              <v-row>
                <v-col cols="12" sm="6">
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
          </v-row>
          <v-row v-if="list.books.length === 0" justify="center">
            <div style="border: 5px solid var(--vt-c-brown-light); border-radius: 1rem; color: var(--vt-c-brown-dark); width: 135vh; min-height: 50vh;" class="mx-12 my-8 d-flex align-center justify-center flex-column text-center">
              <div>
                <p class="text-h6">Your list is empty</p>
                <p class="text-subtitle-2">Add books using the field above</p>
              </div>
            </div>
          </v-row>
          <v-row v-else justify="center">
            <v-col v-for="(book, index) in list.books" :key="index" cols="12" sm="6" md="3">
              <div class="list mx-12 my-6 mx-lg-14 my-lg-8" style="position: relative;"> 
                <v-card :elevation="4" class="rounded-lg" height="320" style="width: 25vh; height: 40vh;">
                  <img :src="`/src/assets/images/books/${book.image}`" style="width: 25vh; height: 40vh;">
                </v-card>
                <div style="position: absolute; bottom: -55px; left: 0; right: 0; width: 27vh;" class="d-flex align-center justify-space-between">
                  <div>
                    <p class="font-weight-bold mt-2">{{ book.title }}</p>
                    <p>{{ book.author }}</p>
                  </div>
                  <v-btn :elevation="0" style="background-color: var(--vt-c-beige);" size="small"><img src="@/assets/images/icons/delete.svg"></v-btn>
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
        model: "Public",
        list: { 
            id: 1, 
            title: 'TBR', 
            description: '5 books', 
            image: 'normalpeople.webp',
            books: [
            { title: 'Poor Deer', author: 'Claire Oshetsky', image: 'poordeer.webp' },
            { title: 'Normal People', author: 'Sally Rooney', image: 'normalpeople.webp' },
            { title: 'The Need for Roots', author: 'Simone Weil', image: 'theneedforroots.webp' },
            { title: 'August Blue', author: 'Deborah Levy', image: 'augustblue.webp' },
            { title: 'Paper Names', author: 'Susie Luo', image: 'papernames.webp' },
            { title: 'A Breath of Life', author: 'Clarice Lispector', image: 'abreathoflife.webp' },
          ] 
        }, 
      }
    },
  }
</script>

  