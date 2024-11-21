import { createRouter, createWebHistory } from 'vue-router';
import SignUp from '@/components/SignUp.vue';
import Login from '@/components/Login.vue';
import SearchPage from '@/components/SearchPage.vue'; // Import the new component

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/search', // Add this route for the Search Page
    name: 'SearchPage',
    component: SearchPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
