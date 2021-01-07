import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { from, Observable } from 'rxjs';

import { Course } from '../models/course.model';

import { CoursesService } from './courses.service';

@Injectable()
export class CourseDataService extends DefaultDataService<gapi.client.classroom.Course> {


  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private coursesService: CoursesService
  ) {
    super('Course', http, httpUrlGenerator);

  }

  getAll(): Observable<Course[]> {
    return from(this.coursesService.getCoursesList());
  }
}
