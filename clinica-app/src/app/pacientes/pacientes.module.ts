import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesFormComponent } from './pacientes-form/pacientes-form.component';


@NgModule({
  declarations: [
    PacientesFormComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule
  ],
  exports: [
    PacientesFormComponent
  ]
})
export class PacientesModule { }
