<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer v-model="drawer" :rail="rail" permanent style="background-color: var(--vt-c-brown-light);" :elevation="4" width="300">
          <img src="@/assets/images/logo.svg" width="150" height="100" contain class="mx-4">
          <template v-slot:append><v-btn variant="text" @click.stop="toggleRail" class="my-6" size="small"><img :src="rail ? 'src/assets/images/icons/open.svg' : 'src/assets/images/icons/back.svg'"></v-btn></template>
          <div class="ma-4 d-flex flex-row">
            <img src="@/assets/images/avatar.svg" width="100" height="100">
            <div class="d-flex flex-column ma-4">
              <span class="font-weight-bold">Username</span>
              <span>0 books read</span>
            </div>
          </div>
          <v-list density="compact" nav>
            <v-list-item title="Homepage" value="homepage" :to="{name: 'dashboard'}"></v-list-item>
            <v-list-item title="Catalogue" value="catalogue" :to="{name: 'catalogue'}"></v-list-item>
            <v-list-item title="Profile" value="profile"></v-list-item>
            <v-list-item title="My readings" value="readings"></v-list-item>
            <v-list-item title="My reading lists" value="readinglists"></v-list-item>
            <v-list-item title="My book requests" value="bookrequests"></v-list-item>
            <v-list-item title="Settings" value="settings"></v-list-item>
          </v-list>
          <hr class="ma-4">
          <p class="ma-4">Options</p>
          <div class="d-flex flex-column">
            <v-btn style="background-color: var(--vt-c-brown-dark); color: var(--vt-c-brown-light);" class="ma-4" @click="openNewReadingModal">
              <img src="@/assets/images/icons/add.svg" class="mr-4">
              <span class="font-weight-bold">New reading</span>
            </v-btn>
            <v-btn style="background-color: var(--vt-c-brown-dark); color: var(--vt-c-brown-light);" class="ma-4">
              <img src="@/assets/images/icons/add.svg" class="mr-4">
              <span class="font-weight-bold">New reading list</span>
            </v-btn>
            <v-btn style="background-color: var(--vt-c-brown-dark); color: var(--vt-c-brown-light);" class="ma-4" @click="openNewRequestModal">
              <img src="@/assets/images/icons/add.svg" class="mr-4">
              <span class="font-weight-bold">New book request</span>
            </v-btn>
          </div>
        </v-navigation-drawer>
      </v-layout>
    </v-card>

    <!-- New Reading Modal -->
    <v-dialog v-model="newReadingModal" max-width="600px">
      <v-card class="rounded-lg pa-4" style="background-color: var(--vt-c-beige);">
        <v-card-title style="font-family: Aleo, serif;" class="text-h5">New reading</v-card-title>
        <v-card-text>
          <v-row class="d-flex flex-row-reverse">
            <v-col cols="7">
              <v-select v-model="newReadingTitle" label="Title" :items="books.map(book => book.title)"></v-select>
              <p v-if="newReadingTitle">{{ getAuthor(newReadingTitle) }}</p>
              <p v-else>Author</p>
              <v-textarea v-model="newReadingReview" label="Review" max-length="150"></v-textarea>
              <v-select v-model="newReadingRating" :items="[1, 2, 3, 4, 5]" label="Rating"></v-select>
            </v-col>
            <v-col>
              <img src="@/assets/images/books/papernames.webp" width="200" height="320" class="rounded-lg">
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);" text @click="saveNewReading">Save</v-btn>
          <v-btn style="background-color: var(--vt-c-green-dark); color: var(--vt-c-green-light);" text @click="closeNewReadingModal">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- New Request Modal -->
    <v-dialog v-model="newRequestModal" max-width="800px">
      <v-card class="rounded-lg pa-4" style="background-color: var(--vt-c-beige);">
        <v-card-title style="font-family: Aleo, serif;" class="text-h5">New book request</v-card-title>
        <v-card-text>
          <v-row class="d-flex flex-row-reverse">
            <v-col cols="8">
              <v-select v-model="newRequestTitle" label="Title" :items="books.map(book => book.title)"></v-select>
              <v-text-field label="Author" v-model="newRequestAuthor"></v-text-field>
              <v-textarea v-model="newRequestDescription" label="Description" max-length="150"></v-textarea>
              <div class="d-flex">
                <v-text-field label="Year" v-model="newRequestYear" class="mr-2"></v-text-field>
                <v-select label="Genre" :items="['Non-fiction', 'Fiction', 'Romance']"></v-select>
              </div>
            </v-col>
            <v-col>
              <label for="file-input" class="file-input-label">
                <img src="@/assets/images/books/papernames.webp" width="200" height="320" class="rounded-lg">
              </label>
              <input id="file-input" type="file" style="display: none;" @change="handleFileInputChange">
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);" text @click="saveNewRequest">Save</v-btn>
          <v-btn style="background-color: var(--vt-c-green-dark); color: var(--vt-c-green-light);" text @click="closeNewRequestModal">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        drawer: true,
        rail: false,
        newReadingModal: false,
        newReadingTitle: '',
        newReadingReview: '',
        newReadingRating: '',
        newReadingCover: '',
        books: [
          {title: 'Paper Names', author: 'Susie Luo', cover: 'papernames.webp'},
          {title: 'Poor Deer', author: 'Claire Oshetsky', cover: 'poordeer.webp'}
        ],
        newRequestModal: false,
        newRequestTitle: '',
        newRequestAuthor: '',
        newRequestDescription: '',
        newRequestYear: '',
        newRequestGenre: '',
      }
    },
    mounted() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize(); 
    },
    methods: {
      handleResize() {
        if (window.innerWidth < 1000) { 
          this.rail = true;
        } else {
          this.rail = false;
        }
      },
      toggleRail() {
        this.rail = !this.rail;
      },
      openNewReadingModal() {
        this.newReadingModal = true;
      },
      closeNewReadingModal() {
        this.newReadingModal = false;
      },
      openNewRequestModal() {
        this.newRequestModal = true;
      },
      closeNewRequestModal() {
        this.newRequestModal = false;
      },
      getAuthor(title) {
        const book = this.books.find(book => book.title === title);
        return book ? book.author : '';
      },
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    }
  }
</script>

<style>
.file-input-label {
  cursor: pointer;
}

.file-input-label img {
  border: 1px solid #ccc;
  border-radius: 4px;
}

.file-input-label:hover img {
  opacity: 0.7;
}
</style>