<template>
  <v-app>
    <v-container fluid>
      <v-app-bar app dense :elevation="0" class="pa-2" style="background-color: var(--vt-c-beige)">
        <router-link :to="{ name: 'home' }">
            <img src="@/assets/images/logo.svg" width="150" height="100" contain class="mx-4">
        </router-link>
        <v-app-bar-title class="ml-auto" grow></v-app-bar-title>
        <v-btn style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);" :to="{ name: 'login' }">Login</v-btn>
        <v-btn style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);" class="mx-4" :to="{ name: 'signup' }">Signup</v-btn>
      </v-app-bar>
    </v-container>
    <v-container fluid class="fill-height justify-center" style="background-color: var(--vt-c-beige)">
      <v-row justify="center">
        <v-col cols="12" sm="10" lg="12">
          <v-card class="pa-6 pt-8 rounded-lg" elevation="4" style="z-index: 1; background-color: var(--vt-c-brown-light); width: 450px; color: var(--vt-c-brown-dark);">
            <v-card-title class="text-center card-title" style="font-family: Aleo, serif; font-size: 4vh;">
              SIGN IN
            </v-card-title>
            <v-card-text>
              <v-form class="mt-6" @submit.prevent="login">
                <v-text-field id="emailLogin" label="E-mail" v-model="email" class="rounded-lg" style="background-color: var(--vt-c-beige);" hide-details></v-text-field>
                <v-text-field id="passwordLogin" label="Password" type="password" class="mt-4 mb-8 rounded-lg" v-model="password" style="background-color: var(--vt-c-beige);" hide-details></v-text-field>
                <v-btn id="btnLogin" type="submit" block class="mt-4" style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);">
                  Login
                </v-btn>
              </v-form>
              <p class="text-center pt-8">Have an account already? <router-link style="color: var(--vt-c-green-light);" :to="{ name: 'signup' }">Click here</router-link></p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>

  <v-snackbar v-model="modalConfirm" color="brown-darken-1">
      {{ modalText }}
    <template v-slot:actions>
      <v-btn  variant="text" @click="modalConfirm = false">Close</v-btn>
    </template>
  </v-snackbar>

</template>

<script>
import { login } from '../services/auth.service.js';
import { useAuthStore } from '../stores/auth.js';

export default {
  data() {
    return {
      email: '',
      password: '',
      authStore: useAuthStore(),
      modalConfirm: false,
      modalText: ''
    }
  },
  methods: {
    async login() {
      try {
        await this.authStore.login({ email: this.email, password: this.password });

        this.$router.push({ name: 'dashboard' });
      } catch (error) {
        this.modalConfirm = true;
        this.modalText = 'Error while signing in'
        console.error('Login failed:', error);
      }
    }
  }
}
</script>