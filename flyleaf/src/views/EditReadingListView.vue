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
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">{{ list.nomeLista }}</h2>
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-form class="mt-6 mx-14 mb-4 mx-lg-14 my-lg-6" style="width: 100%;">
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field v-model="nameList" label="Name" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg"></v-text-field>
                  <v-switch v-model="stateList" :label="`${stateList}`" false-value="Private" true-value="Public" hide-details class="mx-2"></v-switch>
                </v-col>
                <v-col cols="12" sm="6" class="pa-4">
                  <v-textarea v-model="descList" label="Description" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg"></v-textarea>
                </v-col>
              </v-row>
              <v-row align="center">
                <v-col cols="10" sm="6" class="pa-4 d-flex">
                  <v-select v-model="newBook" :items="books.map(book => book.nomeLivro)" label="Add a book" style="background-color: var(--vt-c-yellow-light);" hide-details class="rounded-lg"></v-select>
                  <div>
                    <v-btn @click="addBookToList" block class="mx-4 align-self-center" style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark); width: 10vh;">Add Book</v-btn>
                  </div>
                </v-col>
                <v-col cols="2"></v-col>
                <v-col cols="2" class="d-flex flex-row pa-5">
                  <v-btn @click="saveList" block class="mx-4" style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);">Save</v-btn>
                  <v-btn block class="mx-4" style="background-color: var(--vt-c-green-dark); color: var(--vt-c-green-light);">Cancel</v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-row>
          <v-row v-if="booksList.length === 0" justify="center">
            <div style="border: 5px solid var(--vt-c-brown-light); border-radius: 1rem; color: var(--vt-c-brown-dark); width: 135vh; min-height: 50vh;" class="mx-12 my-8 d-flex align-center justify-center flex-column text-center">
              <div>
                <p class="text-h6">Your list is empty</p>
                <p class="text-subtitle-2">Add books using the field above</p>
              </div>
            </div>
          </v-row>
          <v-row v-else v-for="(row, rowIndex) in Math.ceil((booksList.length + 1) / 4)" :key="rowIndex" justify="center">
            <v-col v-for="i in 4" :key="i" cols="12" sm="6" md="3">
              <div class="list mx-12 my-6 mx-lg-14 my-lg-8" style="position: relative;"> 
                <div v-if="((rowIndex * 4) + (i - 1)) < booksList.length">
                  <v-card :elevation="4" class="rounded-lg" height="320" style="width: 25vh; height: 40vh;">
                    <img :src="`data:image/jpg;base64,${booksList[((rowIndex * 4) + (i - 1))].capaLivro}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </div>
                <div v-if="((rowIndex * 4) + (i - 1)) < booksList.length" style="position: absolute; bottom: -55px; left: 0; right: 0; width: 27vh;" class="d-flex align-center justify-space-between">
                  <div>
                    <p class="font-weight-bold mt-2">{{ booksList[((rowIndex * 4) + (i - 1))].nomeLivro }}</p>
                    <p>{{ booksList[((rowIndex * 4) + (i - 1))].anoLivro }}</p>
                  </div>
                  <v-btn @click="removeBookFromList(((rowIndex * 4) + (i - 1)))" :elevation="0" style="background-color: var(--vt-c-beige);" size="small"><img src="@/assets/images/icons/delete.svg"></v-btn>
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
import { useListStore } from '../stores/lists';
import { useBookStore } from '../stores/books';

export default {
  components: {
    Sidebar, Navbar,
  },
  data() {
    return {
      stateList: 'Private',
      listId: null,
      listStore: useListStore(), 
      bookStore: useBookStore(),
      nameList: '',
      descList: '',
      newBook: '',
      booksList: []
    }
  },
  async mounted() {
    this.listId = this.$route.params.readingListId;
    await this.listStore.fetchList(this.listId);
    await this.bookStore.fetchBooks();
    this.setFormData();
  },
  computed: {
    list() {
      return this.listStore.getList;
    },
    books() {
      const allBooks = this.bookStore.getBooks;
      const listBookIds = this.booksList.map(book => book.idLivro);
      return allBooks.filter(book => !listBookIds.includes(book.idLivro));
    }
  },
  methods: {
    setFormData() {
      if (this.list) {
        this.nameList = this.list.nomeLista;
        this.descList = this.list.descricaoLista;
        this.booksList = this.list.Livros;
        this.stateList = this.list.estadoLista === 1 ? 'Public' : 'Private';
      }
    },
    async addBookToList() {
      if (this.newBook) {
        console.log("lol", this.booksList);
        const selectedBook = this.books.find(book => book.nomeLivro === this.newBook);
        console.log("teste", selectedBook);
        if (selectedBook) {
          this.booksList.push(selectedBook);
          this.newBook = ''; 
        }
      }
    },
    async removeBookFromList(index) {
      this.booksList.splice(index, 1);
    },
    async saveList() {
      try {
        console.log('Current list:', this.list);
        console.log('Name:', this.nameList);
        console.log('Description:', this.descList);

        const boolState = this.stateList === 'Public' ? 1 : 0;

        const bookIds = this.booksList.map(book => book.idLivro);

        const updatedListData = {
          userId: this.list.idUtilizador,
          name: this.nameList,
          state: boolState,
          description: this.descList,
          newBooks: bookIds
        };
        console.log('Updated list data:', updatedListData);

        await this.listStore.updateList(this.listId, updatedListData);

        this.$router.push({ name: 'myreadinglists' });
      } catch (error) {
        console.error('Error updating list:', error);
      }
    }
  }
}
</script>
