import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListadoService } from '../../../../services/estudiantes/listado/listado.service';
import { Listado } from '../../../../interfaces/estudiantes/listado/listado';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';
import { ToastService } from '../../../../services/toast/toast.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listadoedit',
  templateUrl: './listadoedit.component.html',
  styleUrls: ['./listadoedit.component.css'],
  providers: [DatePipe]
})
export class ListadoeditComponent implements OnInit {
  today = new Date();
  fecha: any;
  closeResult: string;
  defaultImgUrl: any;
  urlimg: any;
  war: any;
  modalReference: any;
  error = false;
  passError = '';
  imgError = '';
  alertBool = false;
  forma: FormGroup;
  controls: any;
  nuevo = false;
  id: string;
  newAttribute: any = {};
  listado: Listado = {
    foto: '',
    nombre: '',
    sintesis: '',
    fieldArray: [],
    correo: '',
    fecha: '',
    cvlac: '',
    orcid: '',
  };

   // tslint:disable-next-line:max-line-length
   constructor( private myToast: ToastService, private toastr: ToastrService, public auth: AngularFireAuth, public datepipe: DatePipe, private modalService: NgbModal, private listadoService: ListadoService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( parametros => {
      this.id = parametros.id;
      if ( this.id !== 'nuevo' ) {
        this.listadoService.getListado( this.id ).subscribe(listado => this.listado = listado);
      }
    });
  }
  showSuccess() {
    this.toastr.success('Acción exitosa', 'Elemento guardado', {
      timeOut: 2500
    });
  }
  showDanger() {
    this.toastr.error('Intenten nuevamente', 'Error al guardar', {
      timeOut: 2500
    });
  }
  showInfo() {
    this.toastr.info( '', 'Elemento actualizado', {
      timeOut: 2500
    });
  }
  showWarning() {
    this.toastr.warning( 'Intenten nuevamente', 'Error al actualizar', {
      timeOut: 2500
    });
  }
  elementoAgregado() {
    this.toastr.info( '', 'Elemento agregado', {
      timeOut: 2500
    });
  }
  elementoEliminado() {
    this.toastr.warning( '', 'Elemento eliminado', {
      timeOut: 2500
    });
  }
  imgChange() {
    this.toastr.info( '', 'Imagen cambiada con éxito', {
      timeOut: 2500
    });
  }
  imgNone() {
    this.toastr.error('No puede dejar un evento sin imagen, por favor inserte un URL correspondiente', 'Error', {
      timeOut: 2500
    });
  }

  ngOnInit() {
    this.war = this.listado.nombre;
    if ( this.listado.foto === null || this.listado.foto === '' ) {
      // tslint:disable-next-line:max-line-length
      this.defaultImgUrl = 'https://firebasestorage.googleapis.com/v0/b/doctoradocienciasdelasaludusco.appspot.com/o/NO%20MODIFICAR%2Fperfil_prueba.png?alt=media&token=d1fff1b2-b9eb-4536-866a-ba6720887f02';
      this.listado.foto = this.defaultImgUrl;
      return this.listado.foto;
    }
    this.fecha = this.datepipe.transform(this.today, 'dd/MM/yyyy');
  }
  addFieldValue() {
    this.listado.fieldArray.push(this.newAttribute);
    this.elementoAgregado();
    this.newAttribute = {};
  }

   deleteFieldValue(index) {
    this.listado.fieldArray.splice(index, 1);
    this.elementoEliminado();
  }
  imgMujer() {
    this.listado.foto = 'https://firebasestorage.googleapis.com/v0/b/doctoradocienciasdelasaludusco.appspot.com/o/NO%20MODIFICAR%2Fperfil_mujer.png?alt=media&token=62e21016-cb7e-4bcc-a1c6-af5ee2f71188';
    this.imgChange();
  }
  imgHombre() {
    this.listado.foto = 'https://firebasestorage.googleapis.com/v0/b/doctoradocienciasdelasaludusco.appspot.com/o/NO%20MODIFICAR%2Fperfil_hombre.png?alt=media&token=6a9058fa-e8a5-4d75-83de-202c11ea1053';
    this.imgChange();
  }
  openModal(confirmar) {
    this.modalReference = this.modalService.open(confirmar, { centered: true, size: 'sm', backdrop: 'static', windowClass: 'fade-in'});
  }
  changeImg(urlimg) {
    console.log(urlimg);
    // tslint:disable-next-line:max-line-length
    if (urlimg === '' || urlimg === null) {
      this.defaultImgUrl = urlimg;
      this.alertBool = true;
      this.imgNone();
    } else {
      this.alertBool = false;
      this.defaultImgUrl = urlimg;
      this.imgChange();
      return this.defaultImgUrl;
    }
  }
  guardar() {
    if ( this.listado.nombre !== this.war ||  this.listado.nombre !== this.war ) {
      this.error = false;
      console.log(this.listado.nombre);
      console.log(this.war);
      // this.modalReference.close();
      if ( this.id === 'nuevo' ) {
        this.listadoService.nuevoListado( this.listado ).subscribe(data => {
          this.showSuccess();
          this.modalReference.close();
          this.router.navigate(['/estudiantes']);
        },
        error => console.error(error, this.showDanger()));
      } else {
        this.modalReference.close();
        this.listadoService.actualizarListado( this.listado, this.id ).subscribe(data => {
          this.showInfo();
          this.router.navigate(['/estudiante', this.id]);
          this.modalReference.close();
        },
        error => console.error(error, this.showWarning()));
      }
    } else {
      this.error = true;
      this.passError = 'Formulario incompleto.';
      this.modalReference.close();
    }
  }
  up() {
    window.scroll(0, 400);
  }
  agregarNuevo( forma: NgForm ) {
    this.router.navigate(['/admi_estudiante', 'nuevo']);
    forma.reset({});
    this.up();
  }

}
