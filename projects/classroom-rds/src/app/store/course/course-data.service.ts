import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Update } from '@ngrx/entity';

import { from, Observable, of } from 'rxjs';

import { CoursesService } from './../../courses/services/course/courses.service';

import * as fromCourse from './';
@Injectable()
export class CourseDataService extends DefaultDataService<gapi.client.classroom.Course> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private coursesService: CoursesService
  ) {
    super(fromCourse.entityCollectionName, http, httpUrlGenerator);
  }
  getAll(): Observable<gapi.client.classroom.Course[]> {
    return from(
      this.coursesService.getCourses()
    );
  }
  getByKey(courseId: string): Observable<gapi.client.classroom.Course> {
    return this.getById(courseId)
  }
  add(course: gapi.client.classroom.Course): Observable<gapi.client.classroom.Course> {
    return from(
      this.coursesService.createCourse(course)
    )
  }
  update(update: Update<gapi.client.classroom.Course>) {
    return from(this.coursesService.updateCourse(update.id, update.changes))
  }
}
