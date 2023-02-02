import { Component, OnInit } from '@angular/core';
import { Estudio } from '../models/estudio';
import { Experiencia } from '../models/experiencia';
import { Perfil } from '../models/perfil';
import { Proyecto } from '../models/proyecto';
import { Tecnologia } from '../models/tecnologia';
import { AlertService } from '../service/alert.service';
import { EstudioService } from '../service/estudio.service';
import { ExperienciaService } from '../service/experiencia.service';
import { PerfilService } from '../service/perfil.service';
import { ProyectoService } from '../service/proyecto.service';
import { TecnologiaService } from '../service/tecnologia.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  perfil: Perfil = new Perfil(0,'','','','','','','','','','','','');
  estudios: Estudio[] = [];
  experiencias: Experiencia[] = [];
  tecnologias: Tecnologia[] = [];
  proyectos: Proyecto[] = [];
  isLogged = false;
  nombreUsuario: string = '';
  roles: string[] = [];
  isAdmin = false;

  constructor(
    private perfilService: PerfilService,
    private estudioService: EstudioService,
    private expService: ExperienciaService,
    private tecService: TecnologiaService,
    private proService: ProyectoService,
    private tokenService: TokenService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {

    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.nombreUsuario = this.tokenService.getUserName()!;

      this.roles = this.tokenService.getAuthorities();
      this.roles.forEach(rol => {
        if(rol === 'ROLE_ADMIN'){
          this.isAdmin = true;
        }
      });
      
      const id = 1;
      this.perfilService.buscar(id).subscribe(
        data => {
          this.perfil = data;
          //alert("Perfil: " + this.perfil.nombre + " " + this.perfil.apellido);
        },
        err => {
          alert("Error al cargar datos!");
        }
      );
    }else{
      this.isLogged = false;
      this.nombreUsuario = '';
    }
    
    this.obtenerEstudios();
    this.obtenerExperiencias();
    this.obtenerTecnologias();
    this.obtenerProyectos();
  }

  obtenerEstudios(): void {
    this.estudioService.listar().subscribe(
      data => {
        this.estudios = data;
      },
      err => {
        alert("Error: " + err.message);
      }
    );
  }

  obtenerExperiencias(): void {
    this.expService.listar().subscribe(
      data => {
        this.experiencias = data;
      },
      err => {
        alert("Error: " + err.message);
      }
    );
  }

  obtenerTecnologias(): void {
    this.tecService.listar().subscribe(
      data => {
        this.tecnologias = data;
      },
      err => {
        alert("Error: " + err.message);
      }
    );
  }

  obtenerProyectos(): void {
    this.proService.listar().subscribe(
      data => {
        this.proyectos = data;
      },
      err => {
        alert("Error: " + err.message);
      }
    );
  }

  doSomething() {
    this.alertService.showAlert("Llamado desde PRINCIPAL",3000,0);
  }
}
