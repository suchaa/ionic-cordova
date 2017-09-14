import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { DetailPage } from '../../pages/detail/detail';
//import { HomePage } from '../../pages/home/home';
//import { LoginPage } from '../../pages/login/login';
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
      social: 'facebook.com/somying',
      tel: '088888888'
    },
    {
      id: '3',
      fullName: 'Somchai Jaidee',
      nickName: 'Chai',
      social: 'facebook.com/somchai',
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
    //console.log(data);
    console.log('SUCCESS!');
 
    //this.navCtrl.push('detail', DetailPage, data);

    /**
     * go to the detail component && ส่งข้อมูลไปหน้า DetailPage
     */
    this.navCtrl.push( DetailPage, {
      id: data.id,
      fullName: data.fullName,
      nickName: data.nickName,
      social: data.social,
      tel: data.tel
    });
  }

}
