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
      <v-container fluid class="fill-height fill-width justify-center" style="background-color: var(--vt-c-beige)">
        <v-row justify="center" class="justify-center">
          <v-col cols="12">
        <v-card class="pa-6 pt-8 rounded-lg" elevation="4" style="z-index: 1; background-color: var(--vt-c-brown-light); width: 90vh;">
          <v-card-title class="text-center card-title" style="font-family: Aleo, serif; font-size: 4vh;">
            SIGN UP
          </v-card-title>
          <v-card-text>
            <v-form class="mt-6">
              <v-row>
                <v-col cols="6">
                  <v-text-field label="Username"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Password" type="password"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Password" class="password"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field label="Confirm your password" type="password"></v-text-field>
                </v-col>
                <v-col cols="4" class="text-center mx-auto">
                  <v-btn type="submit" block class="mt-4" text="Login" style="background-color: var(--vt-c-green-light); color: var(--vt-c-green-dark);"></v-btn>
                </v-col>
              </v-row>
            </v-form>
            <p class="text-center pt-8">Don’t have an account yet? <routerLink style="color: var(--vt-c-green-light);" :to="{ name: 'login' }">Click here</routerLink></p>
          </v-card-text>
        </v-card>
        </v-col>
        </v-row>
      </v-container>
    </v-app>
</template>
  