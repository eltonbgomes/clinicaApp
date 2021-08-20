import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consulta } from './consultas/consulta';

@Injectable({
  providedIn: 'root'
})
export class ConsultasService {

  constructor(private http: HttpClient) { }

  salvar(consulta: Consulta): Observable<Consulta>{
    return this.http.post<Consulta>('http://localhost:8080/api/consultas', consulta);
  }

  atualizar(consulta: Consulta): Observable<any>{
    return this.http.put<Consulta>(`http://localhost:8080/api/consultas/${consulta.id}`, consulta);
  }

  deletar(consulta: Consulta): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/consultas/${consulta.id}`);
  }

  getConsultas(): Observable<Consulta[]>{
    return this.http.get<Consulta[]>('http://localhost:8080/api/consultas');
  }

  getConsultaById(id: number) : Observable<Consulta>{
    return this.http.get<any>(`http://localhost:8080/api/consultas/${id}`);
  }
}
