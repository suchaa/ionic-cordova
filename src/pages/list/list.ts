import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD

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
=======
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { DetailPage } from '../../pages/detail/detail';
//import { HomePage } from '../../pages/home/home';
//import { LoginPage } from '../../pages/login/login';
//import { AppModule } from '../../app/app.module';

@IonicPage({
  name: 'list',
  segment: 'list'
>>>>>>> cd26feafae6247cee5e63b85cdee05345935d2e0
})
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

<<<<<<< HEAD
  rootPage = LoginPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

  gotoPage() {
    console.log('SUCCESS!');
    this.navCtrl.push(LoginPage);
=======
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  // id: string;
  // fullName: string;
  // nickName: string;
  // social: string;
  // tel: string;
  listData = [
    {
      id: '1',
      fullName: 'Suchada Chaiyakot',
      nickName: 'Su',
      social: 'facebook.com/suchada',
      tel: '099999999'
    },
    {
      id: '2',
      fullName: 'Somying Jaidee',
      nickName: 'Ying',
      social: 'facebook.com/xxx',
      tel: '088888888'
    },
    {
      id: '3',
      fullName: 'Somchai Jaidee',
      nickName: 'Chai',
      social: 'facebook.com/yyy',
      tel: '077777777'
    }
  ];

  ionViewDidLoad() {
    console.log(this.listData);
    console.log('ionViewDidLoad ListPage');

    // this.http.get('this.listData').map(res => res.json()).subscribe(
    //   data => {
    //     this.fullname = data.data.fullName;
    //     console.log(this.fullname);

    //   })
  }

  goToMyPage(data) {
    console.log(data);
    // console.log(data.fullName);
    // console.log(data.nickName);
    // console.log(data.social);
    // console.log(data.tel);
    console.log('SUCCESS');

    // go to the detail component
    this.navCtrl.push('detail', DetailPage
      // ,{
      //   name: 'xxx',
      //   nick: 'x',
      //   social: 'xx',
      //   tel: 'xxxxxxxxx'
      // }
    )
>>>>>>> cd26feafae6247cee5e63b85cdee05345935d2e0
  }

}
