import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';

import { Observable, from } from 'rxjs';

import { AdminApiService } from './../../services';
import { UserDomain } from './../../models/users.model';
import { AdminFireService } from './../../services/admin-fire.service';

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
}
