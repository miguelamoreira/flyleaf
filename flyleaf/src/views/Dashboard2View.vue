<template>
    <v-container fluid>
        <v-row>
            <v-col cols="1">
                <NavBar></NavBar>
            </v-col>
            <v-col cols="11" class="full-width">
                <v-container fluid>
                    <v-btn :elevation="0" style="background-color: var(--vt-c-beige); position: absolute; right: 5vh" :to="{name: 'home'}"><img src="@/assets/images/icons/logout.svg"></v-btn>
                </v-container>
                <v-container fluid>
                    <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold mb-4">Book requests</h2>
                    <div class="d-flex flex-row justify-content-evenly">
                        <div class="book mr-12">
                            <v-card :elevation="4" style="width: 200px; height: 320px;" class="rounded-lg">
                                <img src="@/assets/images/books/papernames.webp" width="200" height="320">
                            </v-card>
                            <p class="font-weight-bold mt-2">Paper Names</p>
                            <p>Susie Luo</p>
                            <div style="position: relative; bottom: 12vh" class="text-center">
                                <v-btn :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0"><img src="@/assets/images/icons/arrow.svg" width="30" height="30"></v-btn>
                                <v-btn :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0"><img src="@/assets/images/icons/delete.svg" width="30" height="30"></v-btn>
                            </div>
                        </div>
                        <div class="book mr-12">
                            <v-card :elevation="4" style="width: 200px; height: 320px;" class="rounded-lg">
                                <img src="@/assets/images/books/abreathoflife.webp" width="200" height="320">
                            </v-card>
                            <p class="font-weight-bold mt-2">A Breath of Life</p>
                            <p>Clarice Lispector</p>
                            <div style="position: relative; bottom: 12vh" class="text-center">
                                <v-btn :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0"><img src="@/assets/images/icons/arrow.svg" width="30" height="30"></v-btn>
                                <v-btn :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0"><img src="@/assets/images/icons/delete.svg" width="30" height="30"></v-btn>
                            </div>
                        </div>
                        <div class="book mr-12">
                            <v-card :elevation="4" style="width: 200px; height: 320px;" class="rounded-lg">
                                <img src="@/assets/images/books/poordeer.webp" width="200" height="320">
                            </v-card>
                            <p class="font-weight-bold mt-2">Poor Deer</p>
                            <p>Claire Oshetsky</p>
                            <div style="position: relative; bottom: 12vh" class="text-center">
                                <v-btn :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0"><img src="@/assets/images/icons/arrow.svg" width="30" height="30"></v-btn>
                                <v-btn :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0"><img src="@/assets/images/icons/delete.svg" width="30" height="30"></v-btn>
                            </div>
                        </div>
                        <div class="book mr-12 text-center">
                            <v-card :elevation="4" style="width: 200px; height: 320px;" class="rounded-lg">
                                <img src="@/assets/images/books/normalpeople.jpeg" width="200" height="320" style="filter: blur(2px);">
                            </v-card>
                            <v-btn :elevation="0" style="background-color: var(--vt-c-yellow-light); width: 75px; height: 75px; position: relative; bottom: 25vh" class="rounded-circle">
                                <img src="@/assets/images/icons/more.svg">
                            </v-btn>
                        </div>
                    </div>
                </v-container>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="1"></v-col>
            <v-col cols="11">
                <v-container fluid>
                    <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold mt-8 mb-4">Users</h2>
                    <div class="d-flex flex-row justify-content-evenly">
                        <div class="book mr-12">
                            <v-card :elevation="0" style="width: 200px; height: 320px; background-color: var(--vt-c-beige);" class="rounded-lg">
                                <img src="@/assets/images/avatar.svg" width="200" height="320">
                            </v-card>
                            <p class="font-weight-bold mt-2">Username</p>
                            <p>0 books read</p>
                            <div style="position: relative; bottom: 12vh" class="text-center">
                                <v-btn :elevation="0" class="rounded-ts-lg rounded-bs-lg rounded-0"><img src="@/assets/images/icons/block.svg" width="30" height="30"></v-btn>
                                <v-btn :elevation="0" class="rounded-te-lg rounded-be-lg rounded-0"><img src="@/assets/images/icons/delete.svg" width="30" height="30"></v-btn>
                            </div>
                        </div>
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