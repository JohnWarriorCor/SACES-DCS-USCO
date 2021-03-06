import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, NgForm } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CarruselService } from '../../../../services/home/carrusel/carrusel.service';
import { Carrusel } from '../../../../interfaces/home/carrusel/carrusel';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';
import { ToastService } from '../../../../services/toast/toast.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-carruseledit',
  templateUrl: './carruseledit.component.html',
  styleUrls: ['./carruseledit.component.css'],
  providers: [DatePipe]
})
export class CarruseleditComponent implements OnInit {
  today = new Date();
  fecha: any;
  closeResult: string;
  defaultImgUrl: any;
  urlImage: any;
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
  carrusel: Carrusel = {
    titulo: '',
    urlImg: '',
    urlInfo: '',
    fecha: '',
    info: '',
  };


  // tslint:disable-next-line:max-line-length
  constructor(  private myToast: ToastService, private toastr: ToastrService, public auth: AngularFireAuth, public datepipe: DatePipe, private modalService: NgbModal, private carruselServices: CarruselService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( parametros => {
      this.id = parametros.id;
      if ( this.id !== 'nuevo' ) {
        this.carruselServices.getCarrusel( this.id ).subscribe(carrusel => this.carrusel = carrusel);
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

  ngOnInit() {
    this.war = this.carrusel.titulo;
    if ( this.carrusel.urlImg === null || this.carrusel.urlImg === '' ) {
      // tslint:disable-next-line:max-line-length
      this.defaultImgUrl = 'https://firebasestorage.googleapis.com/v0/b/doctoradocienciasdelasaludusco.appspot.com/o/NO%20MODIFICAR%2Fcarrusel_prueba.jpg?alt=media&token=b2e86559-cf35-4541-9cf6-9b81415817ab';
      this.carrusel.urlImg = this.defaultImgUrl;
      return this.carrusel.urlImg;
    }
    this.fecha = this.datepipe.transform(this.today, 'dd/MM/yyyy');
  }

  openModal(confirmar) {
    this.modalReference = this.modalService.open(confirmar, { centered: true, size: 'sm', backdrop: 'static', windowClass: 'fade-in'});
  }

  changeImg(urlImage) {
    console.log(urlImage);
    // tslint:disable-next-line:max-line-length
    if (urlImage === '' || urlImage === null) {
      this.defaultImgUrl = urlImage;
      this.alertBool = true;
      this.imgError = 'No puede dejar un evento sin imagen, por favor inserte un URL correspondiente';
    } else {
      this.alertBool = false;
      this.defaultImgUrl = urlImage;
      return this.defaultImgUrl;
    }
  }

  guardar() {
    if ( this.carrusel.titulo !== this.war ||  this.carrusel.titulo !== this.war ) {
      this.error = false;
      console.log(this.carrusel.titulo);
      console.log(this.war);
      this.modalReference.close();
      if ( this.id === 'nuevo' ) {
        this.carruselServices.nuevoCarrusel( this.carrusel ).subscribe(data => {
          this.showSuccess();
          this.router.navigate(['/admi_carrusel']);
          this.modalReference.close();
        },
        error => console.error(error, this.showDanger()));
      } else {
        this.modalReference.close();
        this.carruselServices.actualizarCarrusel( this.carrusel, this.id ).subscribe(data => {
          this.showInfo();
          this.router.navigate(['/admi_carrusel']);
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
  agregarNuevo( forma: NgForm) {
    this.router.navigate(['/admi_agenda', 'nuevo']);
    forma.reset({});
  }
}
