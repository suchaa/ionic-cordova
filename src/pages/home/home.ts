
import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController } from 'ionic-angular';

@IonicPage({
  name: 'home',
  segment: 'home'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {
    //menu.enable(true);
  }
  
  //  openPage(){
  //   console.log('SUCCESS');
    
  // }

}
