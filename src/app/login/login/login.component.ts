import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginUsuario } from 'src/app/models/login-usuario';
import { AlertService } from 'src/app/service/alert.service';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogged = false;
  nombreUsuario: string = '';
  password: string = '';
  loginUsuario: LoginUsuario = new LoginUsuario('','');
  roles: string[]= [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private tokenService: TokenService,
    private authService: AuthService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  onLogOut(): void {
    this.tokenService.logOut();
    window.location.reload();
  }

  onLogin(): void {
    this.loginUsuario = new LoginUsuario(this.nombreUsuario,this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        //window.location.href = "http://localhost:4200/home/";
        //alert('Ya te logueaste!');
        window.location.href = "https://manuelorozco-portfolio.web.app/home/";
        //this.router.navigate(['/home']);
        //setTimeout( function(){ window.location.href = "http://localhost:4200/home/"; }, 5000 );
      },
      err => {
        this.isLogged = false;
        //alert("Error: " + err.message);
        this.alertService.showAlert("ERROR: " + err.message,5000,0);
      }
    );
  }

  loginVisitor(): void {
    this.nombreUsuario = 'user-visitor';
    this.password = 'im+a+visitor';
    this.onLogin();
  }
}
