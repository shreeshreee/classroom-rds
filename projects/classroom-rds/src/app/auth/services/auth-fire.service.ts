import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import firebase from 'firebase/app';
import 'firebase/auth';

import { from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { UpdatedUser, User } from './../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthFireService {
  user$: Observable<firebase.User>;
  constructor(
    public afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private afStore: AngularFirestore,
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap((user) => {
        if (user) {
          return this.afStore.collection<User>('users').doc<User>(`${user.providerData[0].uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
  signInWithCredential(credentials: firebase.auth.AuthCredential): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithCredential(credentials);
  }
  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }
  updateOnlineStatus(uid: string, status: boolean): Observable<void> {
    if (status) {
      this.afDatabase.database.ref().child(`users/${uid}`).onDisconnect().update({ isOnline: false });
    }
    return from(this.afDatabase.object(`users/${uid}`).update({ isOnline: status }));
  }
  createUser(user: User) {
    const key = user.id;
    console.log(key);
    this.afStore.collection('users').doc(key).set({
      isNew: user.isNew,
      isAdmin: false,
      isVerified: user.isVerified,
      name: user.name,
      email: user.email,
      photoUrl: user.photoUrl,
      creationTime: user.creationTime,
      lastLogin: user.lastLogin,
      uid: user.uid,
      id: user.id,
    }).then(
      () => this.afDatabase.object(`users/${user.uid}`).set({
        id: user.id,
        isAdmin: false,
        isOnline: true,
      })
    );
  }

  checkAdminRole(uid: string): Observable<boolean> {
    const val = this.afDatabase.object<boolean>(`admins/${uid}`).valueChanges();
    return val;
  }

  updateUser(userData: UpdatedUser) {
    // Sets user data to firestore on login
    this.afAuth.currentUser.then(async (upUser) => {
      from(upUser.updateProfile({ displayName: userData.name, photoURL: userData.photoUrl }) as any);
    });
    const userRef: AngularFirestoreDocument = this.afStore.doc(`users/${userData.id}`);
    const data = {
      name: userData.name,
      photoUrl: userData.photoUrl,
    };
    return from(userRef.set(data, { merge: true }));
  }
  /*  getAuthState(): Observable<firebase.User> {
     return this.afAuth.authState;
   } */
}
