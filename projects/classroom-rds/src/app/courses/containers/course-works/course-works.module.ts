import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDataService, EntityDefinitionService, EntityServices } from '@ngrx/data';

import * as fromEntity from '@rds-store/config/entity-metadata';
import * as fromCourseWork from '@rds-store/course-work';

import { CourseWorksRoutingModule } from './course-works-routing.module';

import { CourseWorksResolver } from './services/course-works.resolver';
import { CourseWorkComponent } from './components/course-work/course-work.component';
import { MaterialModule } from '~/app/modules/material.module';
import { CourseWorkDataService } from '~/app/store/course-work/course-work-data-service.service';
import { CourseWorkEntityService } from '~/app/store/course-work/course-work-entity-service.service';


@NgModule({
  declarations: [CourseWorkComponent],
  exports: [CourseWorkComponent],
  imports: [
    CommonModule,
    CourseWorksRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  providers: [
    CourseWorkEntityService,
    CourseWorkDataService,
    CourseWorksResolver,
  ]
})
export class CourseWorksModule {
  constructor(
    eds: EntityDefinitionService,
    entityServices: EntityServices,
    courseWorkEntityService: CourseWorkEntityService,
    entityDataService: EntityDataService,
    courseWorkDataService: CourseWorkDataService,
  ) {
    entityServices.registerEntityCollectionServices([courseWorkEntityService,]);
    eds.registerMetadataMap(fromEntity.entityMetadata);
    entityDataService.registerService(fromCourseWork.entityCollectionName, courseWorkDataService);
  }
}
