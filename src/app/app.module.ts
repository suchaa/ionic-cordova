import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetailPage } from '../pages/detail/detail';
import { LoginPage } from '../pages/login/login';
import { AddDataPage } from '../pages/add-data/add-data';

import { ReviewsProvider } from '../providers/reviews/reviews';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetailPage,
    LoginPage,
    AddDataPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp , {},{
      links:[
        { component: HomePage, name: 'home', segment: 'home'},
        { component: ListPage, name:'list', segment:'list'},
        { component: DetailPage, name: 'detail', segment: 'detail'},
        { component: LoginPage, name: 'login', segment: 'login'},
        { component: AddDataPage, name: 'add-data', segment: 'add-data'}
      ]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
     HomePage,
     ListPage,
     DetailPage,
     LoginPage,
     AddDataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ReviewsProvider
  ]
})
export class AppModule {}
