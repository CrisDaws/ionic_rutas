import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  userName: string;
  correo: string;
  tipoUser: string;

  objetos:Array<any>
  constructor() {
    this.objetos=[
      {nombre:'Mesa',color: 'Cafe'},
      {nombre:'Estufa',color: 'Gris'},
      {nombre:'Libreta',color: 'Rosa'},
      {nombre:'Silla',color: 'Azul'}
    ]
  }
  popObjetos(){
    this.objetos.pop()
  }
}
