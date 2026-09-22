import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { ProductDetails } from './pages/product-details/product-details';
import { dashboardMatchGuard } from './guards/dashboard-match-guard';
import { Sinal } from './pages/sinal/sinal';
import { Parent } from './pages/parent/parent';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full',
  },
  {
    path: 'pages/parent',
    component: Parent,
  },
  {
    path: 'pages/signal',
    component: Sinal,
  },
  {
    path: 'pages/home',
    component: Home,
  },
  {
    path: 'pages/about',
    component: About,
  },
  {
    path: 'pages/contact',
    component: Contact,
  },
  {
    path: 'pages/products',
    loadComponent: () => import('./pages/products/products').then((c) => c.Products),
  },
  {
    path: 'pages/product-details/:id',
    component: ProductDetails,
  },
  {
    path: 'pages/login',
    component: Login,
  },
  {
    path: 'pages/register',
    component: Register,
  },
  {
    path: 'pages/dashboard',
    // canActivate: [authGuard],
    canMatch: [dashboardMatchGuard],
    loadChildren: () =>
      import('./pages/dashboard/dashboard.routes').then((r) => r.DASHBOARD_ROUTES),
  },
  {
    path: '**',
    component: PageNotFound,
  },
];
