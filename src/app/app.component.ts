import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(public router:Router) {
    let infoUser = localStorage.getItem('infoUserFacebook')
    console.log('string',infoUser)
    let infoUserJson = JSON.parse(infoUser)//Convierte el string de localstorage en un JSON
    console.log('JSON',infoUserJson)
    if(infoUser != null){
      let navExtras:NavigationExtras = {
        queryParams:{
          userName:infoUserJson.userName
        }
      }
      router.navigate(['/tabs/tab2'])
    }
  }
}
