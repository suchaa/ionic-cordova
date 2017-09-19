import { Component } from '@angular/core';
import {
  IonicPage,
  App,
  NavController,
  NavParams,
  ViewController,
  AlertController
} from 'ionic-angular';
import { ReviewsProvider } from '../../providers/reviews/reviews';
//import { ListPage } from '../../pages/list/list';

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

  mode: string = "ADD";
  listData: any;
  id: string;
  fullName: string;
  nickName: string;
  social: string;
  tel: string;

  constructor(
    public app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    public reviewService: ReviewsProvider,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController
  ) {

    this.id = this.navParams.get('id');
    this.fullName = this.navParams.get('fullName');
    this.nickName = this.navParams.get('nickName');
    this.social = this.navParams.get('social');
    this.tel = this.navParams.get('tel');
    console.log('data: ', this.id, this.fullName, this.nickName, this.social, this.tel);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDataPage');

    if (this.id) {
      let id = this.id;

      this.mode = 'EDIT';
      this.id = id;
    }

  }

  AddData() {
    let datas = {
      fullName: this.fullName,
      nickName: this.nickName,
      social: this.social,
      tel: this.tel,
    }

    let prompt = this.alertCtrl.create({
      title: 'To save data',
      message: datas.fullName,
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('click cancel!');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('click save!');
            if (this.mode === "EDIT") {
              this.reviewService.updateData(this.id, datas).subscribe(
                data => {
                  console.log('Edit Success!');
                  this.viewCtrl.dismiss();
                });
            } else {
              this.reviewService.addData(datas);
              //this.navCtrl.setRoot(ListPage);
              //this.app.getRootNav().setRoot(ListPage);
              console.log('Add Success!');
              this.viewCtrl.dismiss();
            }
          }
        }
      ]
    });
    prompt.present();

  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
