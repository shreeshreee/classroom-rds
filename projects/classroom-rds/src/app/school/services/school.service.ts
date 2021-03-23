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

import { UserAuth } from '~/app/auth/models/user-auth.model';
import { UserStudent } from '~/app/auth/models/user-student.model';
import { User } from '~/app/auth/models/user.model';
import { Grade, Score } from '~/app/user/models/grade.model';
@Injectable()
export class SchoolService {
  user$: Observable<firebase.User>;
  private userCollection: string = 'users';
  private currentScore: string = 'currentGrades';
  private usersDb: AngularFireList<User>;
  constructor(
    public afAuth: AngularFireAuth,
    private afDatabase: AngularFireDatabase,
  ) {
    this.user$ = this.getAuthState().pipe(
      concatMap((user) => {
        if (user) {
          return this.afDatabase.object<User[]>(`${this.userCollection}/${user.providerData[0].uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
    this.usersDb = this.afDatabase.list<User>(`${this.userCollection}`, (ref) =>
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
  getUsersWithQuery(queryParams: QueryParams): Observable<User[]> {
    console.log(queryParams.grade)
    return this.afDatabase.list<User>(`${this.userCollection}`).valueChanges().pipe(map(users => users.filter(x => x.grade == queryParams.grade)));
    return this.usersDb.valueChanges().pipe(map(users => users.filter(x => x.grade == queryParams.grade)))
  }
  getUser(id: string): Observable<User> {
    return this.afDatabase.object<User>(`${this.userCollection}/${id}`).valueChanges();
  }
  getCurrentScore(id: string): Observable<Grade> {
    return this.afDatabase.object<Grade>(`${this.userCollection}/${id}/${this.currentScore}`).valueChanges();
  }
  async updateUser(id: string, user: Partial<User>): Promise<User> {
    return await this.afDatabase.object<User>(`${this.userCollection}/${id}`)
      .update(user)
      .then()
  }
}

