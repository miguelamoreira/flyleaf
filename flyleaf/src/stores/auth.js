import { defineStore } from 'pinia';
import { login, getAllUsers, deleteUser, toggleState, updateAvatar, getFavourites, addFavourite } from '../services/auth.service.js'; 

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    isAuthenticated: false,
    user: null,
    users: [],
    favourite: [],
  }),
  getters: {
    isLoggedIn: (state) => state.isAuthenticated,
    getUser: (state) => state.user,
    getUsers: (state) => state.users,
    getFavourites: (state) => state.favourites
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
        const response = await getAllUsers(this.token);
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
    async updateUserState(userId, stateData) {
      try {
        await toggleState(userId, this.token, stateData);
        await this.fetchUsers();
      } catch (error) {
        throw new Error('Failed to update state')
      }
    },
    async updateAvatar(userId, avatarData) {
      try {
        await updateAvatar(userId, this.token, avatarData);
        await this.fetchUsers();
      } catch (error) {
        throw new Error('Failed to update avatar');
      }
    },
    async fetchFavourites(userId) {
      try {
        const response = await getFavourites(userId, this.token);
        this.favourites = response.data;
      } catch (error) {
        throw new Error('Failed to fetch favorites');
      }
    },
    async addFavourite(bookId) {
      try {
        await addFavourite(this.user.idUtilizador, this.token, bookId);
        await this.fetchFavourites(this.user.idUtilizador);
      } catch (error) {
        throw new Error('Failed to add favorite');
      }
    },
  },
});
