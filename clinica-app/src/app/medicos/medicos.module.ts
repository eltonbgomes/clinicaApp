import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MedicosRoutingModule } from './medicos-routing.module';
import { MedicosFormComponent } from './medicos-form/medicos-form.component';
import { MedicosListaComponent } from './medicos-lista/medicos-lista.component';


@NgModule({
  declarations: [
    MedicosFormComponent,
    MedicosListaComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    FormsModule
  ],
  exports: [
    MedicosFormComponent,
    MedicosListaComponent
  ]
})
export class MedicosModule { }
