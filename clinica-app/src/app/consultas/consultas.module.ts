import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasFormComponent } from './consultas-form/consultas-form.component';
import { ConsultasListaComponent } from './consultas-lista/consultas-lista.component';


@NgModule({
  declarations: [
    ConsultasFormComponent,
    ConsultasListaComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    FormsModule
  ],
  exports: [
    ConsultasFormComponent,
    ConsultasListaComponent
  ]
})
export class ConsultasModule { }
