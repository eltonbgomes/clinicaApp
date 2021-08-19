import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MedicosService } from '../../medicos.service';
import { Medico } from '../medico';

@Component({
  selector: 'app-medicos-lista',
  templateUrl: './medicos-lista.component.html',
  styleUrls: ['./medicos-lista.component.css']
})
export class MedicosListaComponent implements OnInit {

  medicos: Medico[] = [];

  constructor(
    private service: MedicosService,
    private router: Router) { }

  ngOnInit(): void {
    this.service.getMedicos()
      .subscribe(resposta => this.medicos = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/medicos-form']);
  }
}
