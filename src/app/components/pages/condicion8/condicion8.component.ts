import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../../services/titulo/titulodinamico.service';

@Component({
  selector: 'app-condicion8',
  templateUrl: './condicion8.component.html',
  styleUrls: ['./condicion8.component.css']
})
export class Condicion8Component implements OnInit {

  constructor( private headerTitleService: TituloService ) {
  }

  ngOnInit() {
    this.headerTitleService.setTitle('MEDIOS EDUCATIVOS');
  }

}
