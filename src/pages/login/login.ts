import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

<<<<<<< HEAD
@IonicPage()
=======
@IonicPage({
  name: 'login',
  segment: 'login'
})
>>>>>>> cd26feafae6247cee5e63b85cdee05345935d2e0
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

<<<<<<< HEAD
=======

>>>>>>> cd26feafae6247cee5e63b85cdee05345935d2e0
}
