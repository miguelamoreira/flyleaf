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
    <v-container fluid class="fill-height justify-center" style="background-color: var(--vt-c-beige);">
      <v-row justify="center">
        <v-col cols="12" sm="10" lg="12">
          <v-card class="pa-6 pt-8 rounded-lg" elevation="4" style="z-index: 1; background-color: var(--vt-c-brown-light); width: 450px; color: var(--vt-c-brown-dark);">
            <v-card-title class="text-center card-title" style="font-family: Aleo, serif; font-size: 4vh;">
              SIGN UP
            </v-card-title>
            <v-card-text>
              <v-form class="mt-6" @submit.prevent="signup">
                <v-text-field id="usernameSignup" label="Username" v-model="username" class="rounded-lg mb-4" style="background-color: var(--vt-c-beige);" hide-details></v-text-field>
                <v-text-field id="emailSignup" label="E-mail" v-model="email" type="email" class="rounded-lg mb-4" style="background-color: var(--vt-c-beige);" hide-details></v-text-field>
                <v-text-field id="passwordSignup" label="Password" v-model="password" type="password" class="rounded-lg mb-4" style="background-color: var(--vt-c-beige);" hide-details></v-text-field>
                <v-text-field id="confirmSignup" label="Confirm your password" v-model="confirmPassword" type="password" class="rounded-lg mb-8" style="background-color: var(--vt-c-beige);" hide-details></v-text-field>
                <v-btn id="btnRegister" type="submit" block class="mt-4" style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);">
                  Register
                </v-btn>
              </v-form>
              <p class="text-center pt-8">Don’t have an account yet? <router-link style="color: var(--vt-c-green-light);" :to="{ name: 'login' }">Click here</router-link></p>
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
import { signup } from '../services/auth.service.js';
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      modalConfirm: false,
      modalText: ''
    }
  },
  methods: {
    async signup() {
      if (this.password !== this.confirmPassword) {
        console.log('The passwords must match!');
        return;
      }

      try {
        await signup(this.username, this.email, this.password);

        this.modalConfirm = true;
        this.modalText = 'Account created successfully'
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.$router.push({ name: 'login' });
      } catch (error) {
        this.modalConfirm = true;
        this.modalText = 'Error while signup in'
        console.error('Signup failed:', error.message);
      }
    }
  }
}
</script>