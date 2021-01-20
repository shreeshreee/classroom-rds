import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDefinitionService, EntityServices, EntityDataService } from '@ngrx/data';

import { MaterialModule } from '../modules/material.module';
import * as fromCourse from './../store/course';
import * as fromStudent from './../store/student';
import * as fromTeacher from './../store/teacher';
import * as fromEntity from './../store/config/entity-metadata';
import { CourseDataService } from '../store/course/course-data.service';
import { CourseEntityService } from '../store/course/course-entity.service';
import { StudentDataService } from '../store/student/student-data.service';
import { StudentEntityService } from '../store/student/student-entity.service';
import { TeacherDataService } from './../store/teacher/teacher-data.service';
import { TeacherEntityService } from './../store/teacher/teacher-entity.service';

import { CoursesRoutingModule } from './courses-routing.module';

import { AnnouncementDialogComponent } from './components/announcement-dialog/announcement-dialog.component';
import { AnnouncementResultComponent } from './components/announcement-result/announcement-result.component';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { CourseInfoComponent } from './components/course-info/course-info.component';
import { CourseStudentsComponent } from './components/course-students/course-students.component';
import { CourseTeachersComponent } from './components/course-teachers/course-teachers.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { CoursesComponent } from './containers/courses/courses.component';
import { CoursesResolver } from './services/course/courses.resolver';
import { CoursesService } from './services/course/courses.service';
import { StudentsResolver } from './services/student/students.resolver';
import { TeachersResolver } from './services/teacher/teachers.resolver';
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
    CoursesListComponent,
    CourseInfoComponent
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
    TeacherEntityService,
    CourseDataService,
    StudentDataService,
    TeacherDataService,
    CoursesResolver,
    TeachersResolver,
    StudentsResolver
  ]
})
export class CoursesModule {

  constructor(
    eds: EntityDefinitionService,
    entityServices: EntityServices,
    // custom collection services
    courseEntityService: CourseEntityService,
    studentEntityService: StudentEntityService,
    teacherEntityService: TeacherEntityService,
    entityDataService: EntityDataService,
    courseDataService: CourseDataService,
    studentDataService: StudentDataService,
    teacherDataService: TeacherDataService
  ) {
    entityServices.registerEntityCollectionServices([courseEntityService, studentEntityService, teacherEntityService]);
    eds.registerMetadataMap(fromEntity.entityMetadata);
    entityDataService.registerService(fromCourse.entityCollectionName, courseDataService);
    entityDataService.registerService(fromStudent.entityCollectionName, studentDataService);
    entityDataService.registerService(fromTeacher.entityCollectionName, teacherDataService);

  }
}
