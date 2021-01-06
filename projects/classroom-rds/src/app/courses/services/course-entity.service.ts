import { Injectable } from '@angular/core';

import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';


@Injectable()
export class CourseEntityService
  extends EntityCollectionServiceBase<gapi.client.classroom.Course> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory) {

    super('Course', serviceElementsFactory);


  }

}
