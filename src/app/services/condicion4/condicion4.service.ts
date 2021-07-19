import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Condicion4 } from '../../interfaces/condicion4/condicion4';

@Injectable({
  providedIn: 'root'
})
export class Condicion4Service {
  condicion4RegistroURL = 'https://saces-dcs-usco-default-rtdb.firebaseio.com/condicion4.json';
  condicion4URL = 'https://saces-dcs-usco-default-rtdb.firebaseio.com/condicion4/';
  private dbPath = '/condicion4';
  condicion1Ref: AngularFireList<Condicion4> = null;

  constructor(private db: AngularFireDatabase, private http: Http ) {
    this.condicion1Ref = db.list(this.dbPath);
  }
  getAll(): AngularFireList<Condicion4> {
    return this.condicion1Ref;
  }
  nuevoCondicion4( condicion4: Condicion4) {
    const body = JSON.stringify(condicion4);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.condicion4RegistroURL, body, {headers} ).pipe(map(res => {
      return res.json();
    }));
  }
  actualizarCondicion4( condicion4: Condicion4, key$: string ) {
    const body = JSON.stringify(condicion4);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.condicion4URL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      return res.json();
    }));

  }
  getCondicion4(key$: string) {
    const url = `${ this.condicion4URL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getCondiciones4() {
    return this.http.get( this.condicion4RegistroURL ).pipe(map(res => res.json()));
  }
  borrarCondicion4( key$: string) {
    const url = `${ this.condicion4URL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}
