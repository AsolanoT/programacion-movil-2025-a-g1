import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ProductsPage from '@/views/ProductsPage.vue';
import ContactPage from '@/views/ContactPage.vue'; // ✅ Verifica la importación

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/home' },
  { path: '/home', name: 'Home', component: HomePage },
  { path: '/products', name: 'Products', component: ProductsPage },
  { path: '/contact', name: 'Contact', component: ContactPage }, // ✅ Asegúrate de que esta línea existe
];

const router = createRouter({
  history: createWebHistory(), // ✅ Sin parámetros adicionales
  routes,
});

export default router;
