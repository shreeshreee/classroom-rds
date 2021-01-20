import { Injectable } from '@angular/core';

import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

import * as fromUserProfile from './user-profile.state';

@Injectable()
export class UserProfileEntityService extends EntityCollectionServiceBase<gapi.client.classroom.UserProfile> {
  constructor(readonly serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(fromUserProfile.entityCollectionName, serviceElementsFactory);
  }
}
