import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tecnologia } from '../models/tecnologia';
import { AlertService } from '../service/alert.service';
import { TecnologiaService } from '../service/tecnologia.service';

@Component({
  selector: 'app-editar-tecnologia',
  templateUrl: './editar-tecnologia.component.html',
  styleUrls: ['./editar-tecnologia.component.css'],
  providers: [TecnologiaService],
})
export class EditarTecnologiaComponent implements OnInit {

  tecnologia: Tecnologia = new Tecnologia(0,'');

  constructor(
    private tecnoService: TecnologiaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
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
        //alert("Tecnologia actualizada!");
        this.alertService.showAlert("Tecnologia actualizado!",3000);
        this.router.navigate(['/home']);
      },
      err => {
        //alert("Error " + err.message);
        this.alertService.showAlert("ERROR: " + err.message,5000,0);
      }
    );
  }

  volver(): void {
    this.router.navigate(['/home']);
  }
}
