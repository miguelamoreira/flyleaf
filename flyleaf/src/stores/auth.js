import { defineStore } from 'pinia';
import { login, getAllUsers, deleteUser } from '../services/auth.service.js'; 

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    isAuthenticated: false,
    user: null,
    users: [],
  }),
  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
    getUser: (state) => state.user,
    getUsers: (state) => state.users,
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
    async fetchUsers() {
      try {
        const token = this.token;
        const response = await getAllUsers(token);
        this.users = response.data;
      } catch (error) {
        throw new Error('Failed to fetch users');
      }
    },
    async deleteUser(userId) {
      try {
        await deleteUser(userId, this.token);
        await this.fetchUsers();
      } catch (error) {
        throw new Error('Failed to delete user');
      }
    },
  },
});
