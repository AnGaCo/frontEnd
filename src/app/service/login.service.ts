import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8080/api/user/';

  constructor(
    
  ) { }
}
