import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, NgForm, FormControl, Validators, FormArray } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Agenda } from '../../../interfaces/agenda/agenda';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';
import { ToastService } from '../../../services/toast/toast.service';
import { ToastrService } from 'ngx-toastr';
import { AgendaprogramaService } from '../../../services/agenda/agendaprograma.service';
import { TituloService } from '../../../services/titulo/titulodinamico.service';
import { Condicion1 } from '../../../interfaces/condicion1/condicion1';
import { Condicion1Service } from '../../../services/condicion1/condicion1.service';
import { FilesService } from '../../../services/upload/files.service';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-condicion1edit',
  templateUrl: './condicion1edit.component.html',
  styleUrls: ['./condicion1edit.component.css'],
  providers: [DatePipe, NgbProgressbarConfig]
})

export class Condicion1editComponent implements OnInit {
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
  condicion1: Condicion1 = {
    nombrePrograma: '',
    tituloOtorgaPrograma: '',
    nivelAcademicoPrograma: '',
    nivelFormacionPrograma: '',
    areaConocimientoPrograma: '',
    localizacionPrograma: '',
    direccionPrograma: '',
    telefonoPrograma: '',
    faxPrograma: '',
    webPrograma: '',
    emailPrograma: '',
    entidadOferentePrograma: '',
    metodologiaPrograma: '',
    creditosPrograma: '',
    duracionPrograma: '',
    estudiantesPrograma: '',
    admisionPrograma: '',
    costoPrograma: '',
    urlCostoPrograma: '',
    normaPrograma: '',
    urlNormaPrograma: '',
    regsitroPrograma: '',
    urlRegsitroPrograma: '',
    aspecto1Programa: '',
    aspecto1File: '',
    aspecto2Programa: '',
    aspecto3Programa: '',
    aspecto4Programa: '',
  };
  // CARGA DE ARCHIVOS A FIRESTORE CONTENIDO CURRICULAR
  public mensajeArchivo = 'No hay un archivo';
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;
  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });

  constructor( private firebaseStorage: FilesService, private headerTitleService: TituloService, private myToast: ToastService, private toastr: ToastrService, public auth: AngularFireAuth, public datepipe: DatePipe, private modalService: NgbModal, private condicion1Services: Condicion1Service, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( parametros => {
      this.id = parametros.id;
      if ( this.id !== 'nuevo' ) {
        this.condicion1Services.getCondicion1( this.id ).subscribe(condicion1 => this.condicion1 = condicion1);
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
    this.headerTitleService.setTitle('1 DENOMINACIÓN ACADÉMICA DEL PROGRAMA');
    this.war = this.condicion1.nombrePrograma;
    this.fecha = this.datepipe.transform(this.today, 'dd/MM/yyyy');
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
    if ( this.condicion1.nombrePrograma !== this.war ||  this.condicion1.nombrePrograma !== this.war ) {
      this.error = false;
      console.log(this.condicion1.nombrePrograma);
      console.log(this.war);
      this.modalReference.close();
      if ( this.id === 'nuevo' ) {
        this.condicion1Services.nuevoCondicion1( this.condicion1 ).subscribe(data => {
          this.showSuccess();
          this.router.navigate(['/agenda']);
          this.modalReference.close();
        },
        error => console.error(error, this.showDanger()));
      } else {
        this.modalReference.close();
        this.condicion1Services.actualizarCondicion1( this.condicion1, this.id ).subscribe(data => {
          this.showInfo();
          this.router.navigate(['/agenda']);
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
   // Sube el archivo a Cloud Storage
   subirArchivo() {
    const archivo = this.datosFormulario.get('archivo');
    const referencia = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);
    const cargar = this.firebaseStorage.cargarCloudStorage(this.nombreArchivo, archivo);
    // Cambia el porcentaje
    cargar.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje);
      if (this.porcentaje === 100) {
        setTimeout(() => {
          referencia.getDownloadURL().subscribe((URL) => {
            this.URLPublica = URL;
            this.finalizado = true;
            this.condicion1.aspecto1File = this.URLPublica;
            return [this.URLPublica, this.finalizado, this.condicion1.aspecto1File];
          });
        }, 5000);
      }
    });
  }
  // ASPECTO 1
  // Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivo(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo = `Archivo: ${event.target.files[i].name}`;
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name);
      }
    } else {
      this.mensajeArchivo = 'No hay un archivo seleccionado';
    }
  }
}
