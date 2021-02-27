import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  usuario:string;
  constructor(public activeRoute:ActivatedRoute, public router:Router, public userService: UsuarioService) {
    this.activeRoute.queryParams.subscribe(parametros =>{
      this.usuario = parametros.userName;
    }) 
  }

  logOut() {
    localStorage.removeItem('infoUserFacebook');
    this.router.navigate(['/'])
  }

}
