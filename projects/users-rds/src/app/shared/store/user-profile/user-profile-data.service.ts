import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CoursesService } from '../../courses/services/course/courses.service';

import * as fromUserProfile from './user-profile.state';
@Injectable({ providedIn: 'root' })
export class CourseDataService extends DefaultDataService<gapi.client.classroom.UserProfile> {


  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private coursesService: CoursesService
  ) {
    super(fromUserProfile.entityCollectionName, http, httpUrlGenerator);
  }
  get

  /* private mapcourse(course: gapi.client.classroom.Course): gapi.client.classroom.Course {
    return { ...course }
  } */
}
