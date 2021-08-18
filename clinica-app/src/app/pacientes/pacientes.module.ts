import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesFormComponent } from './pacientes-form/pacientes-form.component';


@NgModule({
  declarations: [
    PacientesFormComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    FormsModule
  ],
  exports: [
    PacientesFormComponent
  ]
})
export class PacientesModule { }
