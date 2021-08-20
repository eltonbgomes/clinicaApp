import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medico } from './medicos/medico';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  apiURL: string = environment.apiURL + "api/medicos/";

  constructor(private http: HttpClient) { }

  salvar(medico: Medico): Observable<Medico>{
    return this.http.post<Medico>(`${this.apiURL}`, medico);
  }

  atualizar(medico: Medico): Observable<any>{
    return this.http.put<Medico>(`${this.apiURL}${medico.id}`, medico);
  }

  deletar(medico: Medico): Observable<any>{
    return this.http.delete<any>(`${this.apiURL}${medico.id}`);
  }

  getMedicos(): Observable<Medico[]>{
    return this.http.get<Medico[]>(`${this.apiURL}`);
  }

  getMedicoById(id: number) : Observable<Medico>{
    return this.http.get<any>(`${this.apiURL}${id}`);
  }
}
