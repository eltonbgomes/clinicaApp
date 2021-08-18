import { Component, OnInit } from '@angular/core';

import { Paciente } from '../paciente';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html',
  styleUrls: ['./pacientes-form.component.css']
})
export class PacientesFormComponent implements OnInit {

  paciente: Paciente = new Paciente;

  constructor() { }

  ngOnInit(): void {
  }

}
