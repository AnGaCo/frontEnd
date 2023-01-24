import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Perfil } from '../models/perfil';
import { PerfilService } from '../service/perfil.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  @Input() per: Perfil = new Perfil(0,'','','','','','','','','','','','');
  @Input() permis: boolean = false;
  perfil: Perfil = new Perfil(0,'','','','','','','','','','','','');

  constructor(
    private perfilService: PerfilService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    /*const id = 1;
    this.perfilService.buscar(id).subscribe(
      data => {
        this.perfil = data;
      },
      err => {
        alert("Error al cargar los datos del perfil.");
        this.volver();
      }
    );*/
  }

  volver(): void {
    this.router.navigate(['/']);
  }
}
