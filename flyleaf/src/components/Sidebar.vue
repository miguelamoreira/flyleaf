<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer v-model="drawer" :rail="rail" permanent style="background-color: var(--vt-c-brown-light); color: var(--vt-c-brown-dark);" widh="35vh" :elevation="4" >
          <img src="@/assets/images/logo.svg" width="150" height="100" contain class="mx-4">
          <div class="ma-4 d-flex flex-row">
            <div>
              <img src="@/assets/images/avatar.svg" width="100" height="100" class="avatar-image">
              <v-btn style="background-color: var(--vt-c-green-dark); position: relative; left: 9vh; bottom: 14vh" :elevation="0" size="small" @click="openAvatarModal"><img src="@/assets/images/icons/edit.svg"></v-btn>
            </div>
            <div class="d-flex flex-column ma-4">
              <span class="font-weight-bold">{{ user.nomeUtilizador }}</span>
              <span v-if="user.idTipoUtilizador === 1">0 books read</span>
            </div>
          </div>
          <v-list density="compact" nav>
            <v-list-item title="Homepage" value="homepage" :to="{name: 'dashboard'}" class="page"></v-list-item>
            <v-list-item title="Catalogue" value="catalogue" :to="{name: 'catalogue'}" v-if="user.idTipoUtilizador === 1"></v-list-item>
            <v-list-item title="My readings" value="readings" :to="{name: 'myreadings'}" v-if="user.idTipoUtilizador === 1"></v-list-item>
            <v-list-item title="My reading lists" value="readinglists" :to="{name: 'myreadinglists'}" v-if="user.idTipoUtilizador === 1"></v-list-item>
            <v-list-item title="My book requests" value="bookrequests" :to="{name: 'mybookrequests'}" v-if="user.idTipoUtilizador === 1"></v-list-item>
            <v-list-item title="Profile" value="profile" :to="{name: 'profile'}" v-if="user.idTipoUtilizador === 1"></v-list-item>
            <v-list-item title="Book requests" value="bookrequests" :to="{name: 'bookrequests'}" v-if="user.idTipoUtilizador === 2"></v-list-item>
            <v-list-item title="Users" value="users" :to="{name: 'users'}" v-if="user.idTipoUtilizador === 2"></v-list-item>
            <v-list-item title="Settings" value="settings" :to="{name: 'settings'}"></v-list-item>
          </v-list>
          <hr class="ma-4" style="border: 1px solid var(--vt-c-brown-dark)">
          <p class="ma-4" v-if="user.idTipoUtilizador === 1">Options</p>
          <div class="d-flex flex-column" v-if="user.idTipoUtilizador === 1">
            <v-btn style="background-color: var(--vt-c-brown-dark); color: var(--vt-c-brown-light);" class="ma-4" @click="openNewReadingModal">
              <img src="@/assets/images/icons/add.svg" class="mr-4">
              <span class="font-weight-bold">New reading</span>
            </v-btn>
            <v-btn style="background-color: var(--vt-c-brown-dark); color: var(--vt-c-brown-light);" class="ma-4" :to="{name: 'newreadinglist'}">
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


    <!-- Edit Avatar Modal -->
    <v-dialog v-model="avatarModal" max-width="600px" persistent>
      <v-card class="rounded-lg pa-4" style="background-color: var(--vt-c-beige);">
        <v-card-title style="font-family: Aleo, serif;" class="text-h5">Avatar</v-card-title>
        <v-card-text>
          <v-row class="d-flex justify-space-between pa-4">
            <v-btn :elevation="0" width="120" height="120" style="background-color: var(--vt-c-beige);"><img src="@/assets/images/avatars/avatar_f_1.svg" width="120" height="120" @click="selectAvatar('/src/assets/images/avatars/avatar_f_1.svg')"></v-btn>
            <v-btn :elevation="0" width="120" height="120" style="background-color: var(--vt-c-beige);"><img src="@/assets/images/avatars/avatar_f_2.svg" width="120" height="120" @click="selectAvatar('/src/assets/images/avatars/avatar_f_2.svg')"></v-btn>
            <v-btn :elevation="0" width="120" height="120" style="background-color: var(--vt-c-beige);"><img src="@/assets/images/avatars/avatar_f_3.svg" width="120" height="120" @click="selectAvatar('/src/assets/images/avatars/avatar_f_3.svg')"></v-btn>
          </v-row>
          <v-row class="d-flex justify-space-between pa-4">
            <v-btn :elevation="0" width="120" height="120" style="background-color: var(--vt-c-beige);"><img src="@/assets/images/avatars/avatar_m_1.svg" width="120" height="120" @click="selectAvatar('/src/assets/images/avatars/avatar_m_1.svg')"></v-btn>
            <v-btn :elevation="0" width="120" height="120" style="background-color: var(--vt-c-beige);"><img src="@/assets/images/avatars/avatar_m_2.svg" width="120" height="120" @click="selectAvatar('/src/assets/images/avatars/avatar_m_2.svg')"></v-btn>
            <v-btn :elevation="0" width="120" height="120" style="background-color: var(--vt-c-beige);"><img src="@/assets/images/avatars/avatar_m_3.svg" width="120" height="120" @click="selectAvatar('/src/assets/images/avatars/avatar_m_3.svg')"></v-btn>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-center mt-6">
          <v-btn style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);" text @click="saveAvatar">Save</v-btn>
          <v-btn style="background-color: var(--vt-c-green-dark); color: var(--vt-c-green-light);" text @click="closeAvatarModal">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- New Reading Modal -->
    <v-dialog v-model="newReadingModal" max-width="600px" persistent>
      <v-card class="rounded-lg pa-4" style="background-color: var(--vt-c-beige);">
        <v-card-title style="font-family: Aleo, serif;" class="text-h5">New reading</v-card-title>
        <v-card-text>
          <v-row class="d-flex flex-row-reverse">
            <v-col cols="7">
              <v-select v-model="newReadingTitle" label="Title" :items="books.map(book => book.title)" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg mb-2"></v-select>
              <p v-if="newReadingTitle" class="mb-4">{{ getAuthor(newReadingTitle) }}</p>
              <p v-else class="mb-4">Author</p>
              <v-textarea v-model="newReadingReview" label="Review" max-length="150" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg mb-4"></v-textarea>
              <v-select v-model="newReadingRating" :items="[1, 2, 3, 4, 5]" label="Rating" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg mb-4"></v-select>
            </v-col>
            <v-col>
              <img :src="newReadingTitle ? `/src/assets/images/books/${getBookImage(newReadingTitle)}` : '/src/assets/images/books/none.svg'" width="200" height="320" class="rounded-lg">
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
    <v-dialog v-model="newRequestModal" max-width="800px" persistent>
      <v-card class="rounded-lg pa-4" style="background-color: var(--vt-c-beige);">
        <v-card-title style="font-family: Aleo, serif;" class="text-h5">New book request</v-card-title>
        <v-card-text>
          <v-row class="d-flex flex-row-reverse">
            <v-col cols="8">
              <v-text-field v-model="newRequestTitle" label="Title" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg mb-4"></v-text-field>
              <v-text-field label="Author" v-model="newRequestAuthor" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg mb-4"></v-text-field>
              <v-textarea v-model="newRequestDescription" label="Description" max-length="150" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg mb-4"></v-textarea>
              <div class="d-flex">
                <v-text-field label="Year" v-model="newRequestYear" class="mr-2 rounded-lg mb-4" style="background-color: var(--vt-c-yellow-light);" hide-details></v-text-field>
                <v-select label="Genre" :items="['Non-fiction', 'Fiction', 'Romance']" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg mb-4"></v-select>
              </div>
            </v-col>
            <v-col>
              <label for="file-input" class="file-input-label">
                <img :src="newRequestCover ? newRequestCover : '/src/assets/images/books/none.svg'" width="200" height="320" class="rounded-lg">
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
  import { useAuthStore } from '../stores/auth.js';
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
          {title: 'Paper Names', author: 'Susie Luo', image: 'papernames.webp'},
          {title: 'Poor Deer', author: 'Claire Oshetsky', image: 'poordeer.webp'}
        ],
        newRequestModal: false,
        newRequestTitle: '',
        newRequestAuthor: '',
        newRequestDescription: '',
        newRequestYear: '',
        newRequestGenre: '',
        newRequestCover: '',
        avatarModal: false,
        authStore: useAuthStore(),
      }
    },
    mounted() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize(); 
    },
    computed: {
      user() {
        return this.authStore.getUser;
      }
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
      openAvatarModal() {
        this.avatarModal = true;
      },
      selectAvatar(avatarSrc) {
        this.selectedAvatar = avatarSrc;
      },
      saveAvatar() {
        if (this.selectedAvatar) {
          document.querySelector('.avatar-image').setAttribute('src', this.selectedAvatar);
        }
        this.avatarModal = false;
      },
      closeAvatarModal() {
        this.avatarModal = false;
      },
      openNewReadingModal() {
        this.newReadingModal = true;
      },
      closeNewReadingModal() {
        this.newReadingModal = false;
      },
      openNewRequestModal() {
        this.newRequestModal = true;
        this.newRequestTitle = '';
        this.newRequestAuthor = '';
        this.newRequestDescription = '';
        this.newRequestYear = '';
        this.newRequestGenre = '';
        this.newRequestCover = '';
      },
      closeNewRequestModal() {
        this.newRequestModal = false;
      },
      getAuthor(title) {
        const book = this.books.find(book => book.title === title);
        return book ? book.author : '';
      },
      getBookImage(title) {
        const book = this.books.find(book => book.title === title);
        return book ? book.image : '';
      },
      handleFileInputChange(event) {
        const file = event.target.files[0];
        this.newRequestCover = URL.createObjectURL(file);
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