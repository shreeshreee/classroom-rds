import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import firebase from 'firebase/app';
import 'firebase/auth';

import { from, Observable, of } from 'rxjs';
import { map, switchMap, concatMap } from 'rxjs/operators';

import { UpdatedUser, User } from './../models/user.model';
import { isAdmin, isTeacher } from './../state/auth.selectors';

import { UserDomain } from '~/app/admin/models/users-domain.model';

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
    this.user$ = this.getAuthState().pipe(
      concatMap((user) => {
        if (user) {
          return this.afStore.collection<UserDomain>('users').doc(`${user.providerData[0].uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  getAuthState(): Observable<firebase.User> {
    return this.afAuth.authState;
  }
  signInWithCredential(credentials: firebase.auth.AuthCredential): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithCredential(credentials);
  }
  signOut(uid: string) {
    this.updateOnlineStatus(uid, false);
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
    return this.afStore.collection('users').doc(key).set({
      isVerified: user.isVerified,
      uid: user.uid,
    }, { merge: true }).then(
      () => this.afDatabase.object(`users/${user.uid}`).set({
        id: user.id,
        isOnline: true,
        isTeacher: false
      })
    );
  }

  checkAdminRole(id: string): Observable<boolean> {
    const val = this.afStore.doc<User>('users/' + id);
    let isAdmin: Observable<boolean> = val.snapshotChanges().pipe(map(user => {
      let userData = user.payload.data();
      return userData.isAdmin;
    }))
    return isAdmin;
  }

  checkTeacherRole(id: string): Observable<boolean> {
    const val = this.afStore.doc<User>('users/' + id);
    let isTeacher: Observable<boolean> = val.snapshotChanges().pipe(map(user => {
      let userData = user.payload.data();
      return userData.isTeacher;
    }))
    return isTeacher;
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
  private addAdminPrivileges(uid: string): Observable<void> {
    const adminsRef = this.afDatabase.object(`admins/${uid}`);
    this.afDatabase.object(`users/${uid}`).update({ isAdmin: true });
    return from(adminsRef.set(true));
  }

  private removeAdminPrivileges(uid: string): Observable<void> {
    this.afDatabase.object(`users/${uid}`).update({ isAdmin: false });
    return from(this.afDatabase.object(`admins/${uid}`).remove());
  }
}
