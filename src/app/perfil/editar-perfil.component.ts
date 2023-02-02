import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from '../models/perfil';
import { AlertService } from '../service/alert.service';
import { PerfilService } from '../service/perfil.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  perfil: Perfil = new Perfil(0,'','','','','','','','','','','','');

  constructor(
    private perfilService: PerfilService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.perfilService.buscar(id).subscribe(
      data => {
        this.perfil = data;
      },
      err => {
        alert("Error " + err.message);
      }
    );
  }

  onUpdate(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.perfilService.editar(id,this.perfil).subscribe(
      data => {
        //alert("Perfil actualizado");
        this.alertService.showAlert("Perfil Actualizado!",3000);
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
