import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'grid',
    pathMatch: 'full'
  },
  {
    path: 'challenge',
    loadChildren: './../app/challenge/challenge.module#ChallengeModule',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      APP_ROUTES,
      {
        enableTracing: false
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule { }
