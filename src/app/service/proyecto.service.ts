import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  url = 'https://backend-argprog.onrender.com/api/proyecto/';
  //url = 'http://localhost:8080/api/proyecto/';

  constructor(private httpClient: HttpClient) { }

  public listar(): Observable<Proyecto[]> {
    return this.httpClient.get<Proyecto[]>(this.url + 'showAll');
  }

  public buscar(id: number): Observable<Proyecto> {
    return this.httpClient.get<Proyecto>(this.url + `detail/${id}`);
  }

  public crear(proyecto: Proyecto): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', proyecto);
  }

  public editar(id: number, proyecto: Proyecto): Observable<any> {
    return this.httpClient.put<any>(this.url + `edit/${id}`, proyecto);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
}
