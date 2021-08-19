import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Medico } from '../medico';
import { MedicosService } from '../../medicos.service';

@Component({
  selector: 'app-medicos-form',
  templateUrl: './medicos-form.component.html',
  styleUrls: ['./medicos-form.component.css']
})
export class MedicosFormComponent implements OnInit {

  medico: Medico;
  success: boolean = false;
  errors!: String[];
  id!: number;

  constructor(
    private service: MedicosService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      this.medico = new Medico();
  }

  ngOnInit(): void {
    let params : Params = this.activatedRoute.params;
    if(params.value.id){
      this.id = params.value.id;
      this.service
        .getMedicoById(this.id)
        .subscribe(
          response => this.medico = response,
          errorResponse => this.medico = new Medico()
        )
    }
  }

  voltarListagem(){
    this.router.navigate(['medicos-lista']);
  }

  onSubmit(){
    if(this.id){
      this.service
      .atualizar(this.medico)
      .subscribe(Response => {
        this.success = true;
        this.errors = []; 
      }, errorResponse => {
        this.success = false;
        this.errors = ["Erro ao atualizar"];
      })
    }else{
      this.service
      .salvar(this.medico)
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
