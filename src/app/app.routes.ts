import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/auth/login/login'),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/tryckers-page/tryckers-page.component'),
  },
];
