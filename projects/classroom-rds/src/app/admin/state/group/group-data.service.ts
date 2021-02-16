import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { Observable, from } from 'rxjs';

import { AdminApiService } from './../../services';

import * as fromGroup from './';
import { Group } from '../../models/users.model';
@Injectable()
export class GroupDataService extends DefaultDataService<Group>  {

  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private adminApiService: AdminApiService
  ) {
    super(fromGroup.entityCollectionName, http, httpUrlGenerator);
  }
  getAll(): Observable<Group[]> {
    return from(this.adminApiService.getGroups());
  }
}
