import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { from, Observable } from 'rxjs';

import { CoursesService } from '../../courses/services/course/courses.service';

import * as fromTeacher from './';

@Injectable({
  providedIn: 'root'
})
export class TeacherDataService extends DefaultDataService<gapi.client.classroom.Teacher> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private coursesService: CoursesService
  ) {
    super(fromTeacher.entityCollectionName, http, httpUrlGenerator);
  }
  getWithQuery(courseId: string): Observable<gapi.client.classroom.Teacher[]> {
    return from(this.coursesService.getTeachers(courseId));
  }
}
