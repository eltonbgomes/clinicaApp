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

  constructor(private service: PacientesService) {
    this.paciente = new Paciente();
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service
      .salvar(this.paciente)
      .subscribe(Response => {
        console.log(Response);
      })
  };
}
