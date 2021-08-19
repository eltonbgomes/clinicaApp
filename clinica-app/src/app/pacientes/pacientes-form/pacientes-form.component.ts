import { Component, OnInit } from '@angular/core';

import { Paciente } from '../paciente';
import { PacientesService } from '../../pacientes.service';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html',
  styleUrls: ['./pacientes-form.component.css']
})
export class PacientesFormComponent implements OnInit {

  paciente: Paciente;
  success: boolean = false;
  errors!: String[];

  constructor(private service: PacientesService) {
    this.paciente = new Paciente();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service
      .salvar(this.paciente)
      .subscribe(Response => {
        this.success = true;
        this.errors = []; 
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
        console.log(this.errors);
      })
  };
}
