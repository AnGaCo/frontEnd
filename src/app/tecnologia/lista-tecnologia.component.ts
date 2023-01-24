import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnologia } from '../models/tecnologia';
import { TecnologiaService } from '../service/tecnologia.service';

@Component({
  selector: 'app-lista-tecnologia',
  templateUrl: './lista-tecnologia.component.html',
  styleUrls: ['./lista-tecnologia.component.css']
})
export class ListaTecnologiaComponent implements OnInit {

  @Input() tec: Tecnologia[] = [];
  @Input() permis: boolean = false;
  tecnologia: Tecnologia = new Tecnologia(0,'');
  tecElim: Tecnologia = new Tecnologia(0,'');
  indice: number = 0;

  constructor(
    private tecnoService: TecnologiaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.indice = 0;
  }

  confirmar(id: number, index: number): void {
    this.tecnoService.buscar(id).subscribe(
      data => {
        this.tecElim = data;
        this.indice = index;
      },
      err => {
        alert("Error " + err.message);
      }
    );
  }

  eliminar(id: number, index: number): void {
    this.tecnoService.borrar(id).subscribe(
      data => {
        alert("La tecnologia ha sido eliminada!");
        window.location.reload();
      },
      err => {
        alert("Error " + err.message);
      }
    );
  }
}
