import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CoursesService } from '../../courses/services/course/courses.service';

import * as fromCourse from './';
@Injectable({ providedIn: 'root' })
export class CourseDataService extends DefaultDataService<gapi.client.classroom.Course> {


  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private coursesService: CoursesService
  ) {
    super(fromCourse.entityCollectionName, http, httpUrlGenerator);
  }
  getAll(): Observable<gapi.client.classroom.Course[]> {
    return from(this.coursesService.getCourses());
  }

  getBykey(id: string): Observable<gapi.client.classroom.Course> {
    return this.getById(id).pipe(map(course => { return { ...course }; }));
  }

  /* private mapcourse(course: gapi.client.classroom.Course): gapi.client.classroom.Course {
    return { ...course }
  } */
}
