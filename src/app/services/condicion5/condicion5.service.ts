import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { map } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Condicion5 } from '../../interfaces/condicion5/condicion5';

@Injectable({
  providedIn: 'root'
})
export class Condicion5Service {
  condicion5RegistroURL = 'https://saces-dcs-usco-default-rtdb.firebaseio.com/condicion5.json';
  condicion5URL = 'https://saces-dcs-usco-default-rtdb.firebaseio.com/condicion5/';
  private dbPath = '/condicion5';
  condicion1Ref: AngularFireList<Condicion5> = null;

  constructor(private db: AngularFireDatabase, private http: Http ) {
    this.condicion1Ref = db.list(this.dbPath);
  }
  getAll(): AngularFireList<Condicion5> {
    return this.condicion1Ref;
  }
  nuevoCondicion5( condicion5: Condicion5) {
    const body = JSON.stringify(condicion5);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.condicion5RegistroURL, body, {headers} ).pipe(map(res => {
      return res.json();
    }));
  }
  actualizarCondicion5( condicion5: Condicion5, key$: string ) {
    const body = JSON.stringify(condicion5);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.condicion5URL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      return res.json();
    }));

  }
  getCondicion5(key$: string) {
    const url = `${ this.condicion5URL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getCondiciones5() {
    return this.http.get( this.condicion5RegistroURL ).pipe(map(res => res.json()));
  }
  borrarCondicion5( key$: string) {
    const url = `${ this.condicion5URL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}
