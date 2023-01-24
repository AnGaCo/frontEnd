import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../service/proyecto.service';

@Component({
  selector: 'app-agregar-proyecto',
  templateUrl: './agregar-proyecto.component.html',
  styleUrls: ['./agregar-proyecto.component.css']
})
export class AgregarProyectoComponent implements OnInit {

  id: number = 0;
  nombre: string = '';
  fecha: string = '';
  desc: string = '';
  enlace: string = '';
  imagen: string = '';

  constructor(
    private proyectoService: ProyectoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proyecto = new Proyecto(this.id,this.nombre,this.fecha,this.desc,this.enlace,this.imagen);
    this.proyectoService.crear(proyecto).subscribe(
      data => {
        alert("Nuevo proyecto agregado!");
        this.router.navigate(['/home']);
      },
      err => {
        alert("Error " + err.message);
        this.router.navigate(['/home']);
      }
    );
  }

  volver(): void {
    this.router.navigate(['/home']);
  }
}
