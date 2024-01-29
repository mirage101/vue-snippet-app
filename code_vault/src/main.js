import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

//import { createPinia } from 'pinia'; // Import Pinia for state management
import axios from 'axios';

import Home from './components/Home.vue';
import Create from './components/Create.vue';
import Index from './components/Index.vue';
import Edit from './components/Edit.vue';
import View from './components/View.vue';

const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
  },
  {
    name: 'create',
    path: '/create',
    component: Create,
  },
  {
    name: 'snippets',
    path: '/snippets',
    component: Index,
  },
  {
    name: 'edit',
    path: '/edit/:id',
    component: Edit,
  },
  {
    name: 'view',
    path: '/view/:id',
    component: View,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
//app.use(createPinia()); // Use Pinia for state management
app.config.globalProperties.axios = axios; // Make axios available globally

app.mount('#app');
