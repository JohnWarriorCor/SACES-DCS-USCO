import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


import { MDBBootstrapModule, ModalModule, WavesModule, InputsModule, ButtonsModule } from 'angular-bootstrap-md';
export { MDBBootstrapModule };
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { APP_ROUTING } from './app.routing';
import { RouterModule } from '@angular/router';

// Autenticacion Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuardModule  } from '@angular/fire/auth-guard';

// Toast
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ToastService } from './services/toast/toast.service';


// importar locales
import localeEsCO from '@angular/common/locales/es-CO';
import { FormacionComponent } from './components/pages/formacion/formacion.component';
import { DocentesComponent } from './components/pages/docentes/docentes.component';
import { EstudiantesComponent } from './components/pages/estudiantes/estudiantes.component';
import { GruposinvesComponent } from './components/pages/gruposinves/gruposinves.component';
import { EgresadosComponent } from './components/pages/estudiantes/egresados/egresados.component';
import { TesisComponent } from './components/pages/estudiantes/tesis/tesis.component';
import { LoginComponent } from './components/admin/login/login.component';
import { GruposinveseditComponent } from './components/admin/gruposinvesedit/gruposinvesedit.component';
import { ProgramaComponent } from './components/pages/programa/programa.component';
import { HistoriaComponent } from './components/pages/programa/historia/historia.component';
import { UbicacionComponent } from './components/pages/programa/ubicacion/ubicacion.component';
import { PlanestudiosComponent } from './components/pages/formacion/planestudios/planestudios.component';
import { CompetenciasComponent } from './components/pages/formacion/competencias/competencias.component';
import { PerfilComponent } from './components/pages/formacion/perfil/perfil.component';
import { OrganigramaComponent } from './components/pages/programa/organigrama/organigrama.component';
import { NgxPrintModule } from 'ngx-print';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { KeysfirebasePipe } from './pipes/keysfirebase.pipe';
import { ListinvertPipe } from './pipes/listinvert.pipe';
import { DocenteComponent } from './components/pages/docentes/docente/docente.component';
import { BibliotecaComponent } from './components/pages/biblioteca/biblioteca.component';
import { ArticulosprofesoresComponent } from './components/pages/docentes/articulosprofesores/articulosprofesores.component';
import { ArticulosestudiantesComponent } from './components/pages/estudiantes/articulosestudiantes/articulosestudiantes.component';
import { EstudianteComponent } from './components/pages/estudiantes/estudiante/estudiante.component';
import { HistoriaeditComponent } from './components/admin/programa/historiaedit/historiaedit.component';
import { DenominacionComponent } from './components/admin/home/denominacion/denominacion.component';
import { CarruselComponent } from './components/admin/home/carrusel/carrusel.component';
import { CarruseleditComponent } from './components/admin/home/carrusel/carruseledit.component';
import { PlanestudioseditComponent } from './components/admin/formacion/planestudiosedit/planestudiosedit.component';
import { ListadoeditComponent } from './components/admin/estudiantes/listado/listadoedit.component';
import { EgresadoseditComponent } from './components/admin/estudiantes/agresados/egresadosedit.component';
import { ArticulosestueditComponent } from './components/admin/estudiantes/articulos/articulosestuedit.component';
import { TesiseditComponent } from './components/admin/estudiantes/tesis/tesisedit.component';
import { LibroseditComponent } from './components/admin/biblioteca/libros/librosedit.component';
import { PlanteleditComponent } from './components/admin/profesores/plantel/planteledit.component';
import { ArticulosproeditComponent } from './components/admin/profesores/articulos/articulosproedit.component';
import { EgresadoComponent } from './components/pages/estudiantes/egresados/egresado/egresado.component';
import { FiltroPipe } from './pipes/filtro.pipe';
import { FiltroprofesoresPipe } from './pipes/filtroprofesores.pipe';
import { FiltrogruposinvesPipe } from './pipes/filtrogruposinves.pipe';
import { AgendainstitucionalComponent } from './components/pages/agenda/agendainstitucional/agendainstitucional.component';
import { EventoinstitucionalComponent } from './components/pages/agenda/agendainstitucional/eventoinstitucional/eventoinstitucional.component';
import { AgendaprogramaComponent } from './components/pages/agenda/agendaprograma/agendaprograma.component';
import { EventoprogramaComponent } from './components/pages/agenda/agendaprograma/eventoprograma/eventoprograma.component';
import { AgendaprogramaeditComponent } from './components/admin/agendaedit/agendaprogramaedit/agendaprogramaedit.component';
import { AgendainstitucionaleditComponent } from './components/admin/agendaedit/agendainstitucionaledit/agendainstitucionaledit.component';
import { Condicion1Component } from './components/pages/condicion1/condicion1.component';
import { Condicion1editComponent } from './components/admin/condicion1edit/condicion1edit.component';

// registrar los locales con el nombre que quieras utilizar a la hora de proveer
registerLocaleData(localeEsCO, 'es-CO');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    FormacionComponent,
    DocentesComponent,
    EstudiantesComponent,
    GruposinvesComponent,
    EgresadosComponent,
    TesisComponent,
    LoginComponent,
    GruposinveseditComponent,
    ProgramaComponent,
    HistoriaComponent,
    UbicacionComponent,
    PlanestudiosComponent,
    CompetenciasComponent,
    PerfilComponent,
    OrganigramaComponent,
    DomseguroPipe,
    KeysfirebasePipe,
    ListinvertPipe,
    DocenteComponent,
    BibliotecaComponent,
    ArticulosprofesoresComponent,
    ArticulosestudiantesComponent,
    EstudianteComponent,
    HistoriaeditComponent,
    DenominacionComponent,
    CarruselComponent,
    CarruseleditComponent,
    PlanestudioseditComponent,
    ListadoeditComponent,
    EgresadoseditComponent,
    ArticulosestueditComponent,
    TesiseditComponent,
    LibroseditComponent,
    PlanteleditComponent,
    ArticulosproeditComponent,
    EgresadoComponent,
    FiltroPipe,
    FiltroprofesoresPipe,
    FiltrogruposinvesPipe,
    AgendainstitucionalComponent,
    EventoinstitucionalComponent,
    AgendaprogramaComponent,
    EventoprogramaComponent,
    AgendaprogramaeditComponent,
    AgendainstitucionaleditComponent,
    Condicion1Component,
    Condicion1editComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPrintModule,
    HttpModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    ModalModule.forRoot(),
    WavesModule.forRoot(),
    InputsModule.forRoot(),
    ButtonsModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireAuthGuardModule,
    AngularFireDatabaseModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  exports: [
    MDBBootstrapModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CO' }, ToastService],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
