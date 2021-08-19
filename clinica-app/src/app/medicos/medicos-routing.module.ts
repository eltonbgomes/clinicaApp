import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicosFormComponent } from "./medicos-form/medicos-form.component"
import { MedicosListaComponent } from './medicos-lista/medicos-lista.component';

const routes: Routes = [
  { path: 'medicos-form', component: MedicosFormComponent },
  { path: 'medicos-form/:id', component: MedicosFormComponent },
  { path: 'medicos-lista', component: MedicosListaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }
