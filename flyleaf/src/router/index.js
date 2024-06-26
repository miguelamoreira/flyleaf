import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import DashboardView from '../views/DashboardView.vue'
import CatalogueView from '../views/CatalogueView.vue'
import BookView from '../views/BookView.vue'
import ReadingsView from '@/views/ReadingsView.vue'
import ReadingListsView from '@/views/ReadingListsView.vue'
import ListView from '@/views/ReadingListView.vue'
import UserBookRequestsView from '@/views/UserBookRequestsView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SettingsView from '@/views/SettingsView.vue'
import AdminBookRequestsView from '@/views/AdminBookRequestsView.vue'
import UsersView from '@/views/UsersView.vue'
import AddReadingListView from '@/views/AddReadingListView.vue'
import EditReadingListView from '@/views/EditReadingListView.vue'
import UserReadingListsView from '@/views/UserReadingListsView.vue'
import NotificationsView from '@/views/NotificationsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/catalogue',
      name: 'catalogue',
      component: CatalogueView
    },
    {
      path: '/catalogue/:bookId',
      name: 'book',
      component: BookView
    },
    {
      path: '/myreadings',
      name: 'myreadings',
      component: ReadingsView
    },
    {
      path: '/myreadinglists',
      name: 'myreadinglists',
      component: UserReadingListsView
    },
    ,
    {
      path: '/readinglists',
      name: 'readinglists',
      component: ReadingListsView
    },
    {
      path: '/readinglists/:readingListId',
      name: 'list',
      component: ListView
    },
    {
      path: '/mybookrequests',
      name: 'mybookrequests',
      component: UserBookRequestsView
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
    {
      path: '/bookrequests',
      name: 'bookrequests',
      component: AdminBookRequestsView
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView
    },
    {
      path: '/newreadinglist',
      name: 'newreadinglist',
      component: AddReadingListView
    },
    {
      path: '/readinglists/:readingListId/edit',
      name: 'editlist',
      component: EditReadingListView
    },
    {
      path: '/notifications',
      name: 'notifications',
      component: NotificationsView
    }
  ]
})

export default router
