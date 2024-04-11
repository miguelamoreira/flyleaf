<template>
    <v-container fluid>
        <v-row>
            <v-col cols="1">
                <NavBar></NavBar>
            </v-col>
            <v-col cols="11">
                <v-container fluid>
                    <v-btn :elevation="0" style="background-color: var(--vt-c-beige); position: absolute; right: 15vh;"><img src="@/assets/images/icons/notif1.svg"></v-btn>
                    <v-btn :elevation="0" style="background-color: var(--vt-c-beige); position: absolute; right: 5vh;" :to="{name: 'home'}"><img src="@/assets/images/icons/logout.svg"></v-btn>
                </v-container>
                <v-container fluid class="mx-12 pa-12">
                  <div class="d-flex flex-row ma-12">
                    <v-btn style="background-color: var(--vt-c-beige);" :elevation="0"><img src="@/assets/images/icons/back.svg"></v-btn>
                    <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold mb-4">Catalogue</h2>
                  </div>
                    <div class="d-flex flex-row ma-12 justify-content-evenly" style="width: 130vh;" >
                        <img src="@/assets/images/books/papernames.webp" width="300" height="420" class="rounded-lg" :elevation="4">
                        <div class="mx-12">
                            <p class="text-h5 font-weight-bold">Paper Names</p>
                            <p class="text-h6 mb-12">Susie Luo</p>
                            <p class="my-12 text-center">
                                An unexpected act of violence brings together a Chinese-American family and a wealthy white lawyer in this propulsive and sweeping story of family, identity and the American experience—for fans of Jean Kwok, Mary Beth Keane and Naima Coster.
                            </p>
                            <p class="my-12">3.7/5</p>
                            <p class="my-12">2023 - Fiction</p>
                        </div>
                    </div>
                    <div>
                        <h3 class="text-h5 mx-12">Reviews</h3>
                    </div>
                    <div class="d-flex flex-row ma-12 justify-content-evenly flex-wrap" style="width: 130vh;">
                        <v-card style="background-color: var(--vt-c-yellow-light); width: 45%;" class="rounded-lg pa-4 ma-4">
                            <div class="d-flex flex-row">
                                <img src="@/assets/images/avatar.svg" width="80" class="mx-4">
                                <div class="d-flex flex-column mt-3">
                                    <p class="text-h6">Username</p>
                                    <p>0 books read</p>
                                </div>
                            </div>
                            <v-card-text class="text-center pt-12 text-body-2" style="color: var(--vt-c-brown-dark);">
                                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                            </v-card-text>
                        </v-card>
                        <v-card style="background-color: var(--vt-c-yellow-light); width: 45%;" class="rounded-lg pa-4 ma-4">
                            <div class="d-flex flex-row">
                                <img src="@/assets/images/avatar.svg" width="80" class="mx-4">
                                <div class="d-flex flex-column mt-3">
                                    <p class="text-h6">Username</p>
                                    <p>0 books read</p>
                                </div>
                            </div>
                            <v-card-text class="text-center pt-12 text-body-2" style="color: var(--vt-c-brown-dark);">
                                Vorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
                            </v-card-text>
                        </v-card>
                    </div>
                </v-container>
            </v-col>
        </v-row>
    </v-container>
  
  
  </template>
  
  <script>
    import NavBar from '../components/Navbar.vue'
  
    export default {
        components: {
            NavBar,
        }
    }
  </script>