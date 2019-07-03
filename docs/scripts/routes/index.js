import Vue from 'vue';
import VueRouter from 'vue-router';
// Layouts
import BlankLayout from '@/views/layouts/blank';
// Routes
import demosRoutes from './demos';
// Pages
import Home from '@/views/home';
import NotFound from '@/views/not-found';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/demos',
    name: 'demos',
    redirect: '/demos/simple',
    component: BlankLayout,
    children: demosRoutes
  },
  {
    path: '*',
    component: NotFound
  }
];

const router = new VueRouter({
  routes
});

export default router;
