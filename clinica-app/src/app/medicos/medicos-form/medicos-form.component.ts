import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(
    private service: MedicosService,
    private router: Router) { 
      this.medico = new Medico();
  }

  ngOnInit(): void {
  }

  voltarListagem(){
    this.router.navigate(['medicos-lista']);
  }

  onSubmit(){
    this.service
      .salvar(this.medico)
      .subscribe(Response => {
        this.success = true;
        this.errors = []; 
        this.medico = Response;
      }, errorResponse => {
        this.success = false;
        this.errors = errorResponse.error.errors;
      })
  };
}
