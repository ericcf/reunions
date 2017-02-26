import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { AuthData } from '../../auth/auth-data.service';
import { ResetPasswordPage } from './reset-password';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  credentials = {
    email: '',
    password: ''
  };
  resetPasswordPage = ResetPasswordPage;

  constructor(public navCtrl: NavController, private authData: AuthData) {
    authData.authenticated.then(() => {
      navCtrl.setRoot(TabsPage);
    });
  }

  onSubmit() {
    this.authData.signIn(this.credentials.email, this.credentials.password).then(() => {
      this.navCtrl.setRoot(TabsPage);
    });
  }

  openPage(page: any) {
    this.navCtrl.setRoot(page);
  }
}
