import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiPerfilComponent } from './perfil/mi-perfil.component';
import { EditarPerfilComponent } from './perfil/editar-perfil.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { PieComponent } from './pie/pie.component';
import { ListaEstudioComponent } from './estudio/lista-estudio.component';
import { EditarEstudioComponent } from './estudio/editar-estudio.component';
import { AgregarEstudioComponent } from './estudio/agregar-estudio.component';
import { ListaExperienciaComponent } from './experiencia/lista-experiencia.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia.component';
import { AgregarExperienciaComponent } from './experiencia/agregar-experiencia.component';
import { ListaProyectoComponent } from './proyecto/lista-proyecto.component';
import { EditarProyectoComponent } from './proyecto/editar-proyecto.component';
import { AgregarProyectoComponent } from './proyecto/agregar-proyecto.component';
import { ListaTecnologiaComponent } from './tecnologia/lista-tecnologia.component';
import { EditarTecnologiaComponent } from './tecnologia/editar-tecnologia.component';
import { AgregarTecnologiaComponent } from './tecnologia/agregar-tecnologia.component';
import { PrincipalComponent } from './principal/principal.component';

import { interceptorProvider } from './interceptors/interceptor.service';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPerfilComponent,
    EditarPerfilComponent,
    CabeceraComponent,
    PieComponent,
    ListaEstudioComponent,
    EditarEstudioComponent,
    AgregarEstudioComponent,
    ListaExperienciaComponent,
    EditarExperienciaComponent,
    AgregarExperienciaComponent,
    ListaProyectoComponent,
    EditarProyectoComponent,
    AgregarProyectoComponent,
    ListaTecnologiaComponent,
    EditarTecnologiaComponent,
    AgregarTecnologiaComponent,
    PrincipalComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
