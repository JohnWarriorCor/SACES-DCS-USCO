import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../../services/titulo/titulodinamico.service';

@Component({
  selector: 'app-condicion9',
  templateUrl: './condicion9.component.html',
  styleUrls: ['./condicion9.component.css']
})
export class Condicion9Component implements OnInit {

  constructor( private headerTitleService: TituloService ) {
  }

  ngOnInit() {
    this.headerTitleService.setTitle('INFRAESTRUCTURA FÍSICA Y TECNOLÓGICA');
  }

}
