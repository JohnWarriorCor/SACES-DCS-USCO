import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Condicion8 } from '../../interfaces/condicion8/condicion8';

@Injectable({
  providedIn: 'root'
})
export class Condicion8Service {
  condicion8RegistroURL = 'https://saces-dcs-usco-default-rtdb.firebaseio.com/condicion8.json';
  condicion8URL = 'https://saces-dcs-usco-default-rtdb.firebaseio.com/condicion8/';
  private dbPath = '/condicion8';
  condicion1Ref: AngularFireList<Condicion8> = null;

  constructor(private db: AngularFireDatabase, private http: Http ) {
    this.condicion1Ref = db.list(this.dbPath);
  }
  getAll(): AngularFireList<Condicion8> {
    return this.condicion1Ref;
  }
  nuevoCondicion8( condicion8: Condicion8) {
    const body = JSON.stringify(condicion8);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.condicion8RegistroURL, body, {headers} ).pipe(map(res => {
      return res.json();
    }));
  }
  actualizarCondicion8( condicion8: Condicion8, key$: string ) {
    const body = JSON.stringify(condicion8);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.condicion8URL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      return res.json();
    }));

  }
  getCondicion8(key$: string) {
    const url = `${ this.condicion8URL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getCondiciones8() {
    return this.http.get( this.condicion8RegistroURL ).pipe(map(res => res.json()));
  }
  borrarCondicion8( key$: string) {
    const url = `${ this.condicion8URL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}
