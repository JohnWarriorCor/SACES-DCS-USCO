import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Condicion7 } from '../../interfaces/condicion7/condicion7';

@Injectable({
  providedIn: 'root'
})
export class Condicion7Service {
  condicion7RegistroURL = 'https://saces-dcs-usco-default-rtdb.firebaseio.com/condicion7.json';
  condicion7URL = 'https://saces-dcs-usco-default-rtdb.firebaseio.com/condicion7/';
  private dbPath = '/condicion7';
  condicion1Ref: AngularFireList<Condicion7> = null;

  constructor(private db: AngularFireDatabase, private http: Http ) {
    this.condicion1Ref = db.list(this.dbPath);
  }
  getAll(): AngularFireList<Condicion7> {
    return this.condicion1Ref;
  }
  nuevoCondicion7( condicion7: Condicion7) {
    const body = JSON.stringify(condicion7);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.condicion7RegistroURL, body, {headers} ).pipe(map(res => {
      return res.json();
    }));
  }
  actualizarCondicion7( condicion7: Condicion7, key$: string ) {
    const body = JSON.stringify(condicion7);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.condicion7URL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      return res.json();
    }));

  }
  getCondicion7(key$: string) {
    const url = `${ this.condicion7URL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getCondiciones7() {
    return this.http.get( this.condicion7RegistroURL ).pipe(map(res => res.json()));
  }
  borrarCondicion7( key$: string) {
    const url = `${ this.condicion7URL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}
