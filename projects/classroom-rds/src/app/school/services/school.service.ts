import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

import { QueryParams } from '@ngrx/data';

import { User } from '@rds-auth/models/user.model';

import { Grade } from '@rds-user/models/grade.model';

import { from, Observable, of } from 'rxjs';
import { concatMap, map, take } from 'rxjs/operators';

import firebase from 'firebase/app';
import 'firebase/auth';
import { Class } from '../models/class.model';
@Injectable()
export class SchoolService {
  user$: Observable<firebase.User>;
  private userCollection: string = 'users';
  private classesCollection: string = 'courses';
  private currentScore: string = 'currentGrades';
  private usersDb: AngularFireList<User>;
  classRef: AngularFireList<any>;
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
      ref.orderByChild('name/familyName')
    );
    this.classRef = this.afDatabase.list(this.classesCollection);
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
  async createClass(course: Class) {
    const dbKey = this.afDatabase.createPushId();
    const ref = await this.afDatabase.object(`${this.classesCollection}/${dbKey}`);
    ref.set({ ...course, id: dbKey }).then(() => { return { ...course, id: dbKey } })
  }
  async updateClass(id: string, changes: Partial<Class>): Promise<Class> {
    return await this.afDatabase.object<Class>(`${this.classesCollection}/${id}`)
      .update(changes)
      .then()
  }
  getClasses(): Observable<Class[]> {
    return this.afDatabase.list<Class>(`${this.classesCollection}`).valueChanges();
  }
  getClassesWithQuery(queryParams: QueryParams): Observable<Class[]> {
    return this.afDatabase.list<Class>(`${this.classesCollection}`).valueChanges().pipe(map(users => users.filter(x => x.grade == queryParams.grade)));
  }
  getClassById(id: string): Observable<Class> {
    return this.afDatabase.object<Class>(`${this.classesCollection}/${id}`).valueChanges();
  }
  create(course: Class): Observable<Class> {
    const dbKey = this.afDatabase.createPushId();
    console.log(dbKey)
    this.classRef.push({ ...course })
    return this.afDatabase.object<Class>(`${this.classesCollection}/${dbKey}`).valueChanges()
  }
}

