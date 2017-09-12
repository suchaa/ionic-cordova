import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
  ],
<<<<<<< HEAD
=======
  entryComponents: [
    LoginPage,
  ]
>>>>>>> cd26feafae6247cee5e63b85cdee05345935d2e0
})
export class LoginPageModule {}
