import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage({
  name: 'detail',
  segment: 'detail'
})
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  listData = [];
  id: string;
  name: string;
  nick: string;
  social: string;
  tel: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    /**
     * รับข้อมูลที่ส่งมาจากหน้า listPage
     */
    this.id = this.navParams.get('id');
    this.name = this.navParams.get('fullName');
    this.nick = this.navParams.get('nickName');
    this.social = this.navParams.get('social');
    this.tel = this.navParams.get('tel');
    console.log('data: ', this.id, this.name, this.nick, this.social, this.tel);
 
  }

  ionViewDidLoad() {  
    console.log('ionViewDidLoad DetailPage');
   
  }

  btnContact(tel){
    //console.log('SUCCESS!');
    let alert = this.alertCtrl.create({
      title: 'Tel',
      subTitle: tel,
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Call...',
          handler: data => {
            console.log('Call clicked');
          }
        }
      ]
    });
    alert.present();
  }

}
