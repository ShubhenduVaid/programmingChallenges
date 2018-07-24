import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button'
/**
 *
 * @export
 * @class MaterialModule
 */
@NgModule({
  exports: [
    MatTableModule,
    MatButtonModule
  ]
})

export class MaterialModule { }
