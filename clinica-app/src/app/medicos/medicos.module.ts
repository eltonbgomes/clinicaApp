import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedicosRoutingModule } from './medicos-routing.module';
import { MedicosFormComponent } from './medicos-form/medicos-form.component';


@NgModule({
  declarations: [
    MedicosFormComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule
  ],
  exports: [
    MedicosFormComponent
  ]
})
export class MedicosModule { }
