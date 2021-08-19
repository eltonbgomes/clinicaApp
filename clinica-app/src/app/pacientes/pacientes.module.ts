import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { PacientesFormComponent } from './pacientes-form/pacientes-form.component';
import { PacientesListaComponent } from './pacientes-lista/pacientes-lista.component';


@NgModule({
  declarations: [
    PacientesFormComponent,
    PacientesListaComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    FormsModule
  ],
  exports: [
    PacientesFormComponent,
    PacientesListaComponent
  ]
})
export class PacientesModule { }
