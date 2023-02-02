import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from '../models/estudio';
import { AlertService } from '../service/alert.service';
import { EstudioService } from '../service/estudio.service';

@Component({
  selector: 'app-agregar-estudio',
  templateUrl: './agregar-estudio.component.html',
  styleUrls: ['./agregar-estudio.component.css']
})
export class AgregarEstudioComponent implements OnInit {

  id: number = 0;
  institucion: string = '';
  logo: string = '';
  titulo: string = '';
  entrada: string = '';
  salida: string = '';

  constructor(
    private estudioService: EstudioService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const estudio = new Estudio(this.id,this.institucion,this.logo,this.titulo,this.entrada,this.salida);
    this.estudioService.crear(estudio).subscribe(
      data => {
        //alert("Nuevo estudio agregado!");
        this.alertService.showAlert("Nuevo estudio agregado!",3000);
        this.router.navigate(['/home']);
      },
      err => {
        //alert("Error " + err.message);
        this.alertService.showAlert("ERROR: " + err.message,5000,0);
        this.router.navigate(['/home']);
      }
    );
  }

  volver(): void {
    this.router.navigate(['/home']);
  }
}
