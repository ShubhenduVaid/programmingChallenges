import { NgModule } from '@angular/core';
import { MonacoEditorModule } from 'ngx-monaco-editor';

import { ChallengeComponent } from './challenge/challenge.component';
import { SharedModule } from '../shared/shared.module';
import { ChallengeRouter } from './challenge.router';

@NgModule({
  imports: [
    ChallengeRouter,
    SharedModule,
    MonacoEditorModule.forRoot() // use forRoot() in main app module only.
  ],
  exports: [
    SharedModule
  ],
  declarations: [ChallengeComponent]
})
export class ChallengeModule { }
