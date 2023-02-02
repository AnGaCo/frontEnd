import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../models/perfil';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  url = 'https://backend-argprog.onrender.com/api/perfil/';
  //url = 'http://localhost:8080/api/perfil/';

  constructor(private httpClient: HttpClient) { }
  //constructor(private httpClient: HttpClient, private cookies: CookieService) { }

  public listar(): Observable<Perfil[]> {
    return this.httpClient.get<Perfil[]>(this.url + 'showAll');
  }

  public buscar(id: number): Observable<Perfil> {
    return this.httpClient.get<Perfil>(this.url + `detail/${id}`);
  }

  public crear(Perfil: Perfil): Observable<any> {
    return this.httpClient.post<any>(this.url + 'new', Perfil);
  }

  public editar(id: number, Perfil: Perfil): Observable<any> {
    return this.httpClient.put<any>(this.url + `edit/${id}`, Perfil);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
  }
  
  /*
  getPerson(id: number): Observable<any> {
    return this.httpClient.get(this.url + '/' + id);
  }

  setToken(token: string) {
    this.cookies.set("token", token);
  }

  getToken() {
    return this.cookies.get("token");
  }

  deleteToken(){
    this.cookies.delete("token");
  }

  getPersonStay() {
    const token = this.getToken();
    return token;
  }
  */
}
