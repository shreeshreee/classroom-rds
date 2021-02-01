import { Injectable } from '@angular/core';

import { from, Observable, Subject, Subscription } from 'rxjs';

import firebase from 'firebase/app';
import 'firebase/auth';

import { environment } from './../../../environments/environment';

import { AuthFireService } from './auth-fire.service';
declare var gapi: any;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _googleAuth: gapi.auth2.GoogleAuth;
  status$ = new Subject<boolean>();
  constructor(
    private authFireService: AuthFireService,
  ) { }

  handleClientLoad() {
    // Load the API's client and auth2 modules.
    // Call the initClient function after the modules load.
    gapi.load('auth2:client', {
      callback: () =>
        this.initClient(),
      onerror: () =>
        // Handle loading error.
        alert('gapi.client failed to load!'),
      timeout: 5000, // 5 seconds.
      ontimeout: () =>
        // Handle timeout.
        alert('gapi.client could not load in a timely manner!')
    })
  }

  initClient() {
    const params = {
      clientId: environment.gapiClientConfig.client_id,
      scope: environment.gapiClientConfig.scope,
      apiKey: environment.firebaseConfig.apiKey,
      discoveryDocs: environment.gapiClientConfig.discoveryDocs,
    }
    // Initialize the gapi.client object
    gapi.client.init(params).then(
      () => {
        //this.isClientLoaded = true;
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(() =>
          this.updateSigninStatus(
            gapi.auth2.getAuthInstance().currentUser.get()
          )
        );
        // Handle initial sign-in state. (Determine if user is already signed in.)
        const user = gapi.auth2.getAuthInstance().currentUser.get();
        this.setSigninStatus(user);
      },
      () => {
        //this.isClientLoaded = false;
        gapi.auth2.getAuthInstance().disconnect();
      }
    )
  }
  /**
   * Handler method for Authorize button
   */
  handleSignInClick() {
    return from(this.signIn());

  }
  async signIn() {
    const googleAuth: gapi.auth2.GoogleAuth = gapi.auth2.getAuthInstance();
    const googleUser: gapi.auth2.GoogleUser = await googleAuth.signIn();
    const authResponse: gapi.auth2.AuthResponse = googleUser.getAuthResponse();
    const credential: firebase.auth.AuthCredential =
      firebase.auth.GoogleAuthProvider.credential(authResponse.id_token, authResponse.access_token);
    return this.authFireService.signInWithCredential(credential);
  }

  async signOut(uid: string) {
    this.authFireService.signOut(uid);
    return gapi.auth2.getAuthInstance().signOut();
  }

  setSigninStatus(user) {
    const isAuthorized = this.updateSigninStatus(user);
    if (isAuthorized) {
      //  alert('You are currently signed in and have granted access to this app.');
      return gapi.auth2.getAuthInstance().currentUser.get();
    } else {
      //  alert('You have not authorized this app or you are signed out.');
      return null
    }
  }


  updateSigninStatus(user) {
    return user.hasGrantedScopes(environment.gapiClientConfig.scope);
  }

  getAuth(): Observable<gapi.auth2.GoogleAuth> {
    this._googleAuth = gapi.auth2.getAuthInstance();
    return from(this._googleAuth);
  }

}
