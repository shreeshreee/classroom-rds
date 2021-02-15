import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

import { UserDomain } from '@rds-admin/models/users.model';

import { from, Observable, of } from 'rxjs';

import firebase from 'firebase/app';
import 'firebase/auth';

import { switchMap } from 'rxjs/operators';

import { User } from '~/app/auth/models/user.model';
@Injectable()
export class AdminFireService {
  user$: Observable<firebase.User>;
  constructor(
    public afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private afStore: AngularFirestore,

  ) {
    this.user$ = this.getAuthState().pipe(
      switchMap((user) => {
        if (user) {
          return this.afStore.collection<UserDomain>('users').doc<UserDomain>(`${user.providerData[0].uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
  getAuthState(): Observable<firebase.User> {
    return this.afAuth.authState;
  }
  addAdminPrivileges(uid: string): Observable<void> {
    const adminsRef = this.afDatabase.object(`admins/${uid}`);
    this.afDatabase.object(`users/${uid}`).update({ isAdmin: true });
    return from(adminsRef.set(true));
  }

  removeAdminPrivileges(uid: string): Observable<void> {
    this.afDatabase.object(`users/${uid}`).update({ isAdmin: false });
    return from(this.afDatabase.object(`admins/${uid}`).remove());
  }

  getUsers(): Observable<UserDomain[]> {
    return this.afStore.collection<UserDomain>('users').valueChanges()
  }

  async createUser(user: UserDomain) {
    const key = user.id;
    console.log(key);
    return await this.afStore.collection('users').doc(key).set(user, { merge: true });
  }

}
