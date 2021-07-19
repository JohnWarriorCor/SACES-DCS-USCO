import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Condicion9 } from '../../interfaces/condicion9/condicion9';

@Injectable({
  providedIn: 'root'
})
export class Condicion9Service {
  condicion9RegistroURL = 'https://saces-dcs-usco-default-rtdb.firebaseio.com/condicion9.json';
  condicion9URL = 'https://saces-dcs-usco-default-rtdb.firebaseio.com/condicion9/';
  private dbPath = '/condicion9';
  condicion1Ref: AngularFireList<Condicion9> = null;

  constructor(private db: AngularFireDatabase, private http: Http ) {
    this.condicion1Ref = db.list(this.dbPath);
  }
  getAll(): AngularFireList<Condicion9> {
    return this.condicion1Ref;
  }
  nuevoCondicion9( condicion9: Condicion9) {
    const body = JSON.stringify(condicion9);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.condicion9RegistroURL, body, {headers} ).pipe(map(res => {
      return res.json();
    }));
  }
  actualizarCondicion9( condicion9: Condicion9, key$: string ) {
    const body = JSON.stringify(condicion9);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.condicion9URL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      return res.json();
    }));

  }
  getCondicion9(key$: string) {
    const url = `${ this.condicion9URL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getCondiciones9() {
    return this.http.get( this.condicion9RegistroURL ).pipe(map(res => res.json()));
  }
  borrarCondicion9( key$: string) {
    const url = `${ this.condicion9URL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}
