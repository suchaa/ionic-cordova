import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewDidLoad() {  
    console.log('ionViewDidLoad DetailPage');

    //this.name = this.navParams.get('name');
    //console.log(this.name);
    
  }

}
