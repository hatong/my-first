import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/home.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  /*{ path: '/lists', component: Lists },
  { path: '/option', component: Option },
  { path: '/detail', component: Detail },*/
];

const router = new VueRouter({routes});

export default router;
