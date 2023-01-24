import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEstudioComponent } from './estudio/agregar-estudio.component';
import { EditarEstudioComponent } from './estudio/editar-estudio.component';
import { AgregarExperienciaComponent } from './experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia.component';
import { LoginComponent } from './login/login/login.component';
import { EditarPerfilComponent } from './perfil/editar-perfil.component';
import { PrincipalComponent } from './principal/principal.component';
import { AgregarProyectoComponent } from './proyecto/agregar-proyecto.component';
import { EditarProyectoComponent } from './proyecto/editar-proyecto.component';
import { AgregarTecnologiaComponent } from './tecnologia/agregar-tecnologia.component';
import { EditarTecnologiaComponent } from './tecnologia/editar-tecnologia.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: PrincipalComponent },
  { path: 'edit-profile/:id', component: EditarPerfilComponent },
  { path: 'edit-estudio/:id', component: EditarEstudioComponent },
  { path: 'edit-tecnologia/:id', component: EditarTecnologiaComponent },
  { path: 'edit-proyecto/:id', component: EditarProyectoComponent },
  { path: 'edit-experiencia/:id', component: EditarExperienciaComponent },
  { path: 'agr-estudio', component: AgregarEstudioComponent },
  { path: 'agr-tecnologia', component: AgregarTecnologiaComponent },
  { path: 'agr-proyecto', component: AgregarProyectoComponent },
  { path: 'agr-experiencia', component: AgregarExperienciaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
