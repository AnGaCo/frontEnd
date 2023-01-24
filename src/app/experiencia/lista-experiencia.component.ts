import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from '../models/experiencia';
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
    private router: Router
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
        alert("Error " + err.message);
      }
    );
  }

  eliminar(id: number, index:number): void {
    this.expService.borrar(id).subscribe(
      data => {
        alert("La experiencia ha sido eliminada!");
        window.location.reload();
      },
      err => {
        alert("Error " + err.message);
      }
    );
  }
}
