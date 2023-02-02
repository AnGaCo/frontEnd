import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudio } from '../models/estudio';

@Injectable({
  providedIn: 'root'
})
export class EstudioService {

  url = 'https://backend-argprog.onrender.com/api/estudio/';
  //url = 'http://localhost:8080/api/estudio/';

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Estudio[]> {
    return this.httpClient.get<Estudio[]>(this.url + 'showAll');
  }

  public buscar(id: number): Observable<Estudio> {
    return this.httpClient.get<Estudio>(this.url + `detail/${id}`);
  }

  public crear(estudio: Estudio): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', estudio);
  }

  public editar(id: number, estudio: Estudio): Observable<any> {
    return this.httpClient.put<any>(this.url + `edit/${id}`, estudio);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
