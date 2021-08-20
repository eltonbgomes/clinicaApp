import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultasFormComponent } from './consultas-form/consultas-form.component'
import { ConsultasListaComponent } from './consultas-lista/consultas-lista.component';

const routes: Routes = [
  { path: 'consultas-form', component: ConsultasFormComponent},
  { path: 'consultas-form/:id', component: ConsultasFormComponent},
  { path: 'consultas-lista', component: ConsultasListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultasRoutingModule { }
