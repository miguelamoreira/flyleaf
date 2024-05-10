import { defineStore } from 'pinia';
import { login } from '../services/auth.service.js'; 

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    isAuthenticated: false,
    user: null,
  }),
  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
    getUser: (state) => state.user,
  },
  actions: {
    async login({ email, password }) {
      try {
        const { token, user } = await login(email, password);
        this.token = token;
        this.isAuthenticated = true;
        this.user = user;
      } catch (error) {
        throw error; 
      }
    },
    logout() {
      this.token = null;
      this.isAuthenticated = false;
      this.user = null;
    },
  },
});
