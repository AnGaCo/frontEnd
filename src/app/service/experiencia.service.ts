import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  url = 'http://localhost:8080/api/experiencia/';

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Experiencia[]> {
    return this.httpClient.get<Experiencia[]>(this.url + 'showAll');
  }

  public buscar(id: number): Observable<Experiencia> {
    return this.httpClient.get<Experiencia>(this.url + `detail/${id}`);
  }

  public crear(experiencia: Experiencia): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', experiencia);
  }

  public editar(id: number, experiencia: Experiencia): Observable<any> {
    return this.httpClient.put<any>(this.url + `edit/${id}`, experiencia);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
