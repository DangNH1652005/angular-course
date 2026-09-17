import { Routes } from '@angular/router';
import { Dashboard } from './dashboard';
import { DashboardHome } from '../dashboard-home/dashboard-home';
import { Orders } from '../orders/orders';
import { Profile } from '../profile/profile';
import { dashChildGuard } from '../../guards/dash-child-guard';
import { unsavedChangesGuard } from '../../guards/unsaved-changes-guard';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    component: Dashboard,
    canActivateChild: [dashChildGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboardhome',
        pathMatch: 'full',
      },

      {
        path: 'dashboardhome',
        component: DashboardHome,
      },
      {
        path: 'profile',
        component: Profile,
        canDeactivate: [unsavedChangesGuard],
      },
      {
        path: 'settings',
        loadComponent: () => import('../settings/settings').then((c) => c.Settings),
      },
      {
        path: 'orders',
        component: Orders,
      },
    ],
  },
];
