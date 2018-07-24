import { NgModule } from '@angular/core';
import { CodemirrorModule } from '../../../node_modules/@nomadreservations/ngx-codemirror';

import { ChallengeComponent } from './challenge/challenge.component';
import { SharedModule } from '../shared/shared.module';
import { ChallengeRouter } from './challenge.router';


@NgModule({
  imports: [
    ChallengeRouter,
    SharedModule,
    CodemirrorModule
  ],
  exports: [
    SharedModule
  ],
  declarations: [ChallengeComponent]
})
export class ChallengeModule { }
