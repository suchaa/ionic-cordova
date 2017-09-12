import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DetailPage } from '../pages/detail/detail';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
// import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailPage,
    ListPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp , {},{
      links:[
        { component: ListPage, name:'list', segment:'list'},
        { component: DetailPage, name: 'detail', segment: 'detail'},
        { component: LoginPage, name: 'login', segment: 'login'},
        { component: HomePage, name: 'home', segment: 'home'}
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     HomePage,
     DetailPage,
     ListPage,
     LoginPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
