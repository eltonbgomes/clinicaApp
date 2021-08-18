import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MedicosRoutingModule } from './medicos-routing.module';
import { MedicosFormComponent } from './medicos-form/medicos-form.component';


@NgModule({
  declarations: [
    MedicosFormComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    FormsModule
  ],
  exports: [
    MedicosFormComponent
  ]
})
export class MedicosModule { }
