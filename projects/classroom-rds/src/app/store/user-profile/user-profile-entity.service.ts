import { Injectable } from '@angular/core';

import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

import { Observable } from 'rxjs';

import * as fromUserProfile from './';

@Injectable()
export class UserProfileEntityService extends EntityCollectionServiceBase<gapi.client.classroom.UserProfile> {
  constructor(readonly serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(fromUserProfile.entityCollectionName, serviceElementsFactory);
  }
  getById(id: string): Observable<gapi.client.classroom.UserProfile> {
    return this.getByKey(id);
  }
}
