import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Condicion6 } from '../../interfaces/condicion6/condicion6';

@Injectable({
  providedIn: 'root'
})
export class Condicion6Service {
  condicion6RegistroURL = 'https://saces-dcs-usco-default-rtdb.firebaseio.com/condicion6.json';
  condicion6URL = 'https://saces-dcs-usco-default-rtdb.firebaseio.com/condicion6/';
  private dbPath = '/condicion6';
  condicion1Ref: AngularFireList<Condicion6> = null;

  constructor(private db: AngularFireDatabase, private http: Http ) {
    this.condicion1Ref = db.list(this.dbPath);
  }
  getAll(): AngularFireList<Condicion6> {
    return this.condicion1Ref;
  }
  nuevoCondicion6( condicion6: Condicion6) {
    const body = JSON.stringify(condicion6);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.condicion6RegistroURL, body, {headers} ).pipe(map(res => {
      return res.json();
    }));
  }
  actualizarCondicion6( condicion6: Condicion6, key$: string ) {
    const body = JSON.stringify(condicion6);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.condicion6URL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      return res.json();
    }));

  }
  getCondicion6(key$: string) {
    const url = `${ this.condicion6URL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getCondiciones6() {
    return this.http.get( this.condicion6RegistroURL ).pipe(map(res => res.json()));
  }
  borrarCondicion6( key$: string) {
    const url = `${ this.condicion6URL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}
