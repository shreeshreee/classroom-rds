import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { from, Observable, of } from 'rxjs';

import { CoursesService } from '../../courses/services/course/courses.service';

import * as fromStudent from './'
@Injectable()
export class StudentDataService extends DefaultDataService<gapi.client.classroom.Student> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private coursesService: CoursesService
  ) {
    super(fromStudent.entityCollectionName, http, httpUrlGenerator);
  }
  getWithQuery(courseId: string): Observable<gapi.client.classroom.Student[]> {
    return from(this.coursesService.getStudents(courseId));
  }
}
