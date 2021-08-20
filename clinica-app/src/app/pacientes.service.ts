import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Paciente } from './pacientes/paciente';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  apiURL: string = environment.apiURL + "api/pacientes/";

  constructor(private http: HttpClient) { }

  salvar(paciente: Paciente): Observable<Paciente>{
    return this.http.post<Paciente>(`${this.apiURL}`, paciente);
  }

  atualizar(paciente: Paciente): Observable<any>{
    return this.http.put<Paciente>(`${this.apiURL}${paciente.id}`, paciente);
  }

  deletar(paciente: Paciente): Observable<any>{
    return this.http.delete<any>(`${this.apiURL}${paciente.id}`);
  }

  getPacientes(): Observable<Paciente[]>{
    return this.http.get<Paciente[]>(`${this.apiURL}`);
  }

  getPacienteById(id: number) : Observable<Paciente>{
    return this.http.get<any>(`${this.apiURL}${id}`);
  }
}
