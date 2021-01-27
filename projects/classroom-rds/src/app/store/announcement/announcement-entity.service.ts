import { Injectable } from '@angular/core';

import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import * as fromAnnouncement from './'

@Injectable({
  providedIn: 'root'
})
export class AnnouncementEntityService extends EntityCollectionServiceBase<gapi.client.classroom.Announcement> {

  constructor(
    serviceElementsFactory:
      EntityCollectionServiceElementsFactory
  ) {
    super(fromAnnouncement.entityCollectionName, serviceElementsFactory);
  }
}
