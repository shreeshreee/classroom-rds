import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DefaultDataService, HttpUrlGenerator, QueryParams } from '@ngrx/data';

import { AdminApiService } from '@rds-admin/services';
import { AdminFireService } from '@rds-admin/services/admin-fire.service';

import { Observable, from } from 'rxjs';

import { UserDomain } from '~/app/admin/models/users-domain.model';
import * as fromUserDomain from './';
@Injectable()
export class UserDomainDataService extends DefaultDataService<UserDomain>  {

  constructor(
    http: HttpClient,
    httpUrlGenerator: HttpUrlGenerator,
    private adminFireService: AdminFireService,
    private adminApiService: AdminApiService
  ) {
    super(fromUserDomain.entityCollectionName, http, httpUrlGenerator);
  }
  getAll(): Observable<UserDomain[]> {
    return from(this.adminApiService.listAllUsers());
  }
  getByKey(userId: string): Observable<UserDomain> {
    return
  }
}
