import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Products } from './pages/products/products';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { ProductDetails } from './pages/product-details/product-details';
import { Dashboard } from './pages/dashboard/dashboard';
import { DashboardHome } from './pages/dashboard-home/dashboard-home';
import { Profile } from './pages/profile/profile';
import { Settings } from './pages/settings/settings';
import { Orders } from './pages/orders/orders';
import { authGuard } from './guards/auth-guard';
import { dashboardMatchGuard } from './guards/dashboard-match-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'pages/login',
    pathMatch: 'full',
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
