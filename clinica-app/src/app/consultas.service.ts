import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consulta } from './consultas/consulta';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  apiURL: string = environment.apiURL + "api/consultas/";

  constructor(private http: HttpClient) { }

  salvar(consulta: Consulta): Observable<Consulta>{
    return this.http.post<Consulta>(`${this.apiURL}`, consulta);
  }

  atualizar(consulta: Consulta): Observable<any>{
    return this.http.put<Consulta>(`${this.apiURL}${consulta.id}`, consulta);
  }

  deletar(consulta: Consulta): Observable<any>{
    return this.http.delete<any>(`${this.apiURL}${consulta.id}`);
  }

  getConsultas(): Observable<Consulta[]>{
    return this.http.get<Consulta[]>(`${this.apiURL}`);
  }

  getConsultaById(id: number) : Observable<Consulta>{
    return this.http.get<any>(`${this.apiURL}/${id}`);
  }
}
