import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from '../models/estudio';
import { AlertService } from '../service/alert.service';
import { EstudioService } from '../service/estudio.service';

@Component({
  selector: 'app-lista-estudio',
  templateUrl: './lista-estudio.component.html',
  styleUrls: ['./lista-estudio.component.css']
})
export class ListaEstudioComponent implements OnInit {

  @Input() estus: Estudio[] = [];
  @Input() permis: boolean = false;
  estudio: Estudio = new Estudio(0,'','','','','');
  estuElim: Estudio = new Estudio(0,'','','','','');
  indice: number = 0;

  constructor(
    private estudioService: EstudioService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.indice = 0;
  }

  confirmar(id: number, index: number): void {
    this.estudioService.buscar(id).subscribe(
      data => {
        this.estuElim = data;
        this.indice = index;
      },
      err => {
        //alert("Error " + err.message);
        this.alertService.showAlert("ERROR: " + err.message,5000,0);
      }
    );
  }

  eliminar(id: number, index: number): void {
    //alert("Se elimino el estudio ID: " + id + ", INDEX: " + index);
    this.estudioService.borrar(id).subscribe(
      data => {
        //alert("El estudio ha sido eliminado!");
        this.alertService.showAlert("El estudio ha sido eliminado!",3000);
        window.location.reload();
      },
      err => {
        //alert("Error " + err.message);
        this.alertService.showAlert("ERROR: " + err.message,5000,0);
      }
    );
  }

}
