import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedicosFormComponent } from "./medicos-form/medicos-form.component"

const routes: Routes = [
  { path : 'medicos-form', component: MedicosFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }
