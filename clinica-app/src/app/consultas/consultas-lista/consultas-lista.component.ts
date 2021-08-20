import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MedicosService } from '../../medicos.service';
import { PacientesService } from '../../pacientes.service';
import { ConsultasService } from '../../consultas.service';
import { Consulta } from '../consulta';
import { Medico } from 'src/app/medicos/medico';
import { Paciente } from 'src/app/pacientes/paciente';

@Component({
  selector: 'app-consultas-lista',
  templateUrl: './consultas-lista.component.html',
  styleUrls: ['./consultas-lista.component.css']
})
export class ConsultasListaComponent implements OnInit {

  consultas: Consulta[] = [];
  medicos: Medico[] = [];
  pacientes: Paciente[] = [];
  consultaSelecionada!: Consulta;
  mensagemSucesso!: string;
  mensagemErro!: string;

  constructor(
    private serviceConsulta: ConsultasService,
    private serviceMedico: MedicosService,
    private servicePaciente: PacientesService,
    private router: Router) { }

  ngOnInit(): void {
    this.serviceConsulta
      .getConsultas()
      .subscribe(resposta => this.consultas = resposta);
    this.serviceMedico
      .getMedicos()
      .subscribe(resposta => this.medicos = resposta);
    this.servicePaciente
      .getPacientes()
      .subscribe(resposta => this.pacientes = resposta);
    this.consultas.forEach(element => {
      console.log(element);
    });
    this.pacientes.forEach(element => {
      console.log(element);
    });
    this.medicos.forEach(element => {
      console.log(element);
    });
  }

  novoCadastro(){
    this.router.navigate(['/consultas-form']);
  }

  preparaDelecao(consulta: Consulta){
    this.consultaSelecionada = consulta;
  }

  deletarConsulta(){
    this.serviceConsulta
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
