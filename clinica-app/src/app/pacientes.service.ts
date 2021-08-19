import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Paciente } from './pacientes/paciente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {

  constructor(private http: HttpClient) { }

  salvar(paciente: Paciente): Observable<Paciente>{
    return this.http.post<Paciente>('http://localhost:8080/api/pacientes', paciente);
  }

  atualizar(paciente: Paciente): Observable<any>{
    return this.http.put<Paciente>(`http://localhost:8080/api/pacientes/${paciente.id}`, paciente);
  }

  deletar(paciente: Paciente): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/pacientes/${paciente.id}`);
  }

  getPacientes(): Observable<Paciente[]>{
    return this.http.get<Paciente[]>('http://localhost:8080/api/pacientes');
  }

  getPacienteById(id: number) : Observable<Paciente>{
    return this.http.get<any>(`http://localhost:8080/api/pacientes/${id}`);
  }
}
