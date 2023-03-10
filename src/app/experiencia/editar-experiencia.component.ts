import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from '../models/experiencia';
import { AlertService } from '../service/alert.service';
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
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.expService.buscar(id).subscribe(
      data => {
        this.experiencia = data;
      },
      err => {
        //alert("Error " + err.message);
        this.alertService.showAlert("ERROR: " + err.message,5000,0);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    console.log("THIS.EXPERIENCIA= " + this.experiencia.idExp + " - " + this.experiencia.puesto);
    this.expService.editar(id,this.experiencia).subscribe(
      data => {
        //alert("Experiencia actualizada!");
        this.alertService.showAlert("Experiencia actualizada!",3000);
        this.router.navigate(['/home']);
      },
      err => {
        //alert("Error " + err.message);
        this.alertService.showAlert("ERROR: " + err.message,5000,0);
        this.router.navigate(['/home']);
      }
    );
  }

  volver(): void {
    this.router.navigate(['/home']);
  }
}
