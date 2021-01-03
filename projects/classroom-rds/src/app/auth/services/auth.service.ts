import { Injectable } from '@angular/core';

import { GoogleAuthService } from 'ng-gapi';

import { Observable, Subject } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

import firebase from 'firebase/app';
import 'firebase/auth';

import { environment } from './../../../environments/environment';

import { AuthFireService } from './auth-fire.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public static readonly SESSION_STORAGE_KEY: string = "accessToken";
  status$ = new Subject<boolean>();
  private user: gapi.auth2.GoogleUser = undefined;
  constructor(
    private authFireService: AuthFireService,
    private googleAuthService: GoogleAuthService,
  ) { }
  public setCurrentUser(user: gapi.auth2.GoogleUser): void {
    this.user = user;
  }
  public getCurrentUser(): gapi.auth2.GoogleUser {
    return this.user;
  }
  /**
   * If logged in, get the current user
   * @returns Google Basic Profile
   */
  async getUser(): Promise<gapi.auth2.BasicProfile> {
    if (await this.getStatus()) {
      return gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();
    }
  }
  /**
   * Load the gapi client
   * @returns Promise
   */
  private loadClient(): Promise<any> {
    if (!gapi.auth2) {
      return new Promise((resolve, reject) => {
        gapi.load('auth2', {
          callback: resolve,
          onerror: reject,
          timeout: 1000,
          ontimeout: reject
        });
      });
    }
  }
  /**
   * Intialize the gapi client with client_id and optional parameters.
   * @returns Promise
   */
  private initClient(): Promise<gapi.auth2.GoogleAuth> {
    return new Promise((resolve, reject) => {
      gapi.auth2.init({
        client_id: environment.gapiClientConfig.client_id,
        scope: environment.gapiClientConfig.scope,
      }).then(resolve, reject);
    });
  }
  /**
   * Try to get sign in status, otherwise load and initialize the gapi client, then return status
   * @returns Promise
   */
  getStatus(): Promise<boolean> {
    if (gapi.auth2) {
      const status = gapi.auth2.getAuthInstance().isSignedIn.get();
      return new Promise((resolve, reject) => {
        resolve(status);
        reject(false);
      });
    } else {
      return this.loadClient().then(() => this.initClient().then(() => {
        const isSignedIn = gapi.auth2.getAuthInstance().isSignedIn;
        const status = isSignedIn.get();
        this.status$.next(status);
        isSignedIn.listen(change => this.status$.next(change));
        return status;
      }));
    }
  }
  /**
   * Get the id_token object
   * @returns Google Auth Reponse
   */
  getToken(): string {
    let token: string = sessionStorage.getItem(AuthService.SESSION_STORAGE_KEY);
    if (!token) {
      throw new Error("no token set , authentication required");
    }
    return sessionStorage.getItem(AuthService.SESSION_STORAGE_KEY);
  }
  /**
   * Function to render a custom Google sign-in button
   * You can only call this function after the client has initialized
   */
  renderButton(): void {
    gapi.signin2.render('g-signin-custom',
      {
        'scope': 'profile email',
        'width': 240,
        'height': 40,
        'longtitle': true,
        'theme': 'light',
        'onsuccess': () => this.handleOnSuccess(),
        'onfailure': () => { }
      });
  }
  /**
   * Gapi sign in button onsuccess handler
   */
  private handleOnSuccess(): void {
    // Add your onsuccess logic
  }

  /**
   * Sign in handler for custom login buttons
   * @returns Promise
   */
  handleSignInClick(): Observable<firebase.auth.UserCredential> {
    return this.signIn();
  }
  signIn(): Observable<firebase.auth.UserCredential> {
    return this.googleAuthService.getAuth()
      .pipe(
        mergeMap(async googleAuth => {
          await googleAuth.signIn()
            .then(
              success => this.signInSuccessHandler(success),
              fail => this.signInErrorHandler(fail)
            );
          const authResponse = this.getCurrentUser().getAuthResponse();
          const credential: firebase.auth.OAuthCredential =
            firebase.auth.GoogleAuthProvider.credential(authResponse.id_token, authResponse.access_token);
          return await this.authFireService.signInWithCredential(credential)
        })
      );
  }
  private signInSuccessHandler(res: gapi.auth2.GoogleUser): void {
    this.setCurrentUser(res);
    sessionStorage.setItem(
      AuthService.SESSION_STORAGE_KEY, res.getAuthResponse().access_token
    );
  }
  private signInErrorHandler(err): void {
    console.warn(err);
  }

  signOut(): Observable<void> {
    return this.googleAuthService.getAuth()
      .pipe(
        map(auth => {
          try {
            this.authFireService.signOut();
            auth.signOut();
          } catch (e) {
            console.error(e);
          } finally {
            sessionStorage.removeItem(AuthService.SESSION_STORAGE_KEY)
          }
        })
      )
  }


}
