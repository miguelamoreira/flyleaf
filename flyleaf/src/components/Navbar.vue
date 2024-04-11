<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer floating permanent style="background-color: var(--vt-c-brown-light);" :elevation="4" width="300">
          <img src="@/assets/images/logo.svg" width="150" height="100" contain class="mx-4">
          <div class="ma-4 d-flex flex-row">
            <img src="@/assets/images/avatar.svg" width="100" height="100">
            <div class="d-flex flex-column ma-4">
              <span class="font-weight-bold">Username</span>
              <span>0 books read</span>
            </div>
          </div>
          <v-list density="compact" nav>
            <v-list-item title="Homepage" value="homepage"></v-list-item>
            <v-list-item title="Catalogue" value="catalogue"></v-list-item>
            <v-list-item title="Profile" value="profile"></v-list-item>
            <v-list-item title="My readings" value="readings"></v-list-item>
            <v-list-item title="My reading lists" value="readinglists"></v-list-item>
            <v-list-item title="My book requests" value="bookrequests"></v-list-item>
            <v-list-item title="Settings" value="settings"></v-list-item>
          </v-list>
          <hr class="ma-4">
          <p class="ma-4">Options</p>
          <div class="d-flex flex-column">
            <v-btn style="background-color: var(--vt-c-brown-dark); color: var(--vt-c-brown-light);" class="ma-4">
              <img src="@/assets/images/icons/add.svg" class="mr-4">
              <span class="font-weight-bold">New reading</span>
            </v-btn>
            <v-btn style="background-color: var(--vt-c-brown-dark); color: var(--vt-c-brown-light);" class="ma-4">
              <img src="@/assets/images/icons/add.svg" class="mr-4">
              <span class="font-weight-bold">New reading list</span>
            </v-btn>
            <v-btn style="background-color: var(--vt-c-brown-dark); color: var(--vt-c-brown-light);" class="ma-4">
              <img src="@/assets/images/icons/add.svg" class="mr-4">
              <span class="font-weight-bold">New book request</span>
            </v-btn>
          </div>
        </v-navigation-drawer>
      </v-layout>
    </v-card>
</template>