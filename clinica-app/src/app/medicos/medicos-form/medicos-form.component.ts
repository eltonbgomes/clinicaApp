import { Component, OnInit } from '@angular/core';

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

  constructor(private service: MedicosService) { 
    this.medico = new Medico();
  }

  ngOnInit(): void {
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
