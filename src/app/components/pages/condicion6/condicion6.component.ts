import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../../services/titulo/titulodinamico.service';

@Component({
  selector: 'app-condicion6',
  templateUrl: './condicion6.component.html',
  styleUrls: ['./condicion6.component.css']
})
export class Condicion6Component implements OnInit {

  constructor( private headerTitleService: TituloService ) {
  }

  ngOnInit() {
    this.headerTitleService.setTitle('RELACIÓN CON EL SECTOR EXTERNO');
  }

}
