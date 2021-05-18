import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import 'firebase/auth';
import { TituloService } from '../../../services/titulo/titulodinamico.service';
import { ToastrService } from 'ngx-toastr';
import { auth } from 'firebase';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  key: any;
  user: any;
  opciones = false;
  ajustes = true;
  validar = false;
  error = false;
  passError = '';
  vistaEdicion = false;
  viewRecuperar = true;
  viewPass = false;
  hidePass = true;
  email = '';
  pass = '';
  title = '';

  constructor(
    private toastr: ToastrService,
    private headerTitleService: TituloService,
    // tslint:disable-next-line:no-shadowed-variable
    public auth: AngularFireAuth,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  showSuccess() {
    this.toastr.success('Acceso exitoso', 'Bienvenido', {
      timeOut: 2500,
    });
  }
  showExit() {
    this.toastr.error('', 'Sesión cerrada', {
      timeOut: 2500,
    });
  }
  showInfo(email) {
    this.toastr.info(email, 'Mensaje enviado al correo:', {
      timeOut: 2500,
    });
  }
  showWarning() {
    this.toastr.warning(
      'Correo o contraseña incorrectos',
      'Verifique las credenciales',
      {
        timeOut: 2500,
      }
    );
  }
  showWarningMail() {
    this.toastr.warning('Correo no registrado', 'Verifique el correo escrito', {
      timeOut: 2500,
    });
  }
  recuperar() {
    this.viewRecuperar = false;
  }
  view() {
    this.viewPass = true;
    this.hidePass = false;
  }
  hide() {
    this.viewPass = false;
    this.hidePass = true;
  }

  ngOnInit() {
    this.headerTitleService.setTitle('INICIO DE SESIÓN');
  }
  loginWith() {
    // tslint:disable-next-line:new-parens
    this.auth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.auth.auth.signOut();
    this.showExit();
  }
  showData() {
    this.auth.user.subscribe((res) => {
      console.log(res);
    });
  }
  passEmail() {
    this.auth.auth
      .sendPasswordResetEmail(this.email)
      .then((res) => {
        console.log(res);
        this.showInfo(this.email);
      })
      .catch((err) => console.log('Error cl:', err, this.showWarningMail()));
  }
  customLogin() {
    this.auth.auth
      .signInWithEmailAndPassword(this.email, this.pass)
      .then((res) => {
        console.log(res);
        this.showSuccess();
        this.router.navigate(['/inicio']);
      })
      .catch((err) => console.log('Error cl:', err, this.showWarning()));
  }
}
