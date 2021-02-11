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

import { MaterialModule } from './../modules/material.module';
import { CourseDataService } from '../store/course/course-data.service';
import { CourseEntityService } from '../store/course/course-entity.service';
import { StudentDataService } from '../store/student/student-data.service';
import { StudentEntityService } from '../store/student/student-entity.service';
import { TeacherDataService } from './../store/teacher/teacher-data.service';
import { TeacherEntityService } from '../store/teacher/teacher-entity.service';
import { CourseResolver } from '../classroom/courses/resolvers/course.resolver';
import { CoursesResolver } from '../classroom/courses/resolvers/courses.resolver';
import { CoursesService } from '../classroom/courses/services/courses.service';
import { StudentsResolver } from '../classroom/students/services/students.resolver';
import { TeachersResolver } from '../classroom/teachers/services/teachers.resolver';
import { TeachersService } from '../classroom/teachers/services/teachers.service';

import { GradesRoutingModule } from './grades-routing.module';
import { GradesComponent } from './grades.component';

import { CoursesGradeResolver } from './resolvers/courses-grade.resolver';
import { StudentsGradeResolver } from './resolvers/students-grade.resolver';
import { GradeCourseComponent } from './component/grade-course/grade-course.component';
import { SelectCourseComponent } from './component/select-course/select-course.component';


@NgModule({
  declarations: [GradesComponent, SelectCourseComponent, GradeCourseComponent],
  imports: [
    CommonModule,
    GradesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule
  ],
  providers: [
    CoursesService,
    CourseEntityService,
    CourseDataService,
    CoursesResolver,
    CourseResolver,
    TeachersService,
    TeacherEntityService,
    TeacherDataService,
    TeachersResolver,
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
  ) {
    entityServices.registerEntityCollectionServices([studentEntityService, courseEntityService, teacherEntityService]);
    eds.registerMetadataMap(fromEntity.entityMetadata);
    entityDataService.registerService(fromCourse.entityCollectionName, courseDataService);
    entityDataService.registerService(fromTeacher.entityCollectionName, teacherDataService);
    entityDataService.registerService(fromStudent.entityCollectionName, studentDataService);
  }
}
