import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DenominacionService } from '../services/home/denominacion.service';
import { CarruselService } from '../services/home/carrusel/carrusel.service';
import { ArticulosestuService } from '../services/estudiantes/articulos/articulosestu.service';
import { ArticulosproService } from '../services/profesores/articulospro/articulospro.service';
import { ListadoService } from '../services/estudiantes/listado/listado.service';
import { PlantelService } from '../services/profesores/plantel/plantel.service';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';
import { map } from 'rxjs/operators';
import { AgendaprogramaService } from '../services/agenda/agendaprograma.service';
import { AgendainstitucionalService } from '../services/agenda/agendainstitucional.service';
import { TituloService } from '../services/titulo/titulodinamico.service';


// tslint:disable-next-line:prefer-const

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  pageEstudiantes = 1;
  pageSizeEstudiantes = 4;
  pageProfesores = 1;
  pageSizeProfesores = 4;
  currentJustify = 'justified';
  g: any;
  today = new Date();
  plantelProfesores: any[] = [];
  listados: any[] = [];
  agenda: any[] = [];
  denominacion: any[] = [];
  activ: any[] = [];
  carrusel: any[] = [];
  slides: any = [[]];
  slidesAgenda: any = [[]];
  slidesEstudiante: any = [[]];
  articuloEstudiante: Array<any> = [];
  articulosPro: Array<any> = [];
  eventosPrograma: any;
  eventosInstitucionales: any;
  actualEvento = null;
  actualIndex = -1;
  // tslint:disable-next-line:no-shadowed-variable
  constructor( private headerTitleService: TituloService, public auth: AngularFireAuth, private listadoService: ListadoService, private denominaciionService: DenominacionService, private agendaProgramaService: AgendaprogramaService, private agendaInstitucionalService: AgendainstitucionalService, private modalService: NgbModal, private activatedRoute: ActivatedRoute, private router: Router, private carruselServices: CarruselService, private articulosEstuService: ArticulosestuService, private articulosProService: ArticulosproService, private plantelService: PlantelService ) {
    this.agendaProgramaService.getAgendas().subscribe( data => {
      this.agenda = data;
    });
    this.denominaciionService.getDenominaciones().subscribe( data => {
      this.denominacion = data;
    });
    this.carruselServices.getCarruseles().subscribe( data => {
      this.carrusel = data;
    });
    this.articulosEstuService.getArticuloEstudiantes().subscribe( data => {
      this.articuloEstudiante = data;
    });
    this.articulosProService.getArticuloProfesores().subscribe( data => {
      this.articulosPro = data;
    });
    this.listadoService.getListados().subscribe( data => {
      this.listados = data;
    });
    this.plantelService.getPlanteles().subscribe( data => {
      this.plantelProfesores = data;
    });
  }
  obtenerEventosPrograma(): void {
    this.agendaProgramaService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.eventosPrograma = data;
    });
  }
  obtenerEventosInstitucionales(): void {
    this.agendaInstitucionalService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.eventosInstitucionales = data;
    });
  }
  get sortDataEventoPrograma() {
    return this.eventosPrograma.sort((a, b) => {
      // tslint:disable-next-line:no-angle-bracket-type-assertion
      return <any> new Date(b.fechaEvento) - <any> new Date(a.fechaEvento);
    });
  }
  get sortDataEventoInstitucional() {
    return this.eventosInstitucionales.sort((a, b) => {
      // tslint:disable-next-line:no-angle-bracket-type-assertion
      return <any> new Date(b.fechaEvento) - <any> new Date(a.fechaEvento);
    });
  }
  ngOnInit() {
    this.headerTitleService.setTitle('Condiciones de Calidad para la Creación y Funcionamiento de Programas Académicos');
    this.obtenerEventosPrograma();
    this.obtenerEventosInstitucionales();
  }
  up() {
    window.scroll(0, 400);
  }
}
