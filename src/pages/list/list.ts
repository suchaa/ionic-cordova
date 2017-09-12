import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { LoginPage } from '../login/login';
/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
 /*  name: 'login',
  segment: 'list' */
})
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  rootPage = LoginPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  gotoPage() {
    console.log('SUCCESS!');
    this.navCtrl.push(LoginPage);
  }

}
