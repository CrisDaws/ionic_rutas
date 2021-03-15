import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LibrosService {
  urlBase = 'http://localhost:3000/api/libros/';
  libros:any;
  constructor(private http: HttpClient) {
    this.libros=[]
  }

  obtenerLibros() {
    this.http.get(this.urlBase).subscribe(
      (res) => {
        console.log('Los libros son', res);
        this.libros = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
