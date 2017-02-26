import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AuthData } from '../../auth/auth-data.service';
import { LoginPage } from '../../pages/login/login';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'reset-password.html'
})
export class ResetPasswordPage {
  credentials = {
    email: ''
  };
  loginPage = LoginPage;

  constructor(public navCtrl: NavController, private authData: AuthData) {
    authData.authenticated.then(() => {
      navCtrl.setRoot(TabsPage);
    });
  }

  onSubmit() {
    this.authData.resetPassword(this.credentials.email).then(() => {
      this.navCtrl.setRoot(LoginPage);
    });
  }

  openPage(page: any) {
    this.navCtrl.setRoot(page);
  }
}
