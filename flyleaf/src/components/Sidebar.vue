<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer v-model="drawer" :rail="rail" permanent style="background-color: var(--vt-c-brown-light); color: var(--vt-c-brown-dark);" widh="35vh" :elevation="4" >
          <img src="@/assets/images/logo.svg" width="150" height="100" contain class="mx-4">
          <div class="ma-4 d-flex flex-row">
            <div>
              <img :src="`/src/assets/images/avatars/${user.avatarUtilizador}`" width="100" height="100" class="avatar-image">
              <v-btn style="background-color: var(--vt-c-green-dark); position: relative; left: 70px; bottom: 105px" :elevation="0" size="small" @click="openAvatarModal"><img src="@/assets/images/icons/edit.svg"></v-btn>
            </div>
            <div class="d-flex flex-column ma-4">
              <span class="font-weight-bold">{{ user.nomeUtilizador }}</span>
              <span v-if="user.idTipoUtilizador === 1">{{ getReadingsCount(user.idUtilizador) }} books read</span>
            </div>
          </div>
          <v-list density="compact" nav>
            <v-list-item id="btnHomepage" title="Homepage" value="homepage" :to="{name: 'dashboard'}" class="page"></v-list-item>
            <v-list-item id="btnCatalogue" title="Catalogue" value="catalogue" :to="{name: 'catalogue'}"></v-list-item>
            <v-list-item id="btnMyReadings" title="My readings" value="readings" :to="{name: 'myreadings'}" v-if="user.idTipoUtilizador === 1"></v-list-item>
            <v-list-item id="btnMyLists" title="My reading lists" value="readinglists" :to="{name: 'myreadinglists'}" v-if="user.idTipoUtilizador === 1"></v-list-item>
            <v-list-item id="btnMyRequests" title="My book requests" value="bookrequests" :to="{name: 'mybookrequests'}" v-if="user.idTipoUtilizador === 1"></v-list-item>
            <v-list-item id="btnProfile" title="Profile" value="profile" :to="{name: 'profile'}" v-if="user.idTipoUtilizador === 1"></v-list-item>
            <v-list-item id="btnRequests" title="Book requests" value="bookrequests" :to="{name: 'bookrequests'}" v-if="user.idTipoUtilizador === 2"></v-list-item>
            <v-list-item id="btnUsers" title="Users" value="users" :to="{name: 'users'}" v-if="user.idTipoUtilizador === 2"></v-list-item>
            <v-list-item id="btnSettings" title="Settings" value="settings" :to="{name: 'settings'}"></v-list-item>
          </v-list>
          <hr class="ma-4" style="border: 1px solid var(--vt-c-brown-dark)">
          <p class="ma-4" v-if="user.idTipoUtilizador === 1">Options</p>
          <div id="btnReading" class="d-flex flex-column" v-if="user.idTipoUtilizador === 1">
            <v-btn style="background-color: var(--vt-c-brown-dark); color: var(--vt-c-brown-light);" class="ma-4" @click="openNewReadingModal">
              <img src="@/assets/images/icons/add.svg" class="mr-4">
              <span class="font-weight-bold">New reading</span>
            </v-btn>
            <v-btn id="btnList" style="background-color: var(--vt-c-brown-dark); color: var(--vt-c-brown-light);" class="ma-4" :to="{name: 'newreadinglist'}">
              <img src="@/assets/images/icons/add.svg" class="mr-4">
              <span class="font-weight-bold">New reading list</span>
            </v-btn>
            <v-btn id="btnRequest" style="background-color: var(--vt-c-brown-dark); color: var(--vt-c-brown-light);" class="ma-4" @click="openNewRequestModal">
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
            <v-btn :elevation="0" width="120" height="120" style="background-color: var(--vt-c-beige);"><img src="@/assets/images/avatars/avatar_f_1.svg" width="120" height="120" @click="selectAvatar('avatar_f_1.svg')"></v-btn>
            <v-btn :elevation="0" width="120" height="120" style="background-color: var(--vt-c-beige);"><img src="@/assets/images/avatars/avatar_f_2.svg" width="120" height="120" @click="selectAvatar('avatar_f_2.svg')"></v-btn>
            <v-btn :elevation="0" width="120" height="120" style="background-color: var(--vt-c-beige);"><img src="@/assets/images/avatars/avatar_f_3.svg" width="120" height="120" @click="selectAvatar('avatar_f_3.svg')"></v-btn>
          </v-row>
          <v-row class="d-flex justify-space-between pa-4">
            <v-btn :elevation="0" width="120" height="120" style="background-color: var(--vt-c-beige);"><img src="@/assets/images/avatars/avatar_m_1.svg" width="120" height="120" @click="selectAvatar('avatar_m_1.svg')"></v-btn>
            <v-btn :elevation="0" width="120" height="120" style="background-color: var(--vt-c-beige);"><img src="@/assets/images/avatars/avatar_m_2.svg" width="120" height="120" @click="selectAvatar('avatar_m_2.svg')"></v-btn>
            <v-btn :elevation="0" width="120" height="120" style="background-color: var(--vt-c-beige);"><img src="@/assets/images/avatars/avatar_m_3.svg" width="120" height="120" @click="selectAvatar('avatar_m_3.svg')"></v-btn>
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
              <v-select id="titleReading" v-model="newReadingTitle" label="Title" :items="books.map(book => book.nomeLivro)" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg mb-2"></v-select>
              <p v-if="newReadingTitle" class="mb-4">{{ getAuthor() }}</p>
              <p v-else class="mb-4">Author</p>
              <v-textarea v-model="newReadingReview" label="Review" max-length="150" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg mb-4"></v-textarea>
              <v-select v-model="newReadingRating" :items="[1, 2, 3, 4, 5]" label="Rating" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg mb-4"></v-select>
            </v-col>
            <v-col>
              <img :src="newReadingTitle ? `${getBookImage()}` : '/src/assets/images/books/none.svg'" width="200" height="320" class="rounded-lg">
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn id="btnNewReading" style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);" text @click="saveNewReading">Save</v-btn>
          <v-btn id="btnCancel" style="background-color: var(--vt-c-green-dark); color: var(--vt-c-green-light);" text @click="closeNewReadingModal">Cancel</v-btn>
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
              <v-text-field label="Author(s)" v-model="newRequestAuthors" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg mb-4"></v-text-field>
              <v-textarea v-model="newRequestDescription" label="Description" max-length="150" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg mb-4"></v-textarea>
              <div class="d-flex">
                <v-text-field label="Year" v-model="newRequestYear" class="mr-2 rounded-lg mb-4" style="background-color: var(--vt-c-yellow-light);" hide-details></v-text-field>
                <v-select multiple v-model="newRequestGenre" label="Genre" :items="genres" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg mb-4"></v-select>
              </div>
            </v-col>
            <v-col>
              <label for="file-input" class="file-input-label">
                <img :src="newRequestCover ? newRequestCover : '/src/assets/images/books/none.svg'" width="200" height="320" class="rounded-lg">
              </label>
              <input name="cover" id="file-input" type="file" style="display: none;" @change="handleFileInputChange">
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions class="d-flex justify-center">
          <v-btn style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);" text @click="saveNewRequest">Save</v-btn>
          <v-btn style="background-color: var(--vt-c-green-dark); color: var(--vt-c-green-light);" text @click="closeNewRequestModal">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-snackbar v-model="modalConfirm" color="brown-darken-1">
      {{ modalText }}
    <template v-slot:actions>
      <v-btn  variant="text" @click="modalConfirm = false">Close</v-btn>
    </template>
  </v-snackbar>
</template>

<script>
  import { useAuthStore } from '../stores/auth.js';
  import { useRequestStore } from '../stores/requests.js';
  import { useGenreStore } from '../stores/genres.js';
  import { useReviewStore } from '../stores/reviews.js'
  import { useBookStore } from '../stores/books.js';
  import { useReadingsStore } from '../stores/readings';

  export default {
    data () {
      return {
        drawer: true,
        rail: false,
        newReadingModal: false,
        newReadingTitle: '',
        newReadingReview: '',
        newReadingRating: 0,
        newReadingCover: '',
        newRequestModal: false,
        newRequestTitle: '',
        newRequestAuthors: '',
        newRequestDescription: '',
        newRequestYear: '',
        newRequestGenre: null,
        newRequestCover: '',
        newRequestCoverFile: null,
        avatarModal: false,
        authStore: useAuthStore(),
        requestStore: useRequestStore(),
        genreStore: useGenreStore(),
        reviewStore: useReviewStore(),
        bookStore: useBookStore(),
        readingsStore: useReadingsStore(),
        imageMessage: '',
        modalConfirm: false,
        modalText: ''
      }
    },
    mounted() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize(); 
    },
    computed: {
      user() {
        return this.authStore.getUser;
      },
      genres() {
        return this.genreStore.getGenres.map(genre => genre.nomeCategoria);
      },
      books() {
        return this.bookStore.getBooks;
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
      getReadingsCount(idUtilizador) {
        return this.readingsStore.getReadings.filter(reading => reading.idUtilizador === idUtilizador).length;
      },
      openAvatarModal() {
        this.avatarModal = true;
      },
      selectAvatar(avatarSrc) {
        this.selectedAvatar = avatarSrc;
      },
      async saveAvatar() {
        if (this.selectedAvatar) {
          const avatarData = { avatarUtilizador: this.selectedAvatar };
          await this.authStore.updateAvatar(this.user.idUtilizador, avatarData);
          this.user.avatarUtilizador = this.selectedAvatar;
          this.modalConfirm = true;
          this.modalText = 'Avatar updated successfully'
          this.closeAvatarModal();
        } else {
          this.modalConfirm = true;
          this.modalText = 'Error while updating avatar'
          this.closeAvatarModal();
        }
      },
      closeAvatarModal() {
        this.avatarModal = false;
      },
      openNewReadingModal() {
        this.newReadingModal = true;
      },
      async saveNewReading() {
        if (!this.newReadingTitle) {
          return;
        }

        try {
          const book = this.bookStore.getBooks.find(book => book.nomeLivro === this.newReadingTitle);
          if (!book) {
            return;
          }

          const bookId = book.idLivro;

          const reviewData = {
            idLivro: bookId,
            idUtilizador: this.user.idUtilizador,
            comentario: this.newReadingReview,
            classificacao: this.newReadingRating
          };

          await this.reviewStore.createReviewOrReading(bookId, reviewData);

          await this.readingsStore.fetchReadings();
          await this.requestStore.fetchRequests(); 
          this.closeNewReadingModal();
          this.modalConfirm = true;
          this.modalText = "Your reading has been logged sucessfully."
        } catch (error) {
          this.modalConfirm = true;
          this.modalText = "Error while logging reading."
          console.error('Error saving new reading: ', error);
        }
      },
      closeNewReadingModal() {
        this.newReadingTitle = '';
        this.newReadingReview = '';
        this.newReadingRating = '';
        this.newReadingCover = '';
        this.newReadingModal = false;
      },
      openNewRequestModal() {
        this.newRequestModal = true;
        this.newRequestTitle = '';
        this.newRequestAuthors = '';
        this.newRequestDescription = '';
        this.newRequestYear = '';
        this.newRequestGenre = null;
        this.newRequestCover = '';
      },
      async saveNewRequest() {
        if (!this.newRequestTitle || !this.newRequestAuthors || !this.newRequestDescription || !this.newRequestYear || !this.newRequestGenre.length || !this.newRequestCoverFile) {
          console.log("Incomplete data!");
          return;
        }

        try {
          const selectedGenres = this.genreStore.getGenres.filter(genre => this.newRequestGenre.includes(genre.nomeCategoria));

          if (!selectedGenres.length) {
              console.error("Selected genre not found!");
              return;
          }
  
          const authorNames = this.newRequestAuthors.split(',').map(author => author.trim());
          const categoryIds = selectedGenres.map(genre => genre.idCategoria);

          const formData = new FormData();
          formData.append('idUtilizador', this.user.idUtilizador);
          formData.append('bookData[title]', this.newRequestTitle);
          formData.append('bookData[year]', this.newRequestYear);
          formData.append('bookData[description]', this.newRequestDescription);
          formData.append('bookData[state]', 'validating');
          formData.append('cover', this.newRequestCoverFile);

          console.log('cover', formData.get('cover'));
          console.log('cccc', this.newRequestCoverFile);

          authorNames.forEach((author, index) => {
            formData.append(`authorNames[${index}]`, author);
          });

          categoryIds.forEach((categoryId, index) => {
            formData.append(`categoryIds[${index}]`, categoryId);
          });

        await this.requestStore.createNewRequest(formData);
        this.closeNewRequestModal();
        this.modalConfirm = true;
        this.modalText = 'Book request created successfully'
        } catch(error) {
          this.modalConfirm = true;
          this.modalText = 'Error while creating book request'
          console.log("Error saving new request: ", error);
        }
      },
      closeNewRequestModal() {
        this.newRequestModal = false;
      },
      getAuthor() {
        const selectedBook = this.books.find(book => book.nomeLivro === this.newReadingTitle);
        return selectedBook ? selectedBook["autors.nomeAutor"] : '';
      },
      getBookImage() {
        const selectedBook = this.books.find(book => book.nomeLivro === this.newReadingTitle);
        return selectedBook ? `${selectedBook.capaLivro}` : '/src/assets/images/books/none.svg';
      },
      handleFileInputChange(event) {
        const file = event.target.files[0];
        this.newRequestCover = URL.createObjectURL(file);
        this.newRequestCoverFile = file;
      },
    },
    mounted() {
      this.genreStore.fetchGenres();
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