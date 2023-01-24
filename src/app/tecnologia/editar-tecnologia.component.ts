import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnologia } from '../models/tecnologia';
import { TecnologiaService } from '../service/tecnologia.service';

@Component({
  selector: 'app-editar-tecnologia',
  templateUrl: './editar-tecnologia.component.html',
  styleUrls: ['./editar-tecnologia.component.css']
})
export class EditarTecnologiaComponent implements OnInit {

  tecnologia: Tecnologia = new Tecnologia(0,'');

  constructor(
    private tecnoService: TecnologiaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.tecnoService.buscar(id).subscribe(
      data => {
        this.tecnologia = data;
      },
      err => {
        alert("Error " + err.message);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.tecnoService.editar(id,this.tecnologia).subscribe(
      data => {
        alert("Tecnologia actualizada!");
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