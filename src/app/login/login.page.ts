import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string;
  password: string;
  constructor(public alertController: AlertController, public router:Router) { 
    this.usuario = this.password = '';
    
  }

  async logIn() {
    if(this.usuario == 'USER1' && this.password =='1234') {
      //Las credenciales son correctas
      let navExtras:NavigationExtras = {
        queryParams:{
          userName:this.usuario
        }
      }

      let infoUser = {
        userName:this.usuario,
        correo: 'user@gmail.com',
        tipoUser: 'admin'
      }
      localStorage.setItem('infoUserFacebook',JSON.stringify(infoUser)) //stringify convierte un JSON en string
      this.router.navigate(['/tabs/tab2'], navExtras)
    }else {
      const alert = await this.alertController.create({​​
        cssClass: 'my-custom-class',
        header: 'ERROR',
        message: "LAS CREDENCIALES SON INCORRECTAS",
        buttons: ['OK']
      }​​);
      await alert.present();
    }
  }

  ngOnInit() {
  }

}
