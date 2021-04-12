import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DefaultDataService, HttpUrlGenerator, QueryParams } from '@ngrx/data';
import { Update } from '@ngrx/entity';

import { from, Observable, of } from 'rxjs';
import { Class } from '@rds-school/models/class.model';
import { SchoolService } from '@rds-school/services/school.service';

import * as fromClass from '.';
@Injectable()
export class ClassesDataService extends DefaultDataService<Class> {
  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private schoolService: SchoolService
  ) {
    super(fromClass.entityCollectionName, http, httpUrlGenerator);
  }
  getAll(): Observable<Class[]> {
    return this.schoolService.getClasses();
  }
  getWithQuery(queryParams?: QueryParams) {
    return this.schoolService.getClassesWithQuery(queryParams);
  }
  getByKey(courseId: string): Observable<Class> {
    return this.getById(courseId)
  }
  add(course: Class): Observable<Class> {
    return this.schoolService.create(course)

  }
  update(update: Update<Class>): Observable<Class> {
    return from(this.schoolService.updateClass(update.id as string, update.changes));
  }
}
