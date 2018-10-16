import { NgModule } from '@angular/core';
import { MonacoEditorModule, NgxMonacoEditorConfig } from 'ngx-monaco-editor';

import { ChallengeComponent } from './challenge/challenge.component';
import { SharedModule } from '../shared/shared.module';
import { ChallengeRouter } from './challenge.router';

const monacoConfig: NgxMonacoEditorConfig = {
  baseUrl: 'assets', // configure base path for monaco editor
};
@NgModule({
  imports: [
    ChallengeRouter,
    SharedModule,
    MonacoEditorModule.forRoot(monacoConfig) // use forRoot() in main app module only.
  ],
  exports: [
    SharedModule
  ],
  declarations: [ChallengeComponent]
})
export class ChallengeModule { }
