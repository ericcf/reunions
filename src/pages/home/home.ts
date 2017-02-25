import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private notes: string[] = [];

  constructor(public navCtrl: NavController) {
    this.notes.push('the house code is 1234');
  }
}
