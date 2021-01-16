import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDefinitionService, EntityServices, EntityDataService } from '@ngrx/data';

import { MaterialModule } from './../modules/material.module';
import * as fromCourse from './../store/course';
import * as fromStudent from './../store/student';
import * as fromEntity from './../store/config/entity-metadata';
import { CourseDataService } from '../store/course/course-data.service';
import { CourseEntityService } from '../store/course/course-entity.service';
import { StudentDataService } from '../store/student/student-data.service';
import { StudentEntityService } from '../store/student/student-entity.service';

import { CoursesRoutingModule } from './courses-routing.module';

import { AnnouncementDialogComponent } from './components/announcement-dialog/announcement-dialog.component';
import { AnnouncementResultComponent } from './components/announcement-result/announcement-result.component';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { CourseStudentsComponent } from './components/course-students/course-students.component';
import { CourseTeachersComponent } from './components/course-teachers/course-teachers.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { CoursesComponent } from './containers/courses/courses.component';
import { CourseResolver } from './services/course/course.resolver';
import { CoursesResolver } from './services/course/courses.resolver';
import { CoursesService } from './services/course/courses.service';
import { StudentResolver } from './services/student/student.resolver';
@NgModule({
  declarations: [
    CoursesComponent,
    AnnouncementDialogComponent,
    AnnouncementResultComponent,
    CourseDialogComponent,
    CoursesTableComponent,
    CourseComponent,
    CourseStudentsComponent,
    CourseTeachersComponent,
    CoursesListComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
  ],
  exports: [CoursesTableComponent],
  providers: [
    CoursesService,
    CourseEntityService,
    StudentEntityService,
    CourseDataService,
    StudentDataService,
    CoursesResolver,
    CourseResolver,
    StudentResolver
  ]
})
export class CoursesModule {

  constructor(
    eds: EntityDefinitionService,
    entityServices: EntityServices,
    // custom collection services
    courseEntityService: CourseEntityService,
    studentEntityService: StudentEntityService,
    entityDataService: EntityDataService,
    courseDataService: CourseDataService,
    studentDataService: StudentDataService
  ) {
    entityServices.registerEntityCollectionServices([courseEntityService, studentEntityService]);
    eds.registerMetadataMap(fromEntity.entityMetadata);
    entityDataService.registerService(fromCourse.entityCollectionName, courseDataService);
    entityDataService.registerService(fromStudent.entityCollectionName, studentDataService);
  }
}
