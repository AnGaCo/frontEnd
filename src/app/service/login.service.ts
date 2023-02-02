import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'https://backend-argprog.onrender.com/api/user/';
  //url = 'http://localhost:8080/api/user/';

  constructor(
    
  ) { }
}
