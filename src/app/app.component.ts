import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

 import { HomePage } from '../pages/home/home';
 //import { DetailPage } from '../pages/detail/detail';
 import { ListPage } from '../pages/list/list';
// import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  page: Array<{ title: string, Component: any}>

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    this.page = [
      { title: 'home' , Component: HomePage },
      { title: 'list' , Component: ListPage }
    ];

  }

  initializeApp(){
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(p){
    this.nav.setRoot(p.Component);
  }
}

