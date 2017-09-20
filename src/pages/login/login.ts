import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController,
  ViewController,
  Platform 
} from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { HomePage } from '../../pages/home/home';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'login',
  segment: 'login'
})
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  username: string;
  password: string;

  pet: string = "signin";
  isSegment: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loginService: LoginProvider,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController,
    platform: Platform
  ) {
    this.isSegment = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  singin() {
    let datas = {
      username: this.username,
      password: this.password
    }

    this.loginService.doLogin(datas)
      .subscribe((res) => {
        if (res.success) {
          console.log('login success!.');
          localStorage.setItem('token', res.token);
          //ไม่เอาอันนี้
          this.navCtrl.setRoot(HomePage);
        } else {
          console.log('login fail!.');
        }
      }
    )

  };

  singup(){
    console.log('click signup!');
    
  }

}
