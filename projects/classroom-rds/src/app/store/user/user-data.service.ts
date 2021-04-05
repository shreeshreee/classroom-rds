import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DefaultDataService, HttpUrlGenerator, QueryParams } from '@ngrx/data';
import { Update } from '@ngrx/entity';

import { User } from '@rds-auth/models/user.model';

import { SchoolService } from '@rds-school/services/school.service';

import { from, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import * as fromUser from './';
@Injectable()
export class UserDataService extends DefaultDataService<User> {


  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private schoolService: SchoolService
  ) {
    super(fromUser.entityCollectionName, http, httpUrlGenerator);
  }

  getAll(): Observable<User[]> {
    return this.schoolService.getUsers().pipe(take(1), map(users => users));
  }

  getWithQuery(queryParams: QueryParams) {
    return this.schoolService.getUsersWithQuery(queryParams).pipe(take(1), map(users => users));
  }

  getById(id: string): Observable<User> {
    return this.schoolService.getUser(id);
  }
  update(update: Update<User>): Observable<User> {
    return from(this.schoolService.updateUser(update.id.toString(), update.changes))
  }
}
