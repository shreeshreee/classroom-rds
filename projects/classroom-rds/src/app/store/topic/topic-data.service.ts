import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { from, Observable } from 'rxjs';
import { CourseWorksService } from '~/app/courses/containers/course-works/services/course-works.service';

import * as fromTopic from './';
@Injectable()
export class TopicDataService extends DefaultDataService<gapi.client.classroom.Topic> {


  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private courseWorksService: CourseWorksService
  ) {
    super(fromTopic.entityCollectionName, http, httpUrlGenerator);
  }

  getWithQuery(courseId: string): Observable<gapi.client.classroom.Topic[]> {
    return from(this.courseWorksService.getTopics(courseId));
  }

}
