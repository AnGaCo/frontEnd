import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../models/proyecto';
import { ProyectoService } from '../service/proyecto.service';

@Component({
  selector: 'app-lista-proyecto',
  templateUrl: './lista-proyecto.component.html',
  styleUrls: ['./lista-proyecto.component.css']
})
export class ListaProyectoComponent implements OnInit {

  @Input() pros: Proyecto[] = [];
  @Input() permis: boolean = false;
  proyecto: Proyecto = new Proyecto(0,'','','','','');
  proElim: Proyecto = new Proyecto(0,'','','','','');
  indice: number = 0;

  constructor(
    private proyectoService: ProyectoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.indice = 0;
  }

  confirmar(id: number, index: number): void {
    this.proyectoService.buscar(id).subscribe(
      data => {
        this.proElim = data;
        this.indice = index;
      },
      err => {
        alert("Error " + err.message);
      }
    );
  }

  eliminar(id: number, index: number): void {
    this.proyectoService.borrar(id).subscribe(
      data => {
        alert("El proyecto ha sido eliminado!");
        window.location.reload();
      },
      err => {
        alert("Error " + err.message);
      }
    );
  }
}
