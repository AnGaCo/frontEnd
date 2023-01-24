import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tecnologia } from '../models/tecnologia';
import { TecnologiaService } from '../service/tecnologia.service';

@Component({
  selector: 'app-agregar-tecnologia',
  templateUrl: './agregar-tecnologia.component.html',
  styleUrls: ['./agregar-tecnologia.component.css']
})
export class AgregarTecnologiaComponent implements OnInit {

  id: number = 0;
  nombre: string = '';

  constructor(
    private tecnoService: TecnologiaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const tecnologia = new Tecnologia(this.id,this.nombre);
    this.tecnoService.crear(tecnologia).subscribe(
      data => {
        alert("Nueva tecnologia agregada!");
        this.router.navigate(['/home']);
      },
      err => {
        alert("Error " + err.message);
      }
    );
  }

  volver(): void {
    this.router.navigate(['/home']);
  }
}
