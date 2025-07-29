import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import Login from './pages/auth/login/login';

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
    path: '',
    component: LayoutComponent,
  },
  {
    path: 'auth',
    component: LayoutComponent,
    children: [
      {
        path: 'login',
        component: Login,
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/tryckers-page/tryckers-page.component'),
  },
];
