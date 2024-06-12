import { defineStore } from 'pinia';
import { login, getAllUsers, deleteUser, toggleState, updateAvatar, getFavourites, addFavourite, removeFavourite, updateFavourites, updateUser } from '../services/auth.service.js'; 

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token') || null,
    isAuthenticated: !!localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')) || null,
    users: [],
    favourites: [],
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
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
      } catch (error) {
        throw error; 
      }
    },
    logout() {
      this.token = null;
      this.isAuthenticated = false;
      this.user = null;
      localStorage.removeItem('token');
      localStorage.removeItem('user');
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
      console.log('Deleting user with ID:', userId);
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
        localStorage.setItem('user', JSON.stringify(this.user));
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
    async updateUser(userData) { 
      try {
        await updateUser(this.user.idUtilizador, this.token, userData);
        this.user.nomeUtilizador = userData.username;
        this.user.emailUtilizador = userData.email;
        this.user.passeUtilizador = userData.password;
      } catch (error) {
        throw new Error('Failed to update user');
      }
    },
    async fetchFavourites(userId) {
      try {
        const response = await getFavourites(userId, this.token);
        this.favourites = response.data;
      } catch (error) {
        throw new Error('Failed to fetch favourites');
      }
    },
    async addFavourite(bookId) {
      try {
        await addFavourite(this.user.idUtilizador, this.token, bookId);
        await this.fetchFavourites(this.user.idUtilizador);
      } catch (error) {
        throw new Error('Failed to add favourite');
      }
    },
    async removeFavourite(bookId) {
      try {
        await removeFavourite(this.user.idUtilizador, this.token, bookId);
        await this.fetchFavourites(this.user.idUtilizador);
      } catch (error) {
        throw new Error('Failed to remove favourite');
      }
    },
    async updateFavourite(oldFavId, newFavId) {
      try {
        await updateFavourites(this.user.idUtilizador, this.token, oldFavId, newFavId);
        await this.fetchFavourites(this.user.idUtilizador);
      } catch (error) {
        throw new Error('Failed to update favourites');
      }
    },
  },
});
