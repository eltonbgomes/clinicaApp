import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Medico } from './medicos/medico';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http: HttpClient) { }

  salvar(medico: Medico): Observable<Medico>{
    return this.http.post<Medico>('http://localhost:8080/api/medicos', medico);
  }

  atualizar(medico: Medico): Observable<any>{
    return this.http.put<Medico>(`http://localhost:8080/api/medicos/${medico.id}`, medico);
  }

  deletar(medico: Medico): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/medicos/${medico.id}`);
  }

  getMedicos(): Observable<Medico[]>{
    return this.http.get<Medico[]>('http://localhost:8080/api/medicos');
  }

  getMedicoById(id: number) : Observable<Medico>{
    return this.http.get<any>(`http://localhost:8080/api/medicos/${id}`);
  }
}
