import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDefinitionService, EntityServices, EntityDataService } from '@ngrx/data';

import * as fromEntity from '@rds-store/config/entity-metadata';
import * as fromTeacher from '@rds-store/teacher';

import { TeachersRoutingModule } from './teachers-routing.module';

import { TeachersResolver } from './services/teachers.resolver';
import { TeachersService } from './services/teachers.service';
import { CourseTeachersComponent } from './components/course-teachers/course-teachers.component';
import { MaterialModule } from '~/app/modules/material.module';
import { TeacherDataService } from '~/app/store/teacher/teacher-data.service';
import { TeacherEntityService } from '~/app/store/teacher/teacher-entity.service';

@NgModule({
  declarations: [CourseTeachersComponent],
  exports: [CourseTeachersComponent],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  providers: [
    TeachersService,
    TeacherEntityService,
    TeacherDataService,
    TeachersResolver,
  ]
})
export class TeachersModule {
  constructor(
    eds: EntityDefinitionService,
    entityServices: EntityServices,
    teacherEntityService: TeacherEntityService,
    entityDataService: EntityDataService,
    teacherDataService: TeacherDataService,
  ) {
    entityServices.registerEntityCollectionServices([teacherEntityService]);
    eds.registerMetadataMap(fromEntity.entityMetadata);
    entityDataService.registerService(fromTeacher.entityCollectionName, teacherDataService);
  }
}
