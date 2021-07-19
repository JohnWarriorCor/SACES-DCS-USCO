import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Condicion3 } from '../../interfaces/condicion3/condicion3';

@Injectable({
  providedIn: 'root'
})
export class Condicion3Service {
  condicion3RegistroURL = 'https://saces-dcs-usco-default-rtdb.firebaseio.com/condicion3.json';
  condicion3URL = 'https://saces-dcs-usco-default-rtdb.firebaseio.com/condicion3/';
  private dbPath = '/condicion3';
  condicion1Ref: AngularFireList<Condicion3> = null;

  constructor(private db: AngularFireDatabase, private http: Http ) {
    this.condicion1Ref = db.list(this.dbPath);
  }
  getAll(): AngularFireList<Condicion3> {
    return this.condicion1Ref;
  }
  nuevoCondicion3( condicion3: Condicion3) {
    const body = JSON.stringify(condicion3);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.condicion3RegistroURL, body, {headers} ).pipe(map(res => {
      return res.json();
    }));
  }
  actualizarCondicion3( condicion3: Condicion3, key$: string ) {
    const body = JSON.stringify(condicion3);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.condicion3URL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      return res.json();
    }));

  }
  getCondicion3(key$: string) {
    const url = `${ this.condicion3URL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getCondiciones3() {
    return this.http.get( this.condicion3RegistroURL ).pipe(map(res => res.json()));
  }
  borrarCondicion3( key$: string) {
    const url = `${ this.condicion3URL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}
