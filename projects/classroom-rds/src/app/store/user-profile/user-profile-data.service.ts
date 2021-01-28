import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CoursesService } from '../../courses/services/course/courses.service';

import * as fromUserProfile from './';
@Injectable()
export class UserProfileDataService extends DefaultDataService<gapi.client.classroom.UserProfile> {


  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private coursesService: CoursesService
  ) {
    super(fromUserProfile.entityCollectionName, http, httpUrlGenerator);
  }

  getById(id: string): Observable<gapi.client.classroom.UserProfile> {
    return from(this.coursesService.getUserProfile(id));
  }

}
