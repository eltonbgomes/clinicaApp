import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

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
  id!: number;

  constructor(
    private service: PacientesService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.paciente = new Paciente();
  }

  ngOnInit(): void {
    let params : Params = this.activatedRoute.params;
    if(params.value.id){
      this.id = params.value.id;
      this.service
        .getPacienteById(this.id)
        .subscribe(
          response => this.paciente = response,
          errorResponse => this.paciente = new Paciente()
        )
    }
  }

  voltarListagem(){
    this.router.navigate(['pacientes-lista']);
  }

  onSubmit(){
    if(this.id){
      this.service
      .atualizar(this.paciente)
      .subscribe(Response => {
        this.success = true;
        this.errors = []; 
      }, errorResponse => {
        this.success = false;
        this.errors = ["Erro ao atualizar"];
      })
    }else{
      this.service
      .salvar(this.paciente)
      .subscribe(Response => {
        this.success = true;
        this.errors = []; 
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
    }
  }
}
