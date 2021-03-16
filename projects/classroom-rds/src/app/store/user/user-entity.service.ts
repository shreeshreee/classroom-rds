import { Injectable } from '@angular/core';

import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

import * as fromUser from '.';

import { User } from '~/app/auth/models/user.model';

@Injectable()
export class UserEntityService extends EntityCollectionServiceBase<User> {
  constructor(readonly serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(fromUser.entityCollectionName, serviceElementsFactory);
  }
}
