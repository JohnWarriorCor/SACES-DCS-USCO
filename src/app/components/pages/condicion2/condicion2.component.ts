import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../../services/titulo/titulodinamico.service';

@Component({
  selector: 'app-condicion2',
  templateUrl: './condicion2.component.html',
  styleUrls: ['./condicion2.component.css']
})
export class Condicion2Component implements OnInit {

  constructor( private headerTitleService: TituloService ) {
  }

  ngOnInit() {
    this.headerTitleService.setTitle('JUSTIFICACIÓN DEL PROGRAMA');
  }

}
