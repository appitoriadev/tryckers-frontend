import { Routes } from '@angular/router';

export const routes: Routes = [
  // {
  //   path: '',
  //   // redirectTo: '/login',
  //   pathMatch: 'full',
  //   loadComponent() {
  //     return import('./pages/auth/login/login');
  //   },
  // },
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
