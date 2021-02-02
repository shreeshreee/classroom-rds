import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDataService, EntityDefinitionService, EntityServices } from '@ngrx/data';

import * as fromEntity from '@rds-store/config/entity-metadata';
import * as fromAnnouncement from '@rds-store/announcement';
import { AnnouncementDataService } from '@rds-store/announcement/announcement-data.service';
import { AnnouncementEntityService } from '@rds-store/announcement/announcement-entity.service';

import { AnnouncementsRoutingModule } from './announcements-routing.module';

import { AnnouncementResolver } from './services/announcement.resolver';
import { AnnouncementDialogComponent } from './components/announcement-dialog/announcement-dialog.component';
import { AnnouncementResultComponent } from './components/announcement-result/announcement-result.component';
import { CourseAnnouncementsComponent } from './components/course-announcements/course-announcements.component';
import { MaterialModule } from '~/app/modules/material.module';


@NgModule({
  declarations: [
    CourseAnnouncementsComponent,
    AnnouncementDialogComponent,
    AnnouncementResultComponent,
  ],
  exports: [
    CourseAnnouncementsComponent,
    AnnouncementDialogComponent,
    AnnouncementResultComponent,
  ],
  imports: [
    CommonModule,
    AnnouncementsRoutingModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule
  ], providers: [
    AnnouncementEntityService,
    AnnouncementDataService,
    AnnouncementResolver
  ]
})
export class AnnouncementsModule {
  constructor(
    eds: EntityDefinitionService,
    entityServices: EntityServices,
    announcementEntityService: AnnouncementEntityService,
    entityDataService: EntityDataService,
    announcementDataService: AnnouncementDataService,
  ) {
    entityServices.registerEntityCollectionServices([announcementEntityService]);
    eds.registerMetadataMap(fromEntity.entityMetadata);
    entityDataService.registerService(fromAnnouncement.entityCollectionName, announcementDataService);
  }
}
