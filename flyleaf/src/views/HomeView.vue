<template>
  <v-app>
    <v-container fluid>
      <v-app-bar app dense :elevation="0" class="pa-2" style="background-color: var(--vt-c-beige)">
          <img src="@/assets/images/logo.svg" width="150" height="100" contain class="mx-4">
          <v-app-bar-title class="ml-auto" grow></v-app-bar-title>
          <v-btn style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);" :to="{ name: 'login' }">Login</v-btn>
          <v-btn style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);" class="mx-4" :to="{ name: 'signup' }">Signup</v-btn>
      </v-app-bar>
    </v-container>
    <v-container fluid id="sectionHero" style="background-color: var(--vt-c-brown-light); height: 80vh;" class="pt-12 d-flex align-items-center justify-content-center align-content-space-between text-center">
      <v-card class="mx-auto align-self-center rounded-lg pa-6" width="90vh" height="50vh" style="background-color: var(--vt-c-beige);"> 
        <v-card-item>
          <v-card-title class="text-center text-h4 mb-12 font-weight-bold" style="font-family: Aleo, serif;">
            Flyleaf: <span style="color: var(--vt-c-green-light);" class="font-weight-bold">Discover. Connect. Inspire.</span>
          </v-card-title>
        </v-card-item>
        <v-card-text class="text-center pt-12 text-subtitle-1 mb-12">
          Welcome to a world where you can discover new reads, engage with fellow book lovers, and connect over shared literary experiences. Join us and let your reading journey take flight.
        </v-card-text>
        <v-btn style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);" class="ma-xl-4" :to="{ name: 'signup' }" size="large">Join</v-btn>
      </v-card>
    </v-container>
    <v-container fluid id="sectionAbout" style="background-color: var(--vt-c-beige);">
      <v-row justify="center" align="center">
        <v-col cols="12" sm="6" md="4" lg="3" v-for="(card, index) in cards" :key="index">
          <v-card :color="card.color" class="rounded-lg pa-4 ma-4" height="200px">
            <div class="d-flex flex-row justify-space-between">
              <v-card-title class="text-h6 font-weight-bold" :style="{ color: card.titleColor }">{{ card.title }}</v-card-title>
              <img :src="`/src/assets/images/icons/${card.icon}`" width="40" class="mx-4">
            </div>
            <v-card-text class="text-center pt-12 text-body-2" :style="{ color: card.textColor }">
              {{ card.text }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container fluid id="sectionHighest" style="background-color: var(--vt-c-beige);">
      <div style="border: 5px solid var(--vt-c-brown-light); border-radius: 1rem; color: var(--vt-c-brown-dark);">
        <h2 style="font-family: Aleo, serif;" class="text-h5 font-weight-bold pa-4">Highest rated</h2>
        <div class="d-flex flex-row mx-4 mb-4 flex-wrap flex-sm-nowrap">
          <img src="@/assets/images/books/normalpeople.webp" width="300" height="420" class="rounded-lg" :elevation="4">
          <div class="mx-lg-12">
            <div class="d-flex flex-row">
              <p class="text-h6 font-weight-bold">Normal People</p>
              <p class="text-body-2 mx-4 mt-2">2018</p>
            </div>
            <p class="font-weight-bold">Sally Rooney</p>
            <p class="my-12 font-weight-bold">Fiction, Romance, Contemporary</p>
            <p class="my-12 font-weight-bold">4.2/5</p>
            <p class="mt-12 mb-4 font-weight-bold">Description</p>
            <p class="text-center">
              At school Connell and Marianne pretend not to know each other. He’s popular and well-adjusted, star of the school soccer team while she is lonely, proud, and intensely private. But when Connell comes to pick his mother up from her housekeeping job at Marianne’s house, a strange and indelible connection grows between the two teenagers - one they are determined to conceal.
            </p>
          </div>
        </div>
      </div>
    </v-container>
    <v-container fluid id="sectionGenres" style="background-color: var(--vt-c-beige);">
      <h2 style="font-family: Aleo, serif;" class="text-h5 font-weight-bold">Popular genres</h2>
      <div class="d-flex justify-space-between flex-wrap align-content-space-between pt-4">
        <v-card style="background-color: var(--vt-c-green-light); color: var(--vt-c-beige);" width="50vh" class="text-center mb-8 pa-6" :elevation="4">
          <v-card-title class="font-weight-bold">FICTION</v-card-title>
        </v-card>
        <v-card style="background-color: var(--vt-c-green-light); color: var(--vt-c-beige);" width="50vh" class="text-center mb-8 pa-6" :elevation="4">
          <v-card-title class="font-weight-bold">NON-FICTION</v-card-title>
        </v-card>
        <v-card style="background-color: var(--vt-c-green-light); color: var(--vt-c-beige);" width="50vh" class="text-center mb-8 pa-6" :elevation="4">
          <v-card-title class="font-weight-bold">ROMANCE</v-card-title>
        </v-card>
        <v-card style="background-color: var(--vt-c-green-light); color: var(--vt-c-beige);" width="50vh" class="text-center mb-8 pa-6" :elevation="4">
          <v-card-title class="font-weight-bold">CONTEMPORARY</v-card-title>
        </v-card>
        <v-card style="background-color: var(--vt-c-green-light); color: var(--vt-c-beige);" width="50vh" class="text-center mb-8 pa-6" :elevation="4">
          <v-card-title class="font-weight-bold">CLASSICS</v-card-title>
        </v-card>
        <v-card style="background-color: var(--vt-c-green-light); color: var(--vt-c-beige);" width="50vh" class="text-center mb-8 pa-6" :elevation="4">
          <v-card-title class="font-weight-bold">BIOGRAPHY</v-card-title>
        </v-card>
      </div>
    </v-container>
    <v-container fluid style="background-color: var(--vt-c-beige);">
      <footer>
        <hr>
        <p>webpii - group 3</p>
      </footer>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { title: 'Track', color: 'var(--vt-c-green-dark)', titleColor: 'var(--vt-c-beige)', icon: 'book1.svg', text: 'Track all your readings in one place to save more time to read.', textColor: 'var(--vt-c-beige)' },
        { title: 'Curate', color: 'var(--vt-c-green-light)', titleColor: 'var(--vt-c-brown-dark)', icon: 'book2.svg', text: 'Curate your own reading lists - favourites, to be read, did not finish, and so on.', textColor: 'var(--vt-c-brown-dark)' },
        { title: 'Explore', color: 'var(--vt-c-yellow-dark)', titleColor: 'var(--vt-c-brown-dark)', icon: 'book3.svg', text: 'Explore the catalogue and discover new books wanting to be read or read reviews of your favourite books.', textColor: 'var(--vt-c-brown-dark)' },
        { title: 'Request', color: 'var(--vt-c-yellow-light)', titleColor: 'var(--vt-c-brown-dark)', icon: 'book4.svg', text: 'Didn’t find a particular book? Request it to be added to the catalogue.', textColor: 'var(--vt-c-brown-dark)' }
      ],
    };
  }
}
</script>