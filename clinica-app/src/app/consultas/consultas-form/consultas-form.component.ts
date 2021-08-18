import { Component, OnInit } from '@angular/core';

import { Consulta } from '../consulta';

@Component({
  selector: 'app-consultas-form',
  templateUrl: './consultas-form.component.html',
  styleUrls: ['./consultas-form.component.css']
})
export class ConsultasFormComponent implements OnInit {

  consulta: Consulta;

  constructor() { 
    this.consulta = new Consulta();
    this.consulta.medico = 'Elton';
  }

  ngOnInit(): void {
  }

}
