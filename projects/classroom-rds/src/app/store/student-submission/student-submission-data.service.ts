import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { from, Observable } from 'rxjs';
import * as fromAlias from '.'
import { CourseWorksService } from '~/app/courses/containers/course-works/services/course-works.service';
@Injectable()
export class StudentSubmissionDataService extends DefaultDataService<gapi.client.classroom.StudentSubmission> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private courseWroksService: CourseWorksService,
  ) {
    super(fromAlias.entityCollectionName, http, httpUrlGenerator);
  }
  getWithQuery(queryParams: { courseId, courseWorkId }): Observable<gapi.client.classroom.StudentSubmission[]> {
    return from(
      this.courseWroksService.getStudentSubmissions(queryParams.courseId, queryParams.courseWorkId)
    );
  }
}
