import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tecnologia } from '../models/tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  url = 'http://localhost:8080/api/tecnologia/';

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Tecnologia[]> {
    return this.httpClient.get<Tecnologia[]>(this.url + 'showAll');
  }

  public buscar(id: number): Observable<Tecnologia> {
    return this.httpClient.get<Tecnologia>(this.url + `detail/${id}`);
  }

  public crear(tecnologia: Tecnologia): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', tecnologia);
  }

  public editar(id: number, tecnologia: Tecnologia): Observable<any> {
    return this.httpClient.put<any>(this.url + `edit/${id}`, tecnologia);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
