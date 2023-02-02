import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from '../models/proyecto';
import { AlertService } from '../service/alert.service';
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
    private router: Router,
    private alertService: AlertService
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
        //alert("Error " + err.message);
        this.alertService.showAlert("ERROR: " + err.message,5000,0);
      }
    );
  }

  eliminar(id: number, index: number): void {
    this.proyectoService.borrar(id).subscribe(
      data => {
        //alert("El proyecto ha sido eliminado!");
        this.alertService.showAlert("El proyecto ha sido eliminado!",3000);
        window.location.reload();
      },
      err => {
        //alert("Error " + err.message);
        this.alertService.showAlert("ERROR: " + err.message,5000,0);
      }
    );
  }

}
