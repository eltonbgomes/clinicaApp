import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { ConsultasRoutingModule } from './consultas-routing.module';
import { ConsultasFormComponent } from './consultas-form/consultas-form.component';


@NgModule({
  declarations: [
    ConsultasFormComponent
  ],
  imports: [
    CommonModule,
    ConsultasRoutingModule,
    FormsModule
  ],
  exports: [
    ConsultasFormComponent
  ]
})
export class ConsultasModule { }
