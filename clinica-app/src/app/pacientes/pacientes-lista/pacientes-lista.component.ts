import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PacientesService } from '../../pacientes.service';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-pacientes-lista',
  templateUrl: './pacientes-lista.component.html',
  styleUrls: ['./pacientes-lista.component.css']
})
export class PacientesListaComponent implements OnInit {

  pacientes: Paciente[] = [];
  pacienteSelecionado!: Paciente;
  mensagemSucesso!: string;
  mensagemErro!: string;

  constructor(
    private service: PacientesService, 
    private router: Router) { }

  ngOnInit(): void {
    this.service
      .getPacientes()
      .subscribe(resposta => this.pacientes = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/pacientes-form']);
  }

  preparaDelecao(paciente: Paciente){
    this.pacienteSelecionado = paciente;
  }

  deletarPaciente(){
    this.service
      .deletar(this.pacienteSelecionado)
      .subscribe(
        response => {
          this.mensagemSucesso = "Paciente deletado com sucesso!";
          this.ngOnInit();
      },
        erro => this.mensagemErro = "Erro ao deletar Paciente!"
      );
  }
}
