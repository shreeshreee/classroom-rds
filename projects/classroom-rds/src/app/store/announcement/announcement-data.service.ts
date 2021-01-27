import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { from, Observable } from 'rxjs';

import { CoursesService } from '../../courses/services/course/courses.service';
import * as fromAnnouncement from './'
@Injectable({
  providedIn: 'root'
})
export class AnnouncementDataService extends DefaultDataService<gapi.client.classroom.Announcement> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private coursesService: CoursesService
  ) {
    super(fromAnnouncement.entityCollectionName, http, httpUrlGenerator);
  }
  getWithQuery(courseId: string): Observable<gapi.client.classroom.Announcement[]> {
    return from(
      this.coursesService.getAnnouncements(courseId)
    );
  }
}
