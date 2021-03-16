import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import firebase from 'firebase/app';
import 'firebase/auth';

import { from, Observable, of } from 'rxjs';
import { map, concatMap, switchMap, take } from 'rxjs/operators';

import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthFireService {
  user$: Observable<firebase.User>;
  private userCollection: string = 'testuser';
  constructor(
    public afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private afStore: AngularFirestore,

  ) {
    this.user$ = this.getAuthState().pipe(
      switchMap((user) => {
        if (user) {
          return this.afDatabase.object<User>(`${this.userCollection}/${user.providerData[0].uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
  getUserById(id: string) {
    return this.afDatabase.object<User>(`${this.userCollection}/${id}`).valueChanges();

  }
  getAuthState(): Observable<firebase.User> {
    return this.afAuth.authState;
  }
  signInWithCredential(credentials: firebase.auth.AuthCredential): Promise<firebase.auth.UserCredential> {
    return this.afAuth.signInWithCredential(credentials);
  }
  signOut(id: string) {
    //this.updateOnlineStatus(id, false);
    return this.afAuth.signOut();
  }
  updateOnlineStatus(id: string, status: boolean): Observable<void> {
    //if (status) {
    //console.log('onDisconect branch', status)
    return from(this.afDatabase.database.ref().child(`${this.userCollection}/${id}`).onDisconnect().update({ isOnline: status }));
    //}
    //console.log('outer branch', status)
    //return from(this.afDatabase.object(`${this.userCollection}/${id}`).update({ isOnline: status }));
  }
  createUser(user: Partial<User>) {
    const key = user.id;
    return this.afStore.collection('users').doc(key).set({
      isVerified: user.isVerified,
      uid: user.uid,
    }, { merge: true }).then(
      () => this.afDatabase.object(`${this.userCollection}/${user.id}`).update(user)
    );
  }

  checkAdminRole(id: string): Observable<boolean> {
    const val = this.afDatabase.object<User>(`${this.userCollection}/${id}`).valueChanges();
    let isAdmin: Observable<boolean> = val.pipe(map(user => {
      return user.isAdmin;
    }))
    return isAdmin;
  }

  checkTeacherRole(id: string): Observable<boolean> {
    const val = this.afDatabase.object<User>(`${this.userCollection}/${id}`).valueChanges();
    let isTeacher: Observable<boolean> = val.pipe(map(user => {
      return user.isTeacher;
    }))
    return isTeacher;
  }
}
