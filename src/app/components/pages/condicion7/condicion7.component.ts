import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../../services/titulo/titulodinamico.service';

@Component({
  selector: 'app-condicion7',
  templateUrl: './condicion7.component.html',
  styleUrls: ['./condicion7.component.css']
})
export class Condicion7Component implements OnInit {

  constructor( private headerTitleService: TituloService ) {
  }

  ngOnInit() {
    this.headerTitleService.setTitle('PROFESORES');
  }

}
