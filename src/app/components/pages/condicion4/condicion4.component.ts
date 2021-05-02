import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../../services/titulo/titulodinamico.service';

@Component({
  selector: 'app-condicion4',
  templateUrl: './condicion4.component.html',
  styleUrls: ['./condicion4.component.css']
})
export class Condicion4Component implements OnInit {

  constructor( private headerTitleService: TituloService ) {
  }

  ngOnInit() {
    this.headerTitleService.setTitle('ORGANIZACIÓN ACTIVIDADES ACADÉMICAS Y PROCESO FORMATIVO');
  }

}
