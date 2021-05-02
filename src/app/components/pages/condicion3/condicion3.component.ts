import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../../services/titulo/titulodinamico.service';

@Component({
  selector: 'app-condicion3',
  templateUrl: './condicion3.component.html',
  styleUrls: ['./condicion3.component.css']
})
export class Condicion3Component implements OnInit {

  constructor( private headerTitleService: TituloService ) {
  }

  ngOnInit() {
    this.headerTitleService.setTitle('ASPECTOS CURRICULARES');
  }

}
