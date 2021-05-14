import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { map } from 'rxjs/operators';
import { Listado } from '../../../interfaces/estudiantes/listado/listado';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {

  listadoRegistroURL = 'https://doctoradocienciasdelasaludusco.firebaseio.com/listadoEstudiantes.json';
  listadoURL = 'https://doctoradocienciasdelasaludusco.firebaseio.com/listadoEstudiantes/';

  constructor( private http: Http ) { }

  nuevoListado( listado: Listado) {
    const body = JSON.stringify(listado);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.listadoRegistroURL, body, {headers} ).pipe(map(res => {
      console.log(res.json());
      return res.json();
    }));
  }
  actualizarListado( listado: Listado, key$: string ) {
    const body = JSON.stringify(listado);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.listadoURL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      console.log(res.json());
      return res.json();
    }));

  }
  getListado(key$: string) {
    const url = `${ this.listadoURL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getListados() {
    return this.http.get( this.listadoRegistroURL ).pipe(map(res => res.json()));
  }
  borrarListado( key$: string) {
    const url = `${ this.listadoURL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}
