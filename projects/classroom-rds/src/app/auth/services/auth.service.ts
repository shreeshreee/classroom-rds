import { signIn } from './../state/auth.actions';
import { Injectable } from '@angular/core';

import { environment } from '@rds-env/environment';

import { from, Observable, of, Subject, Subscription } from 'rxjs';

import firebase from 'firebase/app';
import 'firebase/auth';

import { AuthFireService } from './auth-fire.service';
import { map } from 'rxjs/operators';
//declare const gapi: any;
const extractAccessToken = (_googleAuth: gapi.auth2.GoogleAuth) => {
  return (
    _googleAuth && _googleAuth.currentUser.get().getAuthResponse().access_token
  );
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _googleAuth: gapi.auth2.GoogleAuth;
/*   private googleAuth$: Observable<gapi.auth2.GoogleAuth>;
 */  private _googleUser: gapi.auth2.GoogleUser;
  /*   private _accessToken: string;
    private autoSignInTimer: Subscription; */
  /* set accessToken(value) {
    this._accessToken = value;
  }
  get accessToken() {
    const token = {
      fromGoogle: extractAccessToken(this._googleAuth),
      fromApp: this._accessToken,
      equal: true
    };
    return token.fromGoogle;
  } */
/*   status$ = new Subject<boolean>();
 */  constructor(
    private authFireService: AuthFireService,
  ) {
  }

  handleClientLoad() {
    // Load the API's client and auth2 modules.
    // Call the initClient function after the modules load.
    gapi.load('auth2:client', {
      callback: () =>
        this.initClient(),
      onerror: () =>
        // Handle loading error.
        alert('gapi.client failed to load!'),
      timeout: 15000, // 15 seconds.
      ontimeout: () =>
        // Handle timeout.
        alert('gapi.client could not load in a timely manner!')
    })
  }

  initClient() {
    const params = {
      clientId: environment.gapiClientConfig.client_id,
      scope: environment.gapiClientConfig.authScopes,
      apiKey: environment.firebaseConfig.apiKey,
      //discoveryDocs: environment.gapiClientConfig.discoveryDocs,
    }
    // Initialize the gapi.client object
    gapi.client.init(params).then(
      () => {
        //this.isClientLoaded = true;
        // Listen for sign-in state changes.
        this._googleAuth = gapi.auth2.getAuthInstance();
        this._googleAuth.isSignedIn.listen(() => this._googleAuth.isSignedIn.get())
        // Handle initial sign-in state. (Determine if user is already signed in.)
        this._googleUser = this.setSigninStatus(gapi.auth2.getAuthInstance().currentUser.get());
      },
    )
  }
  /**
   * Handler method for Authorize button
   */
  handleSignInClick() {
    return from(this.signIn());
  }
  async signIn() {
    this._googleUser = await this._googleAuth.signIn();
    const authResponse: gapi.auth2.AuthResponse = this._googleUser.getAuthResponse(true);
    const credential: firebase.auth.AuthCredential =
      firebase.auth.GoogleAuthProvider.credential(authResponse.id_token, authResponse.access_token);
    return await this.authFireService.signInWithCredential(credential);
  }


  async signOut(id: string) {
    const auth2 = gapi.auth2.getAuthInstance();
    return await auth2.signOut();
  }

  setSigninStatus(googleUser: gapi.auth2.GoogleUser) {
    const isAuthorized = this.updateSigninStatus(googleUser);
    if (isAuthorized) {
      /* alert('You are currently signed in and have granted access to this app.');
      alert(googleUser.getGrantedScopes()) */
      return googleUser;
    } else {
      /* alert('You have not authorized this app or you are signed out.'); */
      return null
    }
  }



  updateSigninStatus(user: gapi.auth2.GoogleUser) {
    return user.hasGrantedScopes(environment.gapiClientConfig.authScopes);
  }

  getAuth(): Observable<gapi.auth2.GoogleAuth> {
    this._googleAuth = gapi.auth2.getAuthInstance();
    return from(this._googleAuth);
  }

}


