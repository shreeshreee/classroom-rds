import { Injectable } from '@angular/core';

import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { Class } from '@rds-school/models/class.model';

import * as fromClass from '.';

@Injectable()
export class ClassesEntityService extends EntityCollectionServiceBase<Class> {
  constructor(readonly serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super(fromClass.entityCollectionName, serviceElementsFactory);
  }
}
