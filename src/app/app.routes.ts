import { Component } from '@angular/core';
import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '**',
    loadComponent: () => import('./pages/tryckers-page/tryckers-page.component'),
  }
];
