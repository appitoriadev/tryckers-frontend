
import { Routes } from '@angular/router';
import { TryckersPageLayoutComponent } from './layouts/tryckers-page-layout/tryckers-page-layout.component';
import TryckersPageComponent from './pages/tryckers-page/tryckers-page.component';

export const tryckersPage:Routes= [
  {
    path: '',
    component: TryckersPageLayoutComponent,
    children: [
    {
      path: 'home',
      component: TryckersPageComponent,
    },
    {
      path: '**',
      redirectTo: 'home'
    }
    ]
  }
]

export default tryckersPage;