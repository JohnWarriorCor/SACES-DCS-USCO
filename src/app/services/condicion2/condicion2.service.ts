import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Condicion2 } from '../../interfaces/condicion2/condicion2';

@Injectable({
  providedIn: 'root'
})
export class Condicion2Service {
  condicion2RegistroURL = 'https://saces-dcs-usco-default-rtdb.firebaseio.com/condicion2.json';
  condicion2URL = 'https://saces-dcs-usco-default-rtdb.firebaseio.com/condicion2/';
  private dbPath = '/condicion2';
  condicion1Ref: AngularFireList<Condicion2> = null;

  constructor(private db: AngularFireDatabase, private http: Http ) {
    this.condicion1Ref = db.list(this.dbPath);
  }
  getAll(): AngularFireList<Condicion2> {
    return this.condicion1Ref;
  }
  nuevoCondicion2( condicion2: Condicion2) {
    const body = JSON.stringify(condicion2);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.condicion2RegistroURL, body, {headers} ).pipe(map(res => {
      return res.json();
    }));
  }
  actualizarCondicion2( condicion2: Condicion2, key$: string ) {
    const body = JSON.stringify(condicion2);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.condicion2URL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      return res.json();
    }));

  }
  getCondicion2(key$: string) {
    const url = `${ this.condicion2URL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getCondiciones2() {
    return this.http.get( this.condicion2RegistroURL ).pipe(map(res => res.json()));
  }
  borrarCondicion2( key$: string) {
    const url = `${ this.condicion2URL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}
