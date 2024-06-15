<template>
  <v-container fluid>
    <v-row>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <v-col cols="10">
        <v-container fluid>
          <v-row v-if="user.idTipoUtilizador === 1">
            <v-col cols="12" class="mx-8 mt-10 mx-lg-10 mx-xl-16 d-flex"> 
              <v-btn style="background-color: var(--vt-c-beige);" :elevation="0" :to="{name: 'profile'}"><img src="@/assets/images/icons/back.svg"></v-btn>
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">Settings</h2>
            </v-col>
          </v-row>
          <v-row v-if="user.idTipoUtilizador === 1">
            <v-col cols="12" class="mx-12 mt-5 mx-lg-14 mx-xl-16">
              <h2 style="font-family: Aleo, serif;" class="text-h5 font-weight-bold">Favourites</h2>
            </v-col>
          </v-row>
          <v-row v-if="user.idTipoUtilizador === 1" v-for="(row, rowIndex) in Math.ceil((favourites.length + 1) / 4)" :key="rowIndex" justify="center">
            <v-col v-for="i in 4" :key="i" cols="12" sm="6" md="3">
              <div class="book mx-12 my-4 mx-lg-14 my-lg-6" style="position: relative;"> 
                <div class="favourites" @click="openUpdateModal(favourites[(rowIndex * 4) + (i - 1)].idLivro, favourites[(rowIndex * 4) + (i - 1)].nomeLivro)" v-if="((rowIndex * 4) + (i - 1)) < favourites.length">
                  <v-card :elevation="4" class="rounded-lg"  height="320" style="width: 25vh; height: 40vh;">
                    <img :src="`${favourites[(rowIndex * 4) + (i - 1)].capaLivro}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </div>
                <div v-if="((rowIndex * 4) + (i - 1)) < favourites.length" style="position: absolute; bottom: -55px; left: 0; right: 0;" class="d-flex align-center justify-space-between">
                  <div>
                    <p class="font-weight-bold mt-2">{{ favourites[(rowIndex * 4) + (i - 1)].nomeLivro }}</p>
                    <p>{{ favourites[(rowIndex * 4) + (i - 1)].autors[0].nomeAutor }}</p>
                  </div>
                  <v-btn @click="removeFavourite(favourites[(rowIndex * 4) + (i - 1)].idLivro)" :elevation="0" style="background-color: var(--vt-c-beige); position: absolute; left: 20vh;" size="small"><img src="@/assets/images/icons/delete.svg"></v-btn>
                </div>
                <v-card @click="openFavouritesModal" v-else-if="favourites.length < 4" :elevation="4" class="rounded-lg" height="320" style="width: 25vh; height: 40vh; background-color: white;"></v-card>
              </div>
            </v-col>
          </v-row>
          <v-row v-else-if="favourites && favourites.length == 0 && user.idTipoUtilizador === 1">
            <v-col v-for="i in 4" :key="i" cols="12" sm="6" md="3">
              <div class="book mx-12 my-4 mx-lg-14 my-lg-6" style="position: relative;"> 
                <v-card @click="openFavouritesModal" :elevation="4" class="rounded-lg" height="320" style="width: 25vh; height: 40vh; background-color: white;"></v-card>
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="mx-12 mt-16 mx-lg-14">
              <h2 style="font-family: Aleo, serif;" class="text-h5 font-weight-bold">User data</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-form class="mt-6 mx-14 mb-4 mx-lg-14 my-lg-6" style="width: 100%;" @submit.prevent="updateUser">
              <v-row>
                <v-col cols="12" sm="6" class="pa-4">
                  <v-text-field id="usernameSettings" v-model="username" label="Username" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="pa-4">
                  <v-text-field id="emailSettings" v-model="email" label="E-mail" type="email" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg"></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" class="pa-4">
                  <v-text-field id="passwordSettings" v-model="password" label="Password" type="password" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg"></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" class="pa-4">
                  <v-text-field id="confirmSettings" v-model="confirmPassword" label="Confirm your password" type="password" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg"></v-text-field>
                </v-col>
                </v-row>
              <v-row justify="center">
                <v-col cols="4" sm="2">
                  <v-btn id="btnUpdate" @click="updateUser" :disabled="!username || !email || !password || !confirmPassword" block class="mt-6" style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);">Save</v-btn>
                </v-col>
                <v-col cols="4" sm="2">
                  <v-btn @click="cancelUpdate" block class="mt-6" style="background-color: var(--vt-c-green-dark); color: var(--vt-c-green-light);">Cancel</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-row>
          <v-row v-if="user.idTipoUtilizador === 1">
            <v-col cols="12" class="mx-12 mt-16 mx-lg-14">
              <h2 style="font-family: Aleo, serif;" class="text-h5 font-weight-bold">Notifications</h2>
            </v-col>
          </v-row>
          <v-row v-if="user.idTipoUtilizador === 1">
            <v-col cols="12" class="mb-4">
              <v-form class="mt-6 my-lg-6" style="width: 100%;">
                <v-row justify="center">
                  <h3>Do you wish to receive notifications about your book requests?</h3>
                </v-row>
                <v-row justify="center">
                  <v-switch v-model="notifStatus" :label="`${notifStatus}`" hide-details false-value="no" true-value="yes"></v-switch>
                </v-row>
                <v-row justify="center">
                  <v-col cols="4" sm="2"> 
                    <v-btn @click="updateNotification" block class="mt-6" style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);">Save</v-btn>
                  </v-col>
                </v-row>
              </v-form>
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

  <!-- Favourites Modal -->
  <v-dialog v-model="favouritesModal" max-width="600px" persistent="true" @input="closeFavouritesModal">
      <v-card class="rounded-lg pa-4" style="background-color: var(--vt-c-beige);">
        <div class="d-flex">
          <v-btn style="background-color: var(--vt-c-beige);" text @click="closeFavouritesModal" :elevation="0" size="small"><img src="@/assets/images/icons/back.svg"></v-btn>
          <v-card-title style="font-family: Aleo, serif; color: var(--vt-c-brown-dark);" class="text-h5">Favourites</v-card-title>
        </div>
      <v-card-text style="color: var(--vt-c-brown-medium);">
        <v-select v-model="titleFavourite" :items="books.map(book => book.nomeLivro)" label="Title" hide-details style="background-color: var(--vt-c-yellow-light);" class="rounded-lg mt-6"></v-select>
        <p v-if="titleFavourite" class="mt-4">{{ getAuthor(titleFavourite) }}</p>
        <p v-else class="mt-4">Author</p>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
          <v-btn style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);" text @click="addFavourite">Save</v-btn>
          <v-btn style="background-color: var(--vt-c-green-dark); color: var(--vt-c-green-light);" text @click="closeFavouritesModal">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Alter Favourites Modal -->
  <v-dialog v-model="updateModal" max-width="600px" persistent="true" @input="closeUpdateModal">
      <v-card class="rounded-lg pa-4" style="background-color: var(--vt-c-beige);">
        <div class="d-flex">
          <v-btn style="background-color: var(--vt-c-beige);" text @click="closeUpdateModal" :elevation="0" size="small"><img src="@/assets/images/icons/back.svg"></v-btn>
          <v-card-title style="font-family: Aleo, serif; color: var(--vt-c-brown-dark);" class="text-h5">Favourites</v-card-title>
        </div>
      <v-card-text style="color: var(--vt-c-brown-medium);">
        <v-select v-model="newTitleFavourite" :items="books.map(book => book.nomeLivro)" label="Title" hide-details style="background-color: var(--vt-c-yellow-light);" class="rounded-lg mt-6"></v-select>
        <p v-if="newTitleFavourite" class="mt-4">{{ getAuthor(newTitleFavourite) }}</p>
        <p v-else class="mt-4">Author</p>
      </v-card-text>
      <v-card-actions class="d-flex justify-center">
          <v-btn style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);" text @click="updateFavourite">Save</v-btn>
          <v-btn style="background-color: var(--vt-c-green-dark); color: var(--vt-c-green-light);" text @click="closeUpdateModal">Cancel</v-btn>
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
  import Sidebar from '@/components/Sidebar.vue';
  import Navbar from '@/components/Navbar.vue';
  import { useAuthStore } from '../stores/auth.js';
  import { useBookStore } from '../stores/books';
  import { useNotificationStore } from '../stores/notifications';
  
  export default {
    components: {
      Sidebar, Navbar,
    },
    data() {
      return {
        favouritesModal: false,
        updateModal: false,
        authStore: useAuthStore(),
        bookStore: useBookStore(),
        notifsStore: useNotificationStore(),
        titleFavourite: '',
        newTitleFavourite: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        notifStatus: true,
        notificationLabel: '',
        modalText: '',
        modalConfirm: false,
      }
    },
    computed: {
      user() {
        return this.authStore.getUser;
      },
      favourites() {
        console.log('user favourites', this.authStore.getFavourites);
        return this.authStore.getFavourites;
      },
      books() {
        const allBooks = this.bookStore.getBooks;
        const favouriteBookIds = this.favourites.map(favourite => favourite.idLivro);
        return allBooks.filter(book => !favouriteBookIds.includes(book.idLivro));
      },
    },
    methods: {
      openFavouritesModal() {
        this.favouritesModal = true;
      },
      openUpdateModal(bookId, bookName) {
        this.oldFavId = bookId; 
        this.newTitleFavourite = bookName;
        this.updateModal = true;
      },
      closeFavouritesModal() {
        this.titleFavourite = '';
        this.favouritesModal = false;
      },
      closeUpdateModal() {
        this.newTitleFavourite = '';
        this.updateModal = false;
      },
      getAuthor(title) {
        const selectedBook = this.books.find(book => book.nomeLivro === title);
        return selectedBook ? selectedBook["autors.nomeAutor"] : '';
      },
      async addFavourite() {
        const selectedBook = this.books.find(book => book.nomeLivro === this.titleFavourite);
        if (selectedBook) {
          try {
            await this.authStore.addFavourite(selectedBook.idLivro);
            await this.authStore.fetchFavourites(this.authStore.getUser.idUtilizador);
            this.closeFavouritesModal();
            this.modalConfirm = true;
            this.modalText = "Book marked as favourite sucessfully."
          } catch (error) {
            this.modalConfirm = true;
            this.modalText = "Error while marking book as favourite."
            console.error('Failed to add favourite:', error);
          }
        }
      },
      async removeFavourite(bookId) {
        try {
          await this.authStore.removeFavourite(bookId);
          await this.authStore.fetchFavourites(this.authStore.getUser.idUtilizador);
          this.modalConfirm = true;
          this.modalText = "Book unmarked as favourite sucessfully."
        } catch (error) {
          console.error('Failed to remove favourite:', error);
        }
      },
      async updateFavourite() {
        const selectedBook = this.books.find(book => book.nomeLivro === this.newTitleFavourite);
        this.modalConfirm = true;
        this.modalText = "Favourite books updated sucessfully."
        if (!selectedBook) {
          console.error('Selected book not found.');
          return;
        }

        try {
          await this.authStore.updateFavourite(this.oldFavId, selectedBook.idLivro);
          await this.authStore.fetchFavourites(this.authStore.getUser.idUtilizador);
          this.closeUpdateModal();
        } catch (error) {
          console.error('Failed to update favourite:', error);
        }
      },
      async updateUser() {
        const userData = {
          username: this.username,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        }

        try {
          await this.authStore.updateUser(userData);
          await this.authStore.fetchUsers;
          this.modalConfirm = true;
          this.modalText = "User's data updated sucessfully."

          this.username = '';
          this.email = '';
          this.password = '';
          this.confirmPassword = '';
        } catch (error) {
          this.modalConfirm = true;
          this.modalText = "Error while trying to update user's data."
          console.error('Failed to update user:', error);
        }
      },
      cancelUpdate() {
        this.username = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
      },
      async updateNotification() {
        try {
          let boolStatus;
          if (this.notifStatus == 'yes') {
            boolStatus = true;
          } else if (this.notifStatus == 'no') {
            boolStatus = false;
          }
          
          await this.notifsStore.updateNotification( 1, this.authStore.getUser.idUtilizador, boolStatus);

          await this.notifsStore.fetchNotificationsSettings(this.authStore.getUser.idUtilizador);
          this.modalConfirm = true;
          this.modalText = "Notification's preferences updated sucessfully."
        } catch (error) {
          console.error('Failed to update notification status:', error);
        }
      },
      async settings() {
        await this.notifsStore.fetchNotificationsSettings(this.authStore.getUser.idUtilizador);
        const state = this.notifsStore.notificationSettings.estadoNotificacao;

        if (state == true) {
          this.notifStatus = 'yes'
        } else {
          this.notifStatus = 'no'
        }
      }
    },
    mounted() {
      this.authStore.fetchFavourites(this.authStore.getUser.idUtilizador);
      this.bookStore.fetchBooks();
      this.settings();
    }
  }
</script>
<style>
.favourites {
  opacity: 0.5; 
  cursor: pointer; 
}
</style>
  