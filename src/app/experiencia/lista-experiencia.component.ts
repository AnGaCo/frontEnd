import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from '../models/experiencia';
import { AlertService } from '../service/alert.service';
import { ExperienciaService } from '../service/experiencia.service';

@Component({
  selector: 'app-lista-experiencia',
  templateUrl: './lista-experiencia.component.html',
  styleUrls: ['./lista-experiencia.component.css']
})
export class ListaExperienciaComponent implements OnInit {

  @Input() exps: Experiencia[] = [];
  @Input() permis: boolean = false;
  experiencia: Experiencia = new Experiencia(0,'','','','','','');
  expElim: Experiencia = new Experiencia(0,'','','','','','');
  indice: number = 0;

  constructor(
    private expService: ExperienciaService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.indice = 0;
  }

  confirmar(id: number,index: number): void {
    this.expService.buscar(id).subscribe(
      data => {
        this.expElim = data;
        this.indice = index;
      },
      err => {
        //alert("Error " + err.message);
        this.alertService.showAlert("ERROR: " + err.message,5000,0);
      }
    );
  }

  eliminar(id: number, index:number): void {
    this.expService.borrar(id).subscribe(
      data => {
        //alert("La experiencia ha sido eliminada!");
        this.alertService.showAlert("La experiencia ha sido eliminada!",3000);
        window.location.reload();
      },
      err => {
        //alert("Error " + err.message);
        this.alertService.showAlert("ERROR: " + err.message,5000,0);
      }
    );
  }
}
