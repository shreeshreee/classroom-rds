import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { query } from '@angular/animations';

import { QueryParams } from '@ngrx/data';

import { Observable, of } from 'rxjs';
import { concatMap, map, take } from 'rxjs/operators';

import firebase from 'firebase/app';
import 'firebase/auth';

import { User } from '~/app/auth/models/user.model';
import { Score } from '~/app/user/models/score.model';
@Injectable()
export class SchoolService {
  user$: Observable<firebase.User>;
  private usersDb: AngularFireList<User>;
  constructor(
    public afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
  ) {
    this.user$ = this.getAuthState().pipe(
      concatMap((user) => {
        if (user) {
          return this.afDatabase.object<User[]>(`appusers/${user.providerData[0].uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    this.usersDb = this.afDatabase.list<User>('appusers', (ref) =>
      ref.orderByChild('name/fullName')
    );
  }

  getAuthState(): Observable<firebase.User> {
    return this.afAuth.authState;
  }
  getUsers() {
    return this.usersDb.snapshotChanges().pipe(
      take(1),
      map((changes) => {
        return changes.map((c) => ({
          $key: c.payload.key,
          ...c.payload.val(),
        }));
      })
    );
  }
  getUsersWithQuery(queryParams: QueryParams): Promise<User[]> {
    return this.usersDb.valueChanges().pipe(map(users =>
      users
        .filter(x => x.grade == queryParams.grade)
        .filter(y => y.level == queryParams.level)
    )).toPromise();
  }
  getUser(id: string): Observable<User> {
    return this.afDatabase.object<User>(`appusers/${id}`).valueChanges();
  }
  getScores(id: string): Observable<Score[]> {
    return this.afDatabase.object<Score[]>(`scores/${id}`).valueChanges();
  }

}

