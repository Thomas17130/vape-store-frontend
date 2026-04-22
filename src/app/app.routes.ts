import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { Catalog } from './pages/catalog/catalog';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { Admin } from './pages/admin/admin';
import { AdminEditProduct } from './pages/admin-edit-product/admin-edit-product';

export const routes: Routes = [
  // Home
  { path: '', component: Home },

  // Catalogue
  { path: 'catalog', component: Catalog },

  // Auth
  { path: 'login', component: Login },
  { path: 'signup', component: Signup },

  // Admin
  { path: 'admin', component: Admin },
  { path: 'admin/edit/:id', component: AdminEditProduct },

  // Redirection fallback
  { path: '**', redirectTo: '' }
];