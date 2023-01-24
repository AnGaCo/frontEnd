import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from '../models/experiencia';
import { ExperienciaService } from '../service/experiencia.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css']
})
export class EditarExperienciaComponent implements OnInit {

  experiencia: Experiencia = new Experiencia(0,'','','','','','');

  constructor(
    private expService: ExperienciaService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expService.buscar(id).subscribe(
      data => {
        this.experiencia = data;
      },
      err => {
        alert("Error " + err.message);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expService.editar(id,this.experiencia).subscribe(
      data => {
        alert("Experiencia actualizada!");
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
