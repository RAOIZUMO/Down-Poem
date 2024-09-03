import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'loading',
    pathMatch: 'full',
  },
  {
    path: 'loading',
    loadComponent: () => import('./pages/loading/loading.page').then( m => m.LoadingPage)
  },
  {
    path: 'log-in',
    loadComponent: () => import('./pages/log-in/log-in.page').then( m => m.LogInPage)
  },
];
