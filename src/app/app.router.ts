import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomPreloadingStrategy } from './app.preloadStrategy';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'grid',
    pathMatch: 'full'
  },
  {
    path: 'challenge/:id',
    loadChildren: './../app/challenge/challenge.module#ChallengeModule',
    data: { preload: true }
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      APP_ROUTES,
      {
        enableTracing: false,
        useHash: true,
        preloadingStrategy: CustomPreloadingStrategy,
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [CustomPreloadingStrategy]
})

export class AppRoutingModule { }