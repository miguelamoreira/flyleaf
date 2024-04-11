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
      <v-card class="mx-auto align-self-center rounded-lg pa-6" width="90vh" height="70%" style="background-color: var(--vt-c-beige);"> 
        <v-card-item>
          <v-card-title class="text-center text-h4 mb-12" style="font-family: Aleo, serif;">
            Flyleaf: <span style="color: var(--vt-c-green-light);">Discover. Connect. Inspire.</span>
          </v-card-title>
        </v-card-item>
        <v-card-text class="text-center pt-12 text-subtitle-1 mb-12">
          Welcome to a world where you can discover new reads, engage with fellow book lovers, and connect over shared literary experiences. Join us and let your reading journey take flight.
        </v-card-text>
        <v-btn style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);" class="ma-4" :to="{ name: 'signup' }">Join</v-btn>
      </v-card>
    </v-container>
    <v-container fluid id="sectionAbout" style="background-color: var(--vt-c-beige);" class="d-flex justify-space-between">
      <v-card style="background-color: var(--vt-c-green-dark); width: 25%;" class="rounded-lg pa-4 ma-4">
        <div class="d-flex flex-row justify-space-between">
          <v-card-title class="text-h6 font-weight-bold" style="color: var(--vt-c-beige);">Track</v-card-title>
          <img src="@/assets/images/icons/book1.svg" width="40" class="mx-4">
        </div>
        <v-card-text class="text-center pt-12 text-body-2" style="color: var(--vt-c-beige);">
          Track all your readings in one place to save more time to read.
        </v-card-text>
      </v-card>
      <v-card style="background-color: var(--vt-c-green-light); width: 25%;" class="rounded-lg pa-4 ma-4">
        <div class="d-flex flex-row justify-space-between">
          <v-card-title class="text-h6 font-weight-bold" style="color: var(--vt-c-brown-dark);">Curate</v-card-title>
          <img src="@/assets/images/icons/book2.svg" width="40" class="mx-4">
        </div>
        <v-card-text class="text-center pt-12 text-body-2" style="color: var(--vt-c-brown-dark);">
          Curate your own reading lists - favourites, to be read, did not finish, and so on.
        </v-card-text>
      </v-card>
      <v-card style="background-color: var(--vt-c-yellow-dark); width: 25%;" class="rounded-lg pa-4 ma-4">
        <div class="d-flex flex-row justify-space-between">
          <v-card-title class="text-h6 font-weight-bold" style="color: var(--vt-c-brown-dark);">Explore</v-card-title>
          <img src="@/assets/images/icons/book3.svg" width="40" class="mx-4">
        </div>
        <v-card-text class="text-center pt-12 text-body-2" style="color: var(--vt-c-brown-dark);">
          Explore the catalogue and discover new books wanting to be read or read reviews of your favourite books.
        </v-card-text>
      </v-card>
      <v-card style="background-color: var(--vt-c-yellow-light); width: 25%;" class="rounded-lg pa-4 ma-4">
        <div class="d-flex flex-row justify-space-between">
          <v-card-title class="text-h6 font-weight-bold" style="color: var(--vt-c-brown-dark);">Request</v-card-title>
          <img src="@/assets/images/icons/book4.svg" width="30" class="mx-4">
        </div>
        <v-card-text class="text-center pt-12 text-body-2" style="color: var(--vt-c-brown-dark);">
          Didn’t find a particular book? Request it to be added to the catalogue.
        </v-card-text>
      </v-card>
    </v-container>
    <v-container fluid id="sectionHighest" style="background-color: var(--vt-c-beige);">
      <div style="border: 5px solid var(--vt-c-brown-light); border-radius: 1rem; color: var(--vt-c-brown-dark);">
        <h2 style="font-family: Aleo, serif;" class="text-h5 font-weight-bold pa-4">Highest rated</h2>
        <div class="d-flex flex-row mx-4 mb-4">
          <img src="@/assets/images/books/normalpeople.jpeg" width="300" height="420" class="rounded-lg" :elevation="4">
          <div class="mx-12">
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
        <v-card style="background-color: var(--vt-c-green-light); color: var(--vt-c-beige);" width="50vh" class="text-center pa-6" :elevation="4">
          <v-card-title class="font-weight-bold">CONTEMPORARY</v-card-title>
        </v-card>
        <v-card style="background-color: var(--vt-c-green-light); color: var(--vt-c-beige);" width="50vh" class="text-center pa-6" :elevation="4">
          <v-card-title class="font-weight-bold">CLASSICS</v-card-title>
        </v-card>
        <v-card style="background-color: var(--vt-c-green-light); color: var(--vt-c-beige);" width="50vh" class="text-center pa-6" :elevation="4">
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
