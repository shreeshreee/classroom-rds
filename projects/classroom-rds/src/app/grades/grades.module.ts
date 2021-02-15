import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDefinitionService, EntityServices, EntityDataService } from '@ngrx/data';

import * as fromCourse from '@rds-store/course';
import * as fromUserProfile from '@rds-store/user-profile';
import * as fromEntity from '@rds-store/app/config/entity-metadata';
import * as fromTeacher from '@rds-store/teacher';
import * as fromStudent from '@rds-store/student';
import { CourseDataService } from '@rds-store/course/course-data.service';
import { CourseEntityService } from '@rds-store/course/course-entity.service';
import { StudentDataService } from '@rds-store/student/student-data.service';
import { StudentEntityService } from '@rds-store/student/student-entity.service';
import { TeacherDataService } from '@rds-store/teacher/teacher-data.service';
import { TeacherEntityService } from '@rds-store/teacher/teacher-entity.service';

import { CourseResolver } from '@rds-classroom/courses/resolvers/course.resolver';
import { CoursesResolver } from '@rds-classroom/courses/resolvers/courses.resolver';
import { CoursesService } from '@rds-classroom/courses/services/courses.service';
import { StudentsResolver } from '@rds-classroom/students/services/students.resolver';
import { TeachersResolver } from '@rds-classroom/teachers/services/teachers.resolver';
import { TeachersService } from '@rds-classroom/teachers/services/teachers.service';

import { GoogleSheetsDbService } from 'ng-google-sheets-db';

import { MaterialModule } from './../modules/material.module';
import { UserProfileDataService } from '../store/user-profile/user-profile-data.service';
import { UserProfileEntityService } from '../store/user-profile/user-profile-entity.service';
import { UserProfileResolver } from '../classroom/user-profiles/services/user-profile.resolver';
import { UserProfilesService } from '../classroom/user-profiles/services/user-profiles.service';

import { GradesRoutingModule } from './grades-routing.module';

import { CoursesGradeResolver } from './resolvers/courses-grade.resolver';
import { StudentsGradeResolver } from './resolvers/students-grade.resolver';
import { GradeCourseComponent } from './components/grade-course/grade-course.component';
import { GradesWellcomeComponent } from './components/grades-wellcome/grades-wellcome.component';
import { SelectCourseComponent } from './components/select-course/select-course.component';
import { GradesComponent } from './containers/grades/grades.component';


@NgModule({
  declarations: [GradesComponent, SelectCourseComponent, GradeCourseComponent, GradesWellcomeComponent],
  imports: [
    CommonModule,
    GradesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule
  ],
  providers: [
    GoogleSheetsDbService,
    CoursesService,
    CourseEntityService,
    CourseDataService,
    CoursesResolver,
    CourseResolver,
    TeachersService,
    TeacherEntityService,
    TeacherDataService,
    TeachersResolver,
    UserProfilesService,
    UserProfileResolver,
    UserProfileEntityService,
    UserProfileDataService,
    StudentEntityService,
    StudentDataService,
    StudentsGradeResolver,
    CoursesGradeResolver,

  ]
})
export class GradesModule {
  constructor(
    eds: EntityDefinitionService,
    entityServices: EntityServices,
    entityDataService: EntityDataService,
    // custom collection services
    courseEntityService: CourseEntityService,
    courseDataService: CourseDataService,
    teacherEntityService: TeacherEntityService,
    teacherDataService: TeacherDataService,
    studentEntityService: StudentEntityService,
    studentDataService: StudentDataService,
    userProfileEntityService: UserProfileEntityService,
    userProfileDataService: UserProfileDataService,
  ) {
    entityServices.registerEntityCollectionServices([userProfileEntityService, studentEntityService, courseEntityService, teacherEntityService]);
    eds.registerMetadataMap(fromEntity.entityMetadata);
    entityDataService.registerService(fromCourse.entityCollectionName, courseDataService);
    entityDataService.registerService(fromTeacher.entityCollectionName, teacherDataService);
    entityDataService.registerService(fromStudent.entityCollectionName, studentDataService);
    entityDataService.registerService(fromUserProfile.entityCollectionName, userProfileDataService);

  }
}
