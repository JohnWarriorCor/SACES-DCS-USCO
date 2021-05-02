import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { DocentesComponent } from './components/pages/docentes/docentes.component';
import { FormacionComponent } from './components/pages/formacion/formacion.component';
import { GruposinvesComponent } from './components/pages/gruposinves/gruposinves.component';
import { EstudiantesComponent } from './components/pages/estudiantes/estudiantes.component';
import { LoginComponent } from './components/admin/login/login.component';
import { EgresadosComponent } from './components/pages/estudiantes/egresados/egresados.component';
import { TesisComponent } from './components/pages/estudiantes/tesis/tesis.component';
import { ProgramaComponent } from './components/pages/programa/programa.component';
import { HistoriaComponent } from './components/pages/programa/historia/historia.component';
import { UbicacionComponent } from './components/pages/programa/ubicacion/ubicacion.component';
import { PlanestudiosComponent } from './components/pages/formacion/planestudios/planestudios.component';
import { CompetenciasComponent } from './components/pages/formacion/competencias/competencias.component';
import { PerfilComponent } from './components/pages/formacion/perfil/perfil.component';
import { OrganigramaComponent } from './components/pages/programa/organigrama/organigrama.component';
import { DocenteComponent } from './components/pages/docentes/docente/docente.component';
import { BibliotecaComponent } from './components/pages/biblioteca/biblioteca.component';
import { ArticulosestudiantesComponent } from './components/pages/estudiantes/articulosestudiantes/articulosestudiantes.component';
import { ArticulosprofesoresComponent } from './components/pages/docentes/articulosprofesores/articulosprofesores.component';
import { EstudianteComponent } from './components/pages/estudiantes/estudiante/estudiante.component';
import { HistoriaeditComponent } from './components/admin/programa/historiaedit/historiaedit.component';
import { GruposinveseditComponent } from './components/admin/gruposinvesedit/gruposinvesedit.component';
import { DenominacionComponent } from './components/admin/home/denominacion/denominacion.component';
import { CarruselComponent } from './components/admin/home/carrusel/carrusel.component';
import { CarruseleditComponent } from './components/admin/home/carrusel/carruseledit.component';
import { PlanestudioseditComponent } from './components/admin/formacion/planestudiosedit/planestudiosedit.component';
import { ArticulosestueditComponent } from './components/admin/estudiantes/articulos/articulosestuedit.component';
import { EgresadoseditComponent } from './components/admin/estudiantes/agresados/egresadosedit.component';
import { TesiseditComponent } from './components/admin/estudiantes/tesis/tesisedit.component';
import { LibroseditComponent } from './components/admin/biblioteca/libros/librosedit.component';
import { ArticulosproeditComponent } from './components/admin/profesores/articulos/articulosproedit.component';
import { PlanteleditComponent } from './components/admin/profesores/plantel/planteledit.component';
import { EgresadoComponent } from './components/pages/estudiantes/egresados/egresado/egresado.component';
import { ListadoeditComponent } from './components/admin/estudiantes/listado/listadoedit.component';

import { AuthGuard } from './guards/auth.guard';
import { EventoprogramaComponent } from './components/pages/agenda/agendaprograma/eventoprograma/eventoprograma.component';
import { EventoinstitucionalComponent } from './components/pages/agenda/agendainstitucional/eventoinstitucional/eventoinstitucional.component';
import { AgendaprogramaComponent } from './components/pages/agenda/agendaprograma/agendaprograma.component';
import { AgendainstitucionalComponent } from './components/pages/agenda/agendainstitucional/agendainstitucional.component';
import { AgendaprogramaeditComponent } from './components/admin/agendaedit/agendaprogramaedit/agendaprogramaedit.component';
import { AgendainstitucionaleditComponent } from './components/admin/agendaedit/agendainstitucionaledit/agendainstitucionaledit.component';
import { Condicion1editComponent } from './components/admin/condicion1edit/condicion1edit.component';
import { Condicion1Component } from './components/pages/condicion1/condicion1.component';
import { Condicion2Component } from './components/pages/condicion2/condicion2.component';
import { Condicion3Component } from './components/pages/condicion3/condicion3.component';
import { Condicion4Component } from './components/pages/condicion4/condicion4.component';
import { Condicion5Component } from './components/pages/condicion5/condicion5.component';
import { Condicion6Component } from './components/pages/condicion6/condicion6.component';
import { Condicion7Component } from './components/pages/condicion7/condicion7.component';
import { Condicion8Component } from './components/pages/condicion8/condicion8.component';
import { Condicion9Component } from './components/pages/condicion9/condicion9.component';

const routes: Routes = [
  // INICIO
  { path: 'inicio', component: HomeComponent },
  // CONDICIÓN 1
  { path: 'Denominacion_academica_del_programa', component: Condicion1Component },
  // CONDICIÓN 2
  { path: 'Justificacion_del_programa', component: Condicion2Component },
  // CONDICIÓN 3
  { path: 'Aspectos_curriculares', component: Condicion3Component },
  // CONDICIÓN 4
  { path: 'Organizacion_de_las_actividades_academicas_y_proceso_formativo', component: Condicion4Component },
  // CONDICIÓN 5
  { path: 'Investigacion_innovacion_y_creación_artistica_y_cultural', component: Condicion5Component },
  // CONDICIÓN 6
  { path: 'Relacion_con_el_sector_externo', component: Condicion6Component },
  // CONDICIÓN 7
  { path: 'Profesores', component: Condicion7Component },
  // CONDICIÓN 8
  { path: 'Medios_educativos', component: Condicion8Component },
  // CONDICIÓN 9
  { path: 'Infraestructura_fisica_y_tecnologica', component: Condicion9Component },
  // PROGRAMA
  { path: 'programa', component: ProgramaComponent },
  { path: 'historia', component: HistoriaComponent },
  { path: 'organigrama', component: OrganigramaComponent },
  { path: 'ubicacion', component: UbicacionComponent },
  // FORMACION
  { path: 'formacion', component: FormacionComponent },
  { path: 'plandeestudios', component: PlanestudiosComponent },
  { path: 'competencias', component: CompetenciasComponent },
  { path: 'perfil', component: PerfilComponent },
  // PROFESORES
  { path: 'docentes', component: DocentesComponent },
  { path: 'articulosProfesores', component: ArticulosprofesoresComponent },
  { path: 'docente/:id', component: DocenteComponent },
  // ACTIVDADES
  { path: 'agendaPrograma', component: AgendaprogramaComponent },
  { path: 'agendaInstitucional', component: AgendainstitucionalComponent },
  { path: 'eventoPrograma/:id', component: EventoprogramaComponent },
  { path: 'eventoInstitucional/:id', component: EventoinstitucionalComponent},
  // INVESTIGACION
  { path: 'gruposInvestigacion', component: GruposinvesComponent },
  // ESTUDIANDTES
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'estudiante/:id', component: EstudianteComponent },
  { path: 'articulosEstudiantes', component: ArticulosestudiantesComponent },
  { path: 'egresados', component: EgresadosComponent },
  { path: 'egresado/:id', component: EgresadoComponent },
  { path: 'tesis', component: TesisComponent },
  // BIBLIOTECA
  { path: 'biblioteca', component: BibliotecaComponent },



  // -------------------------------------SECCIÓN ADMINSITRADOR------------------------------------------------------



  // RUTAS ADMINISTRADOR
  { path: 'admi_login', component: LoginComponent },
  // CONDICION 1
  { path: 'admi_condicion1/:id', component: Condicion1editComponent, canActivate: [AuthGuard] },
  // INICIO
  { path: 'admi_denominacion/:id', component: DenominacionComponent, canActivate: [AuthGuard] },
  { path: 'admi_carrusel', component: CarruselComponent, canActivate: [AuthGuard] },
  { path: 'admi_carruselEdit/:id', component: CarruseleditComponent, canActivate: [AuthGuard] },
  // PROGRAMA
  { path: 'admi_programa', component: ProgramaComponent, canActivate: [AuthGuard] },
  { path: 'admi_historia/:id', component: HistoriaeditComponent, canActivate: [AuthGuard] },
  { path: 'admi_organigrama', component: OrganigramaComponent, canActivate: [AuthGuard] },
  { path: 'admi_ubicacion', component: UbicacionComponent, canActivate: [AuthGuard] },
  // FORMACION
  { path: 'admi_formacion', component: FormacionComponent, canActivate: [AuthGuard] },
  { path: 'admi_plandeestudios/:id', component: PlanestudioseditComponent, canActivate: [AuthGuard] },
  { path: 'admi_competencias', component: CompetenciasComponent, canActivate: [AuthGuard] },
  { path: 'admi_perfil', component: PerfilComponent, canActivate: [AuthGuard] },
  // PROFESORES
  { path: 'admi_docentes', component: PlanteleditComponent },
  { path: 'admi_articulosProfesores/:id', component: ArticulosproeditComponent, canActivate: [AuthGuard] },
  { path: 'admi_plantel/:id', component: PlanteleditComponent, canActivate: [AuthGuard] },
  { path: 'admi_docente/:id', component: DocenteComponent, canActivate: [AuthGuard] },
  // ACTIVDADES
  { path: 'admi_agendaInstitucional/:id', component: AgendainstitucionaleditComponent, canActivate: [AuthGuard] },
  { path: 'admi_agendaPrograma/:id', component: AgendaprogramaeditComponent, canActivate: [AuthGuard] },
  // INVESTIGACION
  { path: 'admi_gruposInvestigacion/:id', component: GruposinveseditComponent, canActivate: [AuthGuard] },
  // ESTUDIANDTES
  { path: 'admi_estudiantes', component: EstudiantesComponent, canActivate: [AuthGuard] },
  { path: 'admi_estudiante/:id', component: ListadoeditComponent, canActivate: [AuthGuard] },
  { path: 'admi_articulosEstudiantes/:id', component: ArticulosestueditComponent, canActivate: [AuthGuard] },
  { path: 'admi_egresados/:id', component: EgresadoseditComponent, canActivate: [AuthGuard] },
  { path: 'admi_tesis/:id', component: TesiseditComponent, canActivate: [AuthGuard] },
  // BIBLIOTECA
  { path: 'admi_biblioteca/:id', component: LibroseditComponent, canActivate: [AuthGuard] },
  // ROOT
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload'});
