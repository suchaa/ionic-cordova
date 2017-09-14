import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ReviewsProvider } from '../../providers/reviews/reviews';
import { ListPage } from '../../pages/list/list';

/**
 * Generated class for the AddDataPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'add-data',
  segment: 'add-data'
})
@Component({
  selector: 'page-add-data',
  templateUrl: 'add-data.html',
})
export class AddDataPage {

  listData: any;

  fullName: string;
  nickName: string;
  social: string;
  tel: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public reviewService: ReviewsProvider
  ) 
  { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDataPage');
  }

  AddData(){
    console.log('Add Success!');

    let datas = {
      fullName: this.fullName,
      nickName: this.nickName,
      social: this.social,
      tel: this.tel,
    }
    //console.log('datas: ', datas);
    
    if(datas){
      this.reviewService.addData(datas);
      this.navCtrl.push(ListPage);
    }
  }

}
