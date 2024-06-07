<template>
  <v-container fluid>
    <v-row>
      <Sidebar></Sidebar>
      <Navbar></Navbar>
      <v-col cols="10">
        <v-container fluid>
          <v-row>
            <v-col cols="12" class="mx-12 mt-10 mx-lg-14 mx-xl-16">
              <h2 style="font-family: Aleo, serif;" class="text-h4 font-weight-bold">Book requests</h2>
            </v-col>
          </v-row>
          <v-row v-for="(request, index) in filteredRequests" :key="request.nomePedidoLivro" justify="center" class="px-10 mt-10">
            <v-col>
              <div class="requests" style="position: relative; width: 130vh;">
                <div class="d-flex flex-row mx-4 mb-10 flex-nowrap align-items-start">
                  <img :src="`data:image/jpg;base64,${request.capaLivroPedido}`" width="200" height="310" class="rounded-lg" :elevation="4">
                  <div class="mx-lg-12">
                    <div class="d-flex flex-row align-center">
                      <p class="text-h6 font-weight-bold">{{ request.nomeLivroPedido }}</p>
                    </div>
                    <p class="font-weight-bold">{{ request['autors.nomeAutor']  }}</p>
                    <p class="text-center mt-5">{{ request.descricaoLivroPedido }}</p>
                    <p class="text-body-2 text-center mt-5">{{ request.anoLivroPedido }} - {{ request['categoria.nomeCategoria']  }}</p>
                  </div>
                </div>
                <div class="d-flex mt-16" style="position: absolute; bottom: 0; left: 30vh; right: 0;">
                  <v-btn @click="acceptRequest(request.idPedido)" :elevation="0" style="background-color: var(--vt-c-beige);" class="mx-2"><img src="@/assets/images/icons/arrow.svg"></v-btn>
                  <v-btn @click="denyRequest(request.idPedido)" :elevation="0" style="background-color: var(--vt-c-beige);"><img src="@/assets/images/icons/delete.svg"></v-btn>
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
  import { useRequestStore } from '../stores/requests.js';
      
  export default {
    components: {
      Sidebar, Navbar,
    },
    data() {
      return {
        requestStore: useRequestStore(),
      }
    },
    computed: {
      requests() {
        return this.requestStore.getRequests.filter(request => request.estadoPedido === "validating");
      },
      filteredRequests() {
        const uniqueRequests = new Set();
        return this.requests.filter(request => !uniqueRequests.has(request.idPedido) && uniqueRequests.add(request.idPedido));
      }
    },
    mounted() {
      this.requestStore.fetchRequests();
    },
    methods: {
      async acceptRequest(requestId) {
        try {
          await this.requestStore.updateRequest(requestId, { estadoPedido: 'accepted' });

          await this.requestStore.fetchRequests(); 
        } catch (error) {
          console.error(error);
        }
      },
      async denyRequest(requestId) {
        try {
          await this.requestStore.updateRequest(requestId, { estadoPedido: 'denied' });

          await this.requestStore.fetchRequests();
        } catch (error) {
          console.error(error);
        }
      },
    }
  }
</script>
      