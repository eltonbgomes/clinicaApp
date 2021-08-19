import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private service: PacientesService, 
    private router: Router) {
      this.paciente = new Paciente();
  }

  ngOnInit(): void {
  }

  voltarListagem(){
    this.router.navigate(['pacientes-lista']);
  }

  onSubmit(){
    this.service
      .salvar(this.paciente)
      .subscribe(Response => {
        this.success = true;
        this.errors = []; 
        this.paciente = Response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
        console.log(this.errors);
      })
  };
}
