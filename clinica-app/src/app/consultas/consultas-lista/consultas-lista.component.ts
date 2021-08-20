import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ConsultasService } from '../../consultas.service';
import { Consulta } from '../consulta';

@Component({
  selector: 'app-consultas-lista',
  templateUrl: './consultas-lista.component.html',
  styleUrls: ['./consultas-lista.component.css']
})
export class ConsultasListaComponent implements OnInit {

  consultas: Consulta[] = [];
  consultaSelecionada!: Consulta;
  mensagemSucesso!: string;
  mensagemErro!: string;

  constructor(
    private service: ConsultasService, 
    private router: Router) { }

  ngOnInit(): void {
    this.service
      .getConsultas()
      .subscribe(resposta => this.consultas = resposta);
  }

  novoCadastro(){
    this.router.navigate(['/consultas-form']);
  }

  preparaDelecao(consulta: Consulta){
    this.consultaSelecionada = consulta;
  }

  deletarConsulta(){
    this.service
      .deletar(this.consultaSelecionada)
      .subscribe(
        response => {
          this.mensagemSucesso = "Consulta deletada com sucesso!";
          this.ngOnInit();
      },
        erro => this.mensagemErro = "Erro ao deletar Consulta!"
      );
  }

}
