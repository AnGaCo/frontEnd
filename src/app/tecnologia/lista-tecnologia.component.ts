import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnologia } from '../models/tecnologia';
import { AlertService } from '../service/alert.service';
import { TecnologiaService } from '../service/tecnologia.service';

@Component({
  selector: 'app-lista-tecnologia',
  templateUrl: './lista-tecnologia.component.html',
  styleUrls: ['./lista-tecnologia.component.css'],
  providers: [TecnologiaService],
})
export class ListaTecnologiaComponent implements OnInit {

  @Input() tec: Tecnologia[] = [];
  @Input() permis: boolean = false;
  tecnologia: Tecnologia = new Tecnologia(0,'');
  tecElim: Tecnologia = new Tecnologia(0,'');
  indice: number = 0;

  constructor(
    private tecnoService: TecnologiaService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.indice = 0;
  }

  confirmar(id: number, index: number): void {
    this.tecnoService.buscar(id).subscribe(
      data => {
        this.tecElim = data;
        this.indice = index;
        //this.eliminar(this.tecElim.idTec,this.indice);
      },
      err => {
        //alert("Error " + err.message);
        this.alertService.showAlert("ERROR: " + err.message,5000,0);
      }
    );
  }

  eliminar(id: number, index: number): void {
    this.tecnoService.borrar(id).subscribe(
      data => {
        //alert("La tecnologia ha sido eliminada!");
        this.alertService.showAlert("La tecnologia ha sido eliminada!",3000);
        window.location.reload();
      },
      err => {
        //alert("Error " + err.message);
        this.alertService.showAlert("ERROR: " + err.message,5000,0);
      }
    );
  }

}
