import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { MedicosService } from '../../medicos.service';
import { PacientesService } from '../../pacientes.service';
import { Medico } from '../../medicos/medico';
import { Paciente } from '../../pacientes/paciente';

import { Consulta } from '../consulta';
import { ConsultasService } from 'src/app/consultas.service';

@Component({
  selector: 'app-consultas-form',
  templateUrl: './consultas-form.component.html',
  styleUrls: ['./consultas-form.component.css']
})
export class ConsultasFormComponent implements OnInit {

  consulta: Consulta;
  pacientes: Paciente[] = [];
  medicos: Medico[] = [];
  success: boolean = false;
  errors!: String[];
  id!: number;

  constructor(
    private service: ConsultasService, 
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private pacienteService: PacientesService,
    private medicoService: MedicosService) {
      this.consulta = new Consulta(); 
  }

  ngOnInit(): void {
    this.pacienteService
      .getPacientes()
      .subscribe(response => this.pacientes = response);

    this.medicoService
      .getMedicos()
      .subscribe(response => this.medicos = response);

    let params : Params = this.activatedRoute.params;
    if(params.value.id){
      this.id = params.value.id;
      this.service
        .getConsultaById(this.id)
        .subscribe(
          response => this.consulta = response,
          errorResponse => this.consulta = new Consulta()
        )
    }
  }

  voltarListagem(){
    this.router.navigate(['consultas-lista']);
  }

  onSubmit(){
    if(this.id){
      this.service
      .atualizar(this.consulta)
      .subscribe(Response => {
        this.success = true;
        this.errors = []; 
      }, errorResponse => {
        this.success = false;
        this.errors = ["Erro ao atualizar"];
      })
    }else{
      this.service
      .salvar(this.consulta)
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
