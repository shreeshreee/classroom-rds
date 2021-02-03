import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDataService, EntityDefinitionService, EntityServices } from '@ngrx/data';

import * as fromEntity from '@rds-store/config/entity-metadata';
import * as fromCourseWork from '@rds-store/course-work';
import * as fromStudentSubmission from '@rds-store/student-submission';
import * as fromTopic from '@rds-store/topic';

import { StudentSubmissionDataService } from './../../../store/student-submission/student-submission-data.service';
import { StudentSubmissionEntityService } from './../../../store/student-submission/student-submission-entity.service';

import { CourseWorksRoutingModule } from './course-works-routing.module';

import { CourseWorksResolver } from './services/course-works.resolver';
import { StudentSubmissionsResolver } from './services/student-submissions.resolver';
import { TopicsResolver } from './services/topics.resolver';
import { CourseWorkComponent } from './components/course-work/course-work.component';
import { MaterialModule } from '~/app/modules/material.module';
import { CourseWorkDataService } from '~/app/store/course-work/course-work-data-service.service';
import { CourseWorkEntityService } from '~/app/store/course-work/course-work-entity-service.service';
import { TopicDataService } from '~/app/store/topic/topic-data.service';
import { TopicEntityService } from '~/app/store/topic/topic-entity.service';


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
    TopicDataService,
    TopicEntityService,
    TopicsResolver,
    StudentSubmissionDataService,
    StudentSubmissionEntityService,
    StudentSubmissionsResolver,
  ]
})
export class CourseWorksModule {
  constructor(
    eds: EntityDefinitionService,
    entityServices: EntityServices,
    courseWorkEntityService: CourseWorkEntityService,
    entityDataService: EntityDataService,
    courseWorkDataService: CourseWorkDataService,
    topicDataService: TopicDataService,
    topicEntityService: TopicEntityService,
    studentSubmissionEntityService: StudentSubmissionEntityService,
    studentSubmissionDataService: StudentSubmissionDataService
  ) {
    entityServices.registerEntityCollectionServices([courseWorkEntityService, topicEntityService, studentSubmissionEntityService]);
    eds.registerMetadataMap(fromEntity.entityMetadata);
    entityDataService.registerService(fromTopic.entityCollectionName, topicDataService);
    entityDataService.registerService(fromStudentSubmission.entityCollectionName, studentSubmissionDataService);
    entityDataService.registerService(fromCourseWork.entityCollectionName, courseWorkDataService);
  }
}
