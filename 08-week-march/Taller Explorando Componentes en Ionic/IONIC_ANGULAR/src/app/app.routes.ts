import { Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { ProductsPage } from './products/products.page';
import { ContactPage } from './contact/contact.page';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'products',
    component: ProductsPage,
  },
  {
    path: 'contact',
    component: ContactPage,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];