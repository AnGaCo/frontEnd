import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from '../models/experiencia';
import { AlertService } from '../service/alert.service';
import { ExperienciaService } from '../service/experiencia.service';

@Component({
  selector: 'app-agregar-experiencia',
  templateUrl: './agregar-experiencia.component.html',
  styleUrls: ['./agregar-experiencia.component.css']
})
export class AgregarExperienciaComponent implements OnInit {

  id: number = 0;
  puesto: string = '';
  lugar: string = '';
  logo: string = '';
  inicio: string = '';
  fin: string = '';
  desc: string = '';

  constructor(
    private expService: ExperienciaService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const experiencia = new Experiencia(this.id,this.puesto,this.lugar,this.logo,this.inicio,this.fin,this.desc);
    this.expService.crear(experiencia).subscribe(
      data => {
        //alert("Nueva experiencia agregada!");
        this.alertService.showAlert("Nueva experiencia agregada!",3000);
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
