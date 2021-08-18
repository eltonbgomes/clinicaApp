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

  constructor(private service: MedicosService) { 
    this.medico = new Medico();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service
      .salvar(this.medico)
      .subscribe(Response => {
        console.log(Response);
      })
  };

}
