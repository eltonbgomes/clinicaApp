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
    return this.http.post<Medico>('http://localhost:8080/api/medicos/', medico);
  }

  getMedico(): Medico{
    let medico: Medico = new Medico();
    return medico;
  }
}
