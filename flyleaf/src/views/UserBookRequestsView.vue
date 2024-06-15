<template>
  <v-container fluid>
    <v-row>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <v-col cols="10">
        <v-container fluid>
          <v-row>
            <v-col cols="12" class="mx-12 mt-10 mx-lg-14 mx-xl-16">
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">My book requests</h2>
            </v-col>
          </v-row>
          <v-row v-for="(row, rowIndex) in Math.ceil((filteredRequests.length + 1) / 4)" :key="rowIndex" justify="center">
            <v-col v-for="i in 4" :key="i" cols="12" sm="6" md="3">
              <div class="book mx-12 my-6 mx-lg-14 my-lg-8" style="position: relative;"> 
                <div v-if="((rowIndex * 4) + (i - 1)) < filteredRequests.length">
                  <v-card :elevation="4" class="rounded-lg" height="320" style="width: 25vh; height: 40vh;">
                    <img :src="`${filteredRequests[(rowIndex * 4) + (i - 1)].capaLivroPedido}`" style="width: 25vh; height: 40vh;">
                  </v-card>
                </div>
                <div v-if="((rowIndex * 4) + (i - 1)) < filteredRequests.length" style="position: absolute; bottom: -55px; left: 0; right: 0;" class="d-flex align-center justify-content-between">
                  <div>
                    <p class="font-weight-bold mt-2">{{ filteredRequests[(rowIndex * 4) + (i - 1)].nomeLivroPedido }}</p>
                    <p>{{ filteredRequests[(rowIndex * 4) + (i - 1)]['autors.nomeAutor'] }}</p>
                  </div>
                  <div style="background-color: var(--vt-c-beige); position: absolute; left: 20vh; top: 2vh" >
                    <img v-if="filteredRequests[(rowIndex * 4) + (i - 1)].estadoPedido == 'accepted'" src="@/assets/images/icons/arrow.svg">
                    <img v-if="filteredRequests[(rowIndex * 4) + (i - 1)].estadoPedido == 'validating'" src="@/assets/images/icons/pending.svg">
                    <img v-if="filteredRequests[(rowIndex * 4) + (i - 1)].estadoPedido == 'denied'" src="@/assets/images/icons/denied.svg">
                  </div>
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
    import { useAuthStore } from '../stores/auth.js';
    import { useRequestStore } from '../stores/requests.js';
    
    export default {
      components: {
        Sidebar, Navbar,
      },
      data() {
        return {
          authStore: useAuthStore(),
          requestStore: useRequestStore(),
        }
      },
      computed: {
        user() {
          return this.authStore.getUser;
        },
        requests() {
          const idUtilizador = this.user ? this.user.idUtilizador : null;
          return idUtilizador ? this.requestStore.getRequests.filter(request => request.idUtilizador === idUtilizador) : [];
        },
        filteredRequests() {
          const uniqueRequests = new Set();
          return this.requests.filter(request => !uniqueRequests.has(request.idPedido) && uniqueRequests.add(request.idPedido));
        }
      }
    }
</script>
    