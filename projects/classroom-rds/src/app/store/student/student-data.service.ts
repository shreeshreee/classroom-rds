import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { from, Observable } from 'rxjs';

import { StudentsService } from './../../courses/containers/students/services/students.service';


import * as fromStudent from './'
@Injectable()
export class StudentDataService extends DefaultDataService<gapi.client.classroom.Student> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private studentsService: StudentsService
  ) {
    super(fromStudent.entityCollectionName, http, httpUrlGenerator);
  }
  getWithQuery(courseId: string): Observable<gapi.client.classroom.Student[]> {
    return from(this.studentsService.getStudents(courseId));
  }
}
