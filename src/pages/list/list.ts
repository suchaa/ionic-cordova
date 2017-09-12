import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailPage } from '../../pages/detail/detail';
import { HomePage } from '../../pages/home/home';
import { LoginPage } from '../../pages/login/login';
//import { AppModule } from '../../app/app.module';

@IonicPage({
  name: 'list',
  segment: 'list' 
})
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  goToMyPage(){
    console.log('SUCCESS');
    // go to the detail component
    this.navCtrl.push('detail',DetailPage);
  }

  goToMyPage2() {
    console.log('SUCCESS');
    // go to the login component
    this.navCtrl.push('login',LoginPage);
  }

  goToMyPage3() {
    console.log('SUCCESS');
    // go to the home component
    this.navCtrl.push('home',HomePage);
  }
  
  
}
