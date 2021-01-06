import { Injectable } from '@angular/core';

import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';



@Injectable()
export class TeacherEntityService extends EntityCollectionServiceBase<gapi.client.classroom.Teacher> {

  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super("Teacher", serviceElementsFactory);
  }


}
