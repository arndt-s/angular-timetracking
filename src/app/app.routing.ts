import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const appRoutes: Routes =
[
  {
    path: 'time',
    loadChildren: './time/time.module#TimeModule',
  },
  {
    path: '',
    redirectTo: 'time',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'time'
  }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes);
