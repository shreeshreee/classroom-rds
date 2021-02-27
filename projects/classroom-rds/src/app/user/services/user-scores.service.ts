import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { UserDomain } from '@rds-admin/models/users-domain.model';

import { User } from '@rds-auth/models/user.model';

import firebase from 'firebase/app';
import 'firebase/auth';

import { from, Observable, of } from 'rxjs';
import { concatMap, map, switchMap, tap } from 'rxjs/operators';

import { Score } from '../models/score.model';

@Injectable()
export class UserScoresService {
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

  getScores(id: string) {
    return this.afDatabase.object<Score[]>(`scores/${id}`).valueChanges();
  }
  getUserDomain(userId: string): Observable<UserDomain> {
    return this.afStore.collection<UserDomain>('users').doc(`${userId}`).valueChanges();
  }
  updateUser(userData: User) {
    // Sets user data to firestore on login
    const usr = this.afAuth.currentUser.then(async (upUser) => {
      from(upUser.updateProfile({ photoURL: userData.photoUrl, displayName: userData.name }) as any);
    });
    const userRef: AngularFirestoreDocument = this.afStore.doc(`users/${userData.id}`);
    return from(userRef.set(userData, { merge: true }));
  }

}
