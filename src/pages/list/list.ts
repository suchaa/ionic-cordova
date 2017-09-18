import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, LoadingController } from 'ionic-angular';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';
import { DetailPage } from '../../pages/detail/detail';
import { AddDataPage } from '../../pages/add-data/add-data';
//import { HomePage } from '../../pages/home/home';
//import { LoginPage } from '../../pages/login/login';
//import { AppModule } from '../../app/app.module';
import { ReviewsProvider } from '../../providers/reviews/reviews';

@IonicPage({
  name: 'list',
  segment: 'list'
})
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  listData: any;
  //searchText = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public reviewService: ReviewsProvider,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController
  ) {

  }

  // id: string;
  // fullName: string;
  // nickName: string;
  // social: string;
  // tel: string;

  /*   listData = [
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
    ]; */

  ionViewDidLoad() {
    //console.log('data:', this.listData);
    console.log('ionViewDidLoad ListPage');

    this.loadData();
    //this.presentLoading();
  }

  loadData() {
    console.log('data test');
    this.reviewService.getReviews().then((data) => {
      console.log('data:', data);
      this.listData = data;
    });
  }

  // presentLoading() {
  //   let loader = this.loadingCtrl.create({
  //     content: "Please wait...",
  //     duration: 3000
  //   });
  //   loader.present().then(() => {
  //     this.loadData();
  //     loader.dismiss();
  //   });
  // }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      this.loadData();
      refresher.complete();
    }, 2000);

  }

  goToDetailPage(data) {
    //console.log(data);
    console.log('SUCCESS!');

    /**
     * go to the detail component && ส่งข้อมูลไปหน้า DetailPage
     */
    this.navCtrl.push(DetailPage, {
      id: data._id,
      fullName: data.fullName,
      nickName: data.nickName,
      social: data.social,
      tel: data.tel
    });
  }

  goToAddDataPage() {
    let modal = this.modalCtrl.create(AddDataPage);
    modal.present();
    //this.navCtrl.push(AddDataPage);
  }

  deleteReview(data) {
    //Remove locally
    let index = this.listData.indexOf(data);

    if (index > -1) {
      this.listData.splice(index, 1);
    }

    //Remove from database
    this.reviewService.deleteData(data._id);

    let toast = this.toastCtrl.create({
      message: 'Delete successfully.',
      duration: 3000,
      showCloseButton: true,
      closeButtonText: 'Ok'
    });
    toast.present();
  }

}
