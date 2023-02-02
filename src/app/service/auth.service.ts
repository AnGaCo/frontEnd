import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'https://backend-argprog.onrender.com/auth/';
  //url = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.url + 'login', loginUsuario);
  }
}
