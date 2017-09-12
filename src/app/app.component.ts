import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

<<<<<<< HEAD
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
=======
 import { HomePage } from '../pages/home/home';
 import { DetailPage } from '../pages/detail/detail';
 import { ListPage } from '../pages/list/list';
// import { LoginPage } from '../pages/login/login';
>>>>>>> cd26feafae6247cee5e63b85cdee05345935d2e0

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD
  rootPage:any = HomePage; //หน้าแรก
  page: [{
    title: 'list',
    Component: ListPage
  },
{
  title: 'login',
  Component: LoginPage
}]
 // page: Array<{ title: string, Component: any}>
=======
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  page: Array<{ title: string, Component: any}>
  
//  page: [{
//   title: 'detail',
//   Component: DetailPage  
//  },
//  {
//   title: 'list',
//   Component: ListPage  
//  }]
>>>>>>> cd26feafae6247cee5e63b85cdee05345935d2e0

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

<<<<<<< HEAD

=======
  openPage(p){
    this.nav.setRoot(p.Component);
  }
>>>>>>> cd26feafae6247cee5e63b85cdee05345935d2e0
}

