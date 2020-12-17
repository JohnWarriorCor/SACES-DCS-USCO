import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { DocentesComponent } from './components/pages/docentes/docentes.component';
import { FormacionComponent } from './components/pages/formacion/formacion.component';
import { AgendaComponent } from './components/pages/agenda/agenda.component';
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
import { AgendaeditComponent } from './components/admin/agendaedit/agendaedit.component';
import { GruposinveseditComponent } from './components/admin/gruposinvesedit/gruposinvesedit.component';
import { EventoComponent } from './components/pages/agenda/evento/evento.component';
import { DenominacionComponent } from './components/admin/home/denominacion/denominacion.component';
import { CarruselComponent } from './components/admin/home/carrusel/carrusel.component';
import { CarruseleditComponent } from './components/admin/home/carrusel/carruseledit.component';
import { PlanestudioseditComponent } from './components/admin/formacion/planestudiosedit/planestudiosedit.component';

const routes: Routes = [
  // INICIO
  { path: 'inicio', component: HomeComponent },
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
  { path: 'agenda', component: AgendaComponent },
  { path: 'evento/:id', component: EventoComponent },
  // INVESTIGACION
  { path: 'gruposinvestigacion', component: GruposinvesComponent },
  // ESTUDIANDTES
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'estudiante/:id', component: EstudianteComponent },
  { path: 'articulosEstudiantes', component: ArticulosestudiantesComponent },
  { path: 'egresados', component: EgresadosComponent },
  { path: 'tesis', component: TesisComponent },
  // BIBLIOTECA
  { path: 'biblioteca', component: BibliotecaComponent },



  // -------------------------------------SECCIÓN ADMINSITRADOR------------------------------------------------------



  // RUTAS ADMINISTRADOR
  { path: 'adminlogin', component: LoginComponent },
  // INICIO
  { path: 'admi_denominacion/:id', component: DenominacionComponent },
  { path: 'admi_carrusel', component: CarruselComponent },
  { path: 'admi_carruselEdit/:id', component: CarruseleditComponent },
  // PROGRAMA
  { path: 'admi_programa', component: ProgramaComponent },
  { path: 'admi_historia/:id', component: HistoriaeditComponent },
  { path: 'admi_organigrama', component: OrganigramaComponent },
  { path: 'admi_ubicacion', component: UbicacionComponent },
  // FORMACION
  { path: 'admi_formacion', component: FormacionComponent },
  { path: 'admi_plandeestudios', component: PlanestudioseditComponent },
  { path: 'admi_competencias', component: CompetenciasComponent },
  { path: 'admi_perfil', component: PerfilComponent },
  // PROFESORES
  { path: 'admi_docentes', component: DocentesComponent },
  { path: 'admi_articulosProfesores', component: ArticulosprofesoresComponent },
  { path: 'admi_docente/:id', component: DocenteComponent },
  // ACTIVDADES
  { path: 'admi_agenda/:id', component: AgendaeditComponent },
  // INVESTIGACION
  { path: 'admi_gruposinvestigacion/:id', component: GruposinveseditComponent },
  // ESTUDIANDTES
  { path: 'admi_estudiantes', component: EstudiantesComponent },
  { path: 'admi_estudiante/:id', component: EstudianteComponent },
  { path: 'admi_articulosEstudiantes', component: ArticulosestudiantesComponent },
  { path: 'admi_egresados', component: EgresadosComponent },
  { path: 'admi_tesis', component: TesisComponent },
  // BIBLIOTECA
  { path: 'biblioteca', component: BibliotecaComponent },
  // ROOT
  { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload'});
