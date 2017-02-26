import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { LoginPage } from '../pages/login/login';
import { AuthData } from '../auth/auth-data.service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = LoginPage;

  constructor(platform: Platform, private authData: AuthData) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    });
  }

  signOut() {
    this.authData.signOut();
    this.nav.setRoot(LoginPage);
  }
}
