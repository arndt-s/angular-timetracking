import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeTrackingComponent } from './time-tracking/time-tracking.component';

const appRoutes: Routes =
  [
    {
      path: 'time',
      component: TimeTrackingComponent
    }
  ];

export const TimeRoutingModule: ModuleWithProviders = RouterModule.forChild(appRoutes);
