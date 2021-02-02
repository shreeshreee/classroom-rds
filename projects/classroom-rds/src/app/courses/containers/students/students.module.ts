import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDataService, EntityDefinitionService, EntityServices } from '@ngrx/data';

import * as fromEntity from '@rds-store/config/entity-metadata';
import * as fromStudent from '@rds-store/student';

import { MaterialModule } from './../../../modules/material.module';

import { StudentsRoutingModule } from './students-routing.module';

import { StudentsResolver } from './services/students.resolver';
import { CourseStudentsComponent } from './components/course-students/course-students.component';
import { StudentDataService } from '~/app/store/student/student-data.service';
import { StudentEntityService } from '~/app/store/student/student-entity.service';


@NgModule({
  declarations: [CourseStudentsComponent],
  exports: [CourseStudentsComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  providers: [
    StudentEntityService,
    StudentDataService,
    StudentsResolver,
  ]
})
export class StudentsModule {
  constructor(
    eds: EntityDefinitionService,
    entityServices: EntityServices,
    entityDataService: EntityDataService,
    studentEntityService: StudentEntityService,
    studentDataService: StudentDataService,
  ) {
    entityServices.registerEntityCollectionServices([studentEntityService]);
    eds.registerMetadataMap(fromEntity.entityMetadata);
    entityDataService.registerService(fromStudent.entityCollectionName, studentDataService);
  }
}