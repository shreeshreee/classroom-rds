import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

import { User } from '@rds-auth/models/user.model';

import { from, Observable, of } from 'rxjs';

import firebase from 'firebase/app';
import 'firebase/auth';

import { switchMap } from 'rxjs/operators';

import { Group, UserDomain } from '~/app/admin/models/users-domain.model';
@Injectable()
export class AdminFireService {
  user$: Observable<firebase.User>;
  private userCollection: string = 'users';
  constructor(
    public afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
    private afStore: AngularFirestore,

  ) {
    this.user$ = this.getAuthState().pipe(
      switchMap((user) => {
        if (user) {
          return this.afStore.collection(`${this.userCollection}/${user.providerData[0].uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }
  getAuthState(): Observable<firebase.User> {
    return this.afAuth.authState;
  }
  addAdminPrivileges(id: string): Observable<void> {
    const adminsRef = this.afDatabase.object(`admins/${id}`);
    this.afDatabase.object(`${this.userCollection}/${id}`).update({ isAdmin: true });
    return from(adminsRef.set(true));
  }

  removeAdminPrivileges(id: string): Observable<void> {
    this.afDatabase.object(`${this.userCollection}/${id}`).update({ isAdmin: false });
    return from(this.afDatabase.object(`admins/${id}`).remove());
  }

  getUsers(): Observable<UserDomain[]> {
    return this.afStore.collection<UserDomain>(`${this.userCollection}`).valueChanges()
  }

  /* async createUser(user: UserDomain): Promise<void> {
    const key = user.id;
    return await this.afStore.collection('users').doc(key).set(user, { merge: true });
    //return await this.afDatabase.object<UserDomain>(`${this.userCollection}/${key}`).update(user);
  } */
  async createUser(user: any) {
    const key = user.id;
    return await this.afStore.collection(`${this.userCollection}`).doc(key).set(user, { merge: true }).then(
      () => this.afDatabase.object<User>(`${this.userCollection}/${user.id}`).update(user)
    );
  }
  async createGroup(group: Group) {
    const key = group.id;
    console.log(group.name)
    return await this.afStore.collection('groups').doc(key).set(group, { merge: true });
  }
}
