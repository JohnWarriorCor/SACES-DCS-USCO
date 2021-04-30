import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Condicion1 } from '../../interfaces/condicion1/condicion1';

@Injectable({
  providedIn: 'root'
})
export class Condicion1Service {
  condicion1RegistroURL = 'https://saces-dcs-usco-default-rtdb.firebaseio.com/condicion1.json';
  condicion1URL = 'https://saces-dcs-usco-default-rtdb.firebaseio.com/condicion1/';
  private dbPath = '/condicion1';
  condicion1Ref: AngularFireList<Condicion1> = null;

  constructor(private db: AngularFireDatabase, private http: Http ) {
    this.condicion1Ref = db.list(this.dbPath);
  }
  getAll(): AngularFireList<Condicion1> {
    return this.condicion1Ref;
  }
  nuevoCondicion1( condicion1: Condicion1) {
    const body = JSON.stringify(condicion1);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.condicion1RegistroURL, body, {headers} ).pipe(map(res => {
      return res.json();
    }));
  }
  actualizarCondicion1( condicion1: Condicion1, key$: string ) {
    const body = JSON.stringify(condicion1);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.condicion1URL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      return res.json();
    }));

  }
  getCondicion1(key$: string) {
    const url = `${ this.condicion1URL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getCondiciones1() {
    return this.http.get( this.condicion1RegistroURL ).pipe(map(res => res.json()));
  }
  borrarCondicion1( key$: string) {
    const url = `${ this.condicion1URL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}
