import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';
import { ToastrService } from 'ngx-toastr';
import { DatePipe } from '@angular/common';
import { map } from 'rxjs/operators';
import { Condicion1Service } from '../../../services/condicion1/condicion1.service';
import { TituloService } from '../../../services/titulo/titulodinamico.service';

@Component({
  selector: 'app-condicion1',
  templateUrl: './condicion1.component.html',
  styleUrls: ['./condicion1.component.css'],
  providers: [DatePipe]
})
export class Condicion1Component implements OnInit {
  filterpost = '';
  page = 1;
  pageSize = 4;
  vistaEdicion = false;
  fecha: any;
  today = new Date();
  closeResult: string;
  modalReference: any;
  acumFechas = 0;
  comodinAcum = 0;
  condiciones1: any[] = [];
  loading = true;
  anios = [];
  dias = [];
  condicion1: any;
  actualEvento = null;
  actualIndex = -1;
  constructor( private headerTitleService: TituloService, public datepipe: DatePipe, private toastr: ToastrService, public auth: AngularFireAuth, private condicion1Service: Condicion1Service, private modalService: NgbModal ) {
    this.condicion1Service.getCondiciones1().subscribe( data => {
      this.condicion1 = data;
    });
  }
  get sortData() {
    return this.condicion1.sort((a, b) => {
      // tslint:disable-next-line:whitespace
      // tslint:disable-next-line:no-angle-bracket-type-assertion
      return <any> new Date(b.fechaEvento) - <any> new Date(a.fechaEvento);
    });
  }
  elementoEliminado() {
    this.toastr.warning( '', 'Elemento eliminado', {
      timeOut: 2500
    });
  }
  showDanger() {
    this.toastr.error('Intenten nuevamente', 'Error', {
      timeOut: 2500
    });
  }

  refresh() {
    window.location.reload();
  }
  openModal(confirmar) {
    this.modalReference = this.modalService.open(confirmar, { centered: true, size: 'sm', backdrop: 'static', windowClass: 'fade-in'});
  }
  openSm(formAdmin) {
    this.modalReference = this.modalService.open(formAdmin, { size: 'sm', centered: true, backdrop: 'static' });
  }

  ngOnInit(): void {
    this.headerTitleService.setTitle('DENOMINACIÓN ACADÉMICA DEL PROGRAMA');
    for (let index = 2016; index <= (new Date()).getFullYear(); index++) {
      this.anios.push(index.toString());
    }
    this.fecha = this.datepipe.transform(this.today, 'yyyy-mm-dd');
    for (let index = 1; index <= 31; index++) {
      this.dias.push(index.toString());
    }
    this.obtenerEventos();
  }

  refreshList(): void {
    this.actualEvento = null;
    this.actualIndex = -1;
    this.obtenerEventos();
  }
  setActiveTutorial(evento, index): void {
    this.actualEvento = evento;
    this.actualIndex = index;
  }

  obtenerEventos(): void {
    this.condicion1Service.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.condicion1 = data;
    });
  }


  borrarAgenda( key$: string) {
    this.condicion1Service.borrarCondicion1(key$).subscribe( respuesta => {
      if ( respuesta ) {
        this.showDanger();
      } else {
        delete this.condicion1[key$];
        this.elementoEliminado();
        this.modalReference.close();
      }
    });
  }
}
