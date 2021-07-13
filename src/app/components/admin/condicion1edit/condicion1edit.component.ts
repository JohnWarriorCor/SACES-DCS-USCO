import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';
import { ToastrService } from 'ngx-toastr';
import { TituloService } from '../../../services/titulo/titulodinamico.service';
import { Condicion1 } from '../../../interfaces/condicion1/condicion1';
import { Condicion1Service } from '../../../services/condicion1/condicion1.service';
import { FilesService } from '../../../services/upload/files.service';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-condicion1edit',
  templateUrl: './condicion1edit.component.html',
  styleUrls: ['./condicion1edit.component.css'],
  providers: [DatePipe, NgbProgressbarConfig],
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
    registroPrograma: '',
    urlRegistroPrograma: '',
    aspecto1Programa: '',
    aspecto1File: '',
    aspecto2Programa: '',
    aspecto2File: '',
    aspecto3Programa: '',
    aspecto3File: '',
    aspecto4Programa: '',
    aspecto4File: '',
  };
  // VARIABLES CARGA DE ARCHIVO A FIRESTORE COSTO MATRICULA
  public mensajeArchivo1 = 'Seleccione el archivo';
  public datosFormulario1 = new FormData();
  public nombreArchivo1 = '';
  public URLPublica1 = '';
  public porcentaje1 = 0;
  public finalizado1 = false;
  public archivoForm1 = new FormGroup({
    archivo1: new FormControl(null, Validators.required),
  });

  // VARIABLES CARGA DE ARCHIVO A FIRESTORE NORMA PROGRAMA
  public mensajeArchivo2 = 'Seleccione el archivo';
  public datosFormulario2 = new FormData();
  public nombreArchivo2 = '';
  public URLPublica2 = '';
  public porcentaje2 = 0;
  public finalizado2 = false;
  public archivoForm2 = new FormGroup({
    archivo2: new FormControl(null, Validators.required),
  });

  // VARIABLES CARGA DE ARCHIVO A FIRESTORE REGISTRO CALIFICADO
  public mensajeArchivo3 = 'Seleccione el archivo';
  public datosFormulario3 = new FormData();
  public nombreArchivo3 = '';
  public URLPublica3 = '';
  public porcentaje3 = 0;
  public finalizado3 = false;
  public archivoForm3 = new FormGroup({
    archivo3: new FormControl(null, Validators.required),
  });

  // VARIABLES CARGA DE ARCHIVO A FIRESTORE ASPECTO 1
  public mensajeArchivo4 = 'Seleccione el archivo';
  public datosFormulario4 = new FormData();
  public nombreArchivo4 = '';
  public URLPublica4 = '';
  public porcentaje4 = 0;
  public finalizado4 = false;
  public archivoForm4 = new FormGroup({
    archivo4: new FormControl(null, Validators.required),
  });

  // VARIABLES CARGA DE ARCHIVO A FIRESTORE ASPECTO 2
  public mensajeArchivo5 = 'Seleccione el archivo';
  public datosFormulario5 = new FormData();
  public nombreArchivo5 = '';
  public URLPublica5 = '';
  public porcentaje5 = 0;
  public finalizado5 = false;
  public archivoForm5 = new FormGroup({
    archivo5: new FormControl(null, Validators.required),
  });

  // VARIABLES CARGA DE ARCHIVO A FIRESTORE ASPECTO 3
  public mensajeArchivo6 = 'Seleccione el archivo';
  public datosFormulario6 = new FormData();
  public nombreArchivo6 = '';
  public URLPublica6 = '';
  public porcentaje6 = 0;
  public finalizado6 = false;
  public archivoForm6 = new FormGroup({
    archivo6: new FormControl(null, Validators.required),
  });

  // VARIABLES CARGA DE ARCHIVO A FIRESTORE ASPECTO 4
  public mensajeArchivo7 = 'Seleccione el archivo';
  public datosFormulario7 = new FormData();
  public nombreArchivo7 = '';
  public URLPublica7 = '';
  public porcentaje7 = 0;
  public finalizado7 = false;
  public archivoForm7 = new FormGroup({
    archivo7: new FormControl(null, Validators.required),
  });

  constructor(
    private firebaseStorage: FilesService,
    private headerTitleService: TituloService,
    private toastr: ToastrService,
    public auth: AngularFireAuth,
    public datepipe: DatePipe,
    private modalService: NgbModal,
    private condicion1Services: Condicion1Service,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((parametros) => {
      this.id = parametros.id;
      if (this.id !== 'nuevo') {
        this.condicion1Services
          .getCondicion1(this.id)
          .subscribe((condicion1) => (this.condicion1 = condicion1));
      }
    });
  }
  showSuccess() {
    this.toastr.success('Acción exitosa', 'Elemento guardado', {
      timeOut: 2500,
    });
  }
  showDanger() {
    this.toastr.error('Intenten nuevamente', 'Error al guardar', {
      timeOut: 2500,
    });
  }
  showInfo() {
    this.toastr.info('', 'Elemento actualizado', {
      timeOut: 2500,
    });
  }
  imgChange() {
    this.toastr.info('', 'Imagen cambiada con éxito', {
      timeOut: 2500,
    });
  }
  imgNone() {
    this.toastr.error(
      'No puede dejar un evento sin imagen, por favor inserte un URL correspondiente',
      'Error',
      {
        timeOut: 2500,
      }
    );
  }
  showWarning() {
    this.toastr.warning('Intenten nuevamente', 'Error al actualizar', {
      timeOut: 2500,
    });
  }
  elementoAgregado() {
    this.toastr.info('', 'Elemento agregado', {
      timeOut: 2500,
    });
  }
  elementoEliminado() {
    this.toastr.warning('', 'Elemento eliminado', {
      timeOut: 2500,
    });
  }

  ngOnInit() {
    this.headerTitleService.setTitle('1 DENOMINACIÓN ACADÉMICA DEL PROGRAMA');
    this.war = this.condicion1.nombrePrograma;
    this.fecha = this.datepipe.transform(this.today, 'dd/MM/yyyy');
  }

  openModal(confirmar) {
    this.modalReference = this.modalService.open(confirmar, {
      centered: true,
      size: 'sm',
      backdrop: 'static',
      windowClass: 'fade-in',
    });
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
    if (
      this.condicion1.nombrePrograma !== this.war ||
      this.condicion1.nombrePrograma !== this.war
    ) {
      this.error = false;
      console.log(this.condicion1.nombrePrograma);
      console.log(this.war);
      this.modalReference.close();
      if (this.id === 'nuevo') {
        this.condicion1Services.nuevoCondicion1(this.condicion1).subscribe(
          (data) => {
            this.showSuccess();
            this.router.navigate(['/agenda']);
            this.modalReference.close();
          },
          (error) => console.error(error, this.showDanger())
        );
      } else {
        this.modalReference.close();
        this.condicion1Services
          .actualizarCondicion1(this.condicion1, this.id)
          .subscribe(
            (data) => {
              this.showInfo();
              this.router.navigate(['/agenda']);
              this.modalReference.close();
            },
            (error) => console.error(error, this.showWarning())
          );
      }
    } else {
      this.error = true;
      this.passError = 'Formulario incompleto.';
      this.modalReference.close();
    }
  }
  agregarNuevo(forma: NgForm) {
    this.router.navigate(['/admi_agenda', 'nuevo']);
    forma.reset({});
  }
  // URL COSTO PROGRAMA
  // Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivoUrlCostoPrograma(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo1 = `${event.target.files[i].name}`;
        this.nombreArchivo1 = event.target.files[i].name;
        this.datosFormulario1.delete('archivo1');
        this.datosFormulario1.append(
          'archivo1',
          event.target.files[i],
          event.target.files[i].name
        );
      }
    } else {
      this.mensajeArchivo1 = 'No hay un archivo';
    }
  }
  // Sube el archivo a Cloud Storage URLCOSTOPROGRAMA
  subirArchivoUrlCostoPrograma() {
    this.condicion1.urlCostoPrograma = this.nombreArchivo1;
    this.nombreArchivo1 = 'CONDICION1/SOPORTES/' + this.nombreArchivo1;
    const archivo1 = this.datosFormulario1.get('archivo1');
    const referencia1 = this.firebaseStorage.referenciaCloudStorage(
      this.nombreArchivo1
    );
    const cargar1 = this.firebaseStorage.cargarCloudStorage(
      this.nombreArchivo1,
      archivo1
    );
    // Cambia el porcentaje
    cargar1.percentageChanges().subscribe((porcentaje1) => {
      this.porcentaje1 = Math.round(porcentaje1);
      if (this.porcentaje1 === 100) {
        setTimeout(() => {
          referencia1.getDownloadURL().subscribe((URL) => {
            this.URLPublica1 = URL;
            this.finalizado1 = true;
            this.condicion1.urlCostoPrograma = this.URLPublica1;
            return [
              this.URLPublica1,
              this.finalizado1,
              this.condicion1.urlCostoPrograma,
            ];
          });
        }, 2000);
      }
    });
  }
  // URL COSTO PROGRAMA
  // Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivoUrlNormaPrograma(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo2 = `Archivo: ${event.target.files[i].name}`;
        this.nombreArchivo2 = event.target.files[i].name;
        this.datosFormulario2.delete('archivo2');
        this.datosFormulario2.append(
          'archivo2',
          event.target.files[i],
          event.target.files[i].name
        );
      }
    } else {
      this.mensajeArchivo2 = 'No hay un archivo seleccionado';
    }
  }
  // Sube el archivo a Cloud Storage URL NORMA PROGRAMA
  subirArchivoUrlNormaPrograma() {
    this.condicion1.urlNormaPrograma = this.nombreArchivo2;
    this.nombreArchivo2 = 'CONDICION1/SOPORTES/' + this.nombreArchivo2;
    const archivo2 = this.datosFormulario2.get('archivo2');
    const referencia2 = this.firebaseStorage.referenciaCloudStorage(
      this.nombreArchivo2
    );
    const cargar2 = this.firebaseStorage.cargarCloudStorage(
      this.nombreArchivo2,
      archivo2
    );
    // Cambia el porcentaje
    cargar2.percentageChanges().subscribe((porcentaje2) => {
      this.porcentaje2 = Math.round(porcentaje2);
      if (this.porcentaje2 === 100) {
        setTimeout(() => {
          referencia2.getDownloadURL().subscribe((URL) => {
            this.URLPublica2 = URL;
            this.finalizado2 = true;
            this.condicion1.urlNormaPrograma = this.URLPublica2;
            return [
              this.URLPublica2,
              this.finalizado2,
              this.condicion1.urlNormaPrograma,
            ];
          });
        }, 2000);
      }
    });
  }
  // URL NORMA PROGRAMA
  // Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivoUrlRegistroPrograma(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo3 = `Archivo: ${event.target.files[i].name}`;
        this.nombreArchivo3 = event.target.files[i].name;
        this.datosFormulario3.delete('archivo3');
        this.datosFormulario3.append(
          'archivo3',
          event.target.files[i],
          event.target.files[i].name
        );
      }
    } else {
      this.mensajeArchivo3 = 'No hay un archivo seleccionado';
    }
  }
  // Sube el archivo a Cloud Storage URL NORMA PROGRAMA
  subirArchivoUrlRegistroPrograma() {
    this.condicion1.urlRegistroPrograma = this.nombreArchivo3;
    this.nombreArchivo3 = 'CONDICION1/SOPORTES/' + this.nombreArchivo3;
    const archivo3 = this.datosFormulario3.get('archivo3');
    const referencia3 = this.firebaseStorage.referenciaCloudStorage(
      this.nombreArchivo3
    );
    const cargar3 = this.firebaseStorage.cargarCloudStorage(
      this.nombreArchivo3,
      archivo3
    );
    // Cambia el porcentaje
    cargar3.percentageChanges().subscribe((porcentaje3) => {
      this.porcentaje3 = Math.round(porcentaje3);
      if (this.porcentaje3 === 100) {
        setTimeout(() => {
          referencia3.getDownloadURL().subscribe((URL) => {
            this.URLPublica3 = URL;
            this.finalizado3 = true;
            this.condicion1.urlRegistroPrograma = this.URLPublica3;
            return [
              this.URLPublica3,
              this.finalizado3,
              this.condicion1.urlRegistroPrograma,
            ];
          });
        }, 2000);
      }
    });
  }
  // ASPECTO 1
  // Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivoAspecto1(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo4 = `Archivo: ${event.target.files[i].name}`;
        this.nombreArchivo4 = event.target.files[i].name;
        this.datosFormulario4.delete('archivo4');
        this.datosFormulario4.append(
          'archivo4',
          event.target.files[i],
          event.target.files[i].name
        );
      }
    } else {
      this.mensajeArchivo4 = 'No hay un archivo seleccionado';
    }
  }
  // Sube el archivo a Cloud Storage URL NORMA PROGRAMA
  subirArchivoAspecto1() {
    this.condicion1.aspecto1File = this.nombreArchivo4;
    this.nombreArchivo4 = 'CONDICION1/SOPORTES/ASPECTO1/' + this.nombreArchivo4;
    const archivo4 = this.datosFormulario4.get('archivo4');
    const referencia4 = this.firebaseStorage.referenciaCloudStorage(
      this.nombreArchivo4
    );
    const cargar4 = this.firebaseStorage.cargarCloudStorage(
      this.nombreArchivo4,
      archivo4
    );
    // Cambia el porcentaje
    cargar4.percentageChanges().subscribe((porcentaje4) => {
      this.porcentaje4 = Math.round(porcentaje4);
      if (this.porcentaje4 === 100) {
        setTimeout(() => {
          referencia4.getDownloadURL().subscribe((URL) => {
            this.URLPublica4 = URL;
            this.finalizado4 = true;
            this.condicion1.aspecto1File = this.URLPublica4;
            return [
              this.URLPublica4,
              this.finalizado4,
              this.condicion1.aspecto1File,
            ];
          });
        }, 2000);
      }
    });
  }
  // ASPECTO 2
  // Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivoAspecto2(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo5 = `Archivo: ${event.target.files[i].name}`;
        this.nombreArchivo5 = event.target.files[i].name;
        this.datosFormulario5.delete('archivo5');
        this.datosFormulario5.append(
          'archivo5',
          event.target.files[i],
          event.target.files[i].name
        );
      }
    } else {
      this.mensajeArchivo5 = 'No hay un archivo seleccionado';
    }
  }
  // Sube el archivo a Cloud Storage URL NORMA PROGRAMA
  subirArchivoAspecto2() {
    this.condicion1.aspecto2File = this.nombreArchivo5;
    this.nombreArchivo5 = 'CONDICION1/SOPORTES/ASPECTO2/' + this.nombreArchivo5;
    const archivo5 = this.datosFormulario5.get('archivo5');
    const referencia5 = this.firebaseStorage.referenciaCloudStorage(
      this.nombreArchivo5
    );
    const cargar5 = this.firebaseStorage.cargarCloudStorage(
      this.nombreArchivo5,
      archivo5
    );
    // Cambia el porcentaje
    cargar5.percentageChanges().subscribe((porcentaje5) => {
      this.porcentaje5 = Math.round(porcentaje5);
      if (this.porcentaje5 === 100) {
        setTimeout(() => {
          referencia5.getDownloadURL().subscribe((URL) => {
            this.URLPublica5 = URL;
            this.finalizado5 = true;
            this.condicion1.aspecto2File = this.URLPublica5;
            return [
              this.URLPublica5,
              this.finalizado5,
              this.condicion1.aspecto2File,
            ];
          });
        }, 2000);
      }
    });
  }
  // ASPECTO 3
  // Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivoAspecto3(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo6 = `Archivo: ${event.target.files[i].name}`;
        this.nombreArchivo6 = event.target.files[i].name;
        this.datosFormulario6.delete('archivo6');
        this.datosFormulario6.append(
          'archivo6',
          event.target.files[i],
          event.target.files[i].name
        );
      }
    } else {
      this.mensajeArchivo6 = 'No hay un archivo seleccionado';
    }
  }
  // Sube el archivo a Cloud Storage URL NORMA PROGRAMA
  subirArchivoAspecto3() {
    this.condicion1.aspecto3File = this.nombreArchivo6;
    this.nombreArchivo6 = 'CONDICION1/SOPORTES/ASPECTO3/' + this.nombreArchivo6;
    const archivo6 = this.datosFormulario6.get('archivo6');
    const referencia6 = this.firebaseStorage.referenciaCloudStorage(
      this.nombreArchivo6
    );
    const cargar6 = this.firebaseStorage.cargarCloudStorage(
      this.nombreArchivo6,
      archivo6
    );
    // Cambia el porcentaje
    cargar6.percentageChanges().subscribe((porcentaje6) => {
      this.porcentaje6 = Math.round(porcentaje6);
      if (this.porcentaje6 === 100) {
        setTimeout(() => {
          referencia6.getDownloadURL().subscribe((URL) => {
            this.URLPublica6 = URL;
            this.finalizado6 = true;
            this.condicion1.aspecto3File = this.URLPublica6;
            return [
              this.URLPublica6,
              this.finalizado6,
              this.condicion1.aspecto3File,
            ];
          });
        }, 2000);
      }
    });
  }
  // ASPECTO 4
  // Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivoAspecto4(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo7 = `Archivo: ${event.target.files[i].name}`;
        this.nombreArchivo7 = event.target.files[i].name;
        this.datosFormulario7.delete('archivo7');
        this.datosFormulario7.append(
          'archivo7',
          event.target.files[i],
          event.target.files[i].name
        );
      }
    } else {
      this.mensajeArchivo7 = 'No hay un archivo seleccionado';
    }
  }
  // Sube el archivo a Cloud Storage URL NORMA PROGRAMA
  subirArchivoAspecto4() {
    this.condicion1.aspecto4File = this.nombreArchivo7;
    this.nombreArchivo7 = 'CONDICION1/SOPORTES/ASPECTO4/' + this.nombreArchivo7;
    const archivo7 = this.datosFormulario7.get('archivo7');
    const referencia7 = this.firebaseStorage.referenciaCloudStorage(
      this.nombreArchivo7
    );
    const cargar7 = this.firebaseStorage.cargarCloudStorage(
      this.nombreArchivo7,
      archivo7
    );
    // Cambia el porcentaje
    cargar7.percentageChanges().subscribe((porcentaje7) => {
      this.porcentaje7 = Math.round(porcentaje7);
      if (this.porcentaje7 === 100) {
        setTimeout(() => {
          referencia7.getDownloadURL().subscribe((URL) => {
            this.URLPublica7 = URL;
            this.finalizado7 = true;
            this.condicion1.aspecto4File = this.URLPublica7;
            return [
              this.URLPublica7,
              this.finalizado7,
              this.condicion1.aspecto4File,
            ];
          });
        }, 2000);
      }
    });
  }
}
