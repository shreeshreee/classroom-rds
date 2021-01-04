import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import firebase from 'firebase/app';
import 'firebase/auth';

import { signIn, signOut } from './../state/auth.actions';
import { environment } from './../../../environments/environment';

import { AuthFireService } from './auth-fire.service';
declare const gapi: any;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public static readonly SESSION_STORAGE_KEY: string = "accessToken";
  googleAuth: gapi.auth2.GoogleAuth;
  status$ = new Subject<boolean>();
  private user: gapi.auth2.GoogleUser = undefined;
  constructor(
    private authFireService: AuthFireService,
  ) { }
  public setCurrentUser(user: gapi.auth2.GoogleUser): void {
    this.user = user;
  }
  public getCurrentUser(): gapi.auth2.GoogleUser {
    return this.user;
  }
  handleClientLoad() {
    // Load the API's client and auth2 modules.
    // Call the initClient function after the modules load.
    return gapi.load('auth2:client', {
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

  initClient(): gapi.auth2.GoogleAuth {
    const params = {
      client_id: environment.gapiClientConfig.client_id,
      scope: environment.gapiClientConfig.scope,
      apiKey: environment.firebaseConfig.apiKey,
      discoveryDocs: environment.gapiClientConfig.discoveryDocs,
    }
    // Initialize the gapi.client object
    return this.googleAuth = gapi.client.init(params).then(
      () => {
        //this.isClientLoaded = true;
        // Listen for sign-in state changes.
        gapi.auth2.getAuthInstance().isSignedIn.listen(
          this.updateSigninStatus(
            gapi.auth2.getAuthInstance().currentUser.get()
          )
        );
        // Handle initial sign-in state. (Determine if user is already signed in.)
        const user = gapi.auth2.getAuthInstance().currentUser.get();
        return this.setSigninStatus(user);
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
  handleSignInClick(): Promise<firebase.auth.UserCredential> {
    return this.signIn();

  }
  async signIn() {
    const googleAuth: gapi.auth2.GoogleAuth = gapi.auth2.getAuthInstance();
    const googleUser: gapi.auth2.GoogleUser = await googleAuth.signIn();
    const authResponse: gapi.auth2.AuthResponse = googleUser.getAuthResponse();
    const credential: firebase.auth.AuthCredential =
      firebase.auth.GoogleAuthProvider.credential(authResponse.id_token, authResponse.access_token);
    return this.authFireService.signInWithCredential(credential);
  }

  signOut() {
    gapi.auth2.getAuthInstance().signOut().then(
      () => { console.log('AngularFireAuth logout Success') },
      () => { console.log('AngularFireAuth logout Failded') }
    );
    return this.authFireService.signOut();
  }
  onAccessRevoke() {
    const googleAuth: gapi.auth2.GoogleAuth = gapi.auth2.getAuthInstance().disconnect();
  }

  setSigninStatus(user): gapi.auth2.GoogleAuth {
    const isAuthorized = this.updateSigninStatus(user);
    if (isAuthorized) {
      //  alert('You are currently signed in and have granted access to this app.');
      return this.googleAuth = gapi.auth2.getAuthInstance().currentUser.get();
    } else {
      //  alert('You have not authorized this app or you are signed out.');
      return null
    }
  }


  updateSigninStatus(user) {
    return user.hasGrantedScopes(environment.gapiClientConfig.scope);
  }

}
