import { Component, OnInit } from '@angular/core';

import { Medico } from '../medico';

@Component({
  selector: 'app-medicos-form',
  templateUrl: './medicos-form.component.html',
  styleUrls: ['./medicos-form.component.css']
})
export class MedicosFormComponent implements OnInit {

  medico: Medico = new Medico;

  constructor() { }

  ngOnInit(): void {
  }

}
