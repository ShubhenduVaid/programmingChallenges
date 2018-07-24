import { NgModule } from '@angular/core';

import { GridComponent } from './grid/grid.component';
import { GridRouter } from './grid.router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    GridRouter
  ],
  declarations: [GridComponent]
})
export class GridModule { }
