import { Injectable } from '@angular/core';
import { AngularFireAuth, FirebaseAuthState } from 'angularfire2';
import * as firebase from 'firebase';

@Injectable()
export class AuthData {
  private authState: FirebaseAuthState = null;
  private isAuthenticated: Function;

  constructor(public auth$: AngularFireAuth) {
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;

      if (this.authState !== null) {
        this.isAuthenticated();
      }
    });
  }

  get authenticated(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.isAuthenticated = resolve;
    });
  }

  signIn(email: string, password: string): firebase.Promise<any> {
    return this.auth$.login({ email: email, password: password });
  }

  signOut(): void {
    this.auth$.logout();
  }

  displayName(): string {
    if (this.authState !== null) {
      return this.authState.auth.email;
    } else {
      return '';
    }
  }

  resetPassword(email: string): firebase.Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }
}