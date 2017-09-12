import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
//import { LoginPage } from '../pages/login/login';
//import { ListPage } from '../pages/list/list';
=======
import { DetailPage } from '../pages/detail/detail';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
// import { LoginPage } from '../pages/login/login';
>>>>>>> cd26feafae6247cee5e63b85cdee05345935d2e0

@NgModule({
  declarations: [
    MyApp,
<<<<<<< HEAD
    HomePage
    
=======
    HomePage,
    ListPage,
    DetailPage,
    LoginPage
>>>>>>> cd26feafae6247cee5e63b85cdee05345935d2e0
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp , {},{
      links:[
        { component: HomePage, name: 'home', segment: 'home'},
        { component: ListPage, name:'list', segment:'list'},
        { component: DetailPage, name: 'detail', segment: 'detail'},
        { component: LoginPage, name: 'login', segment: 'login'}
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
<<<<<<< HEAD
    HomePage
=======
     HomePage,
     ListPage,
     DetailPage,
     LoginPage

>>>>>>> cd26feafae6247cee5e63b85cdee05345935d2e0
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
