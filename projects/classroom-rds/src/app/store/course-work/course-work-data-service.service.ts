import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { from, Observable, of } from 'rxjs';

import { CoursesService } from '../../courses/services/course/courses.service';

import * as fromCourseWork from './'
@Injectable()
export class CourseWorkDataService extends DefaultDataService<gapi.client.classroom.CourseWork> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private coursesService: CoursesService
  ) {
    super(fromCourseWork.entityCollectionName, http, httpUrlGenerator);
  }
  getWithQuery(courseId: string): Observable<gapi.client.classroom.CourseWork[]> {
    return from(this.coursesService.getCourseWorks(courseId));
  }
}
