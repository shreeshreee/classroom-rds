import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDefinitionService, EntityServices, EntityDataService } from '@ngrx/data';

import { MaterialModule } from '../modules/material.module';
import * as fromAnnouncement from './../store/announcement';
import * as fromCourse from './../store/course';
import * as fromCourseWork from './../store/course-work';
import * as fromStudent from './../store/student';
import * as fromTeacher from './../store/teacher';
import { AnnouncementDataService } from '../store/announcement/announcement-data.service';
import { AnnouncementEntityService } from './../store/announcement/announcement-entity.service';
import * as fromEntity from './../store/config/entity-metadata';
import { CourseWorkDataService } from './../store/course-work/course-work-data-service.service';
import { CourseWorkEntityService } from './../store/course-work/course-work-entity-service.service';
import { CourseDataService } from '../store/course/course-data.service';
import { CourseEntityService } from '../store/course/course-entity.service';
import { StudentDataService } from '../store/student/student-data.service';
import { StudentEntityService } from '../store/student/student-entity.service';
import { TeacherDataService } from './../store/teacher/teacher-data.service';
import { TeacherEntityService } from './../store/teacher/teacher-entity.service';
import { entityCollectionName } from './../../../../users-rds/src/app/shared/store/user-profile/user-profile.state';

import { CoursesRoutingModule } from './courses-routing.module';

import { AnnouncementDialogComponent } from './components/announcement-dialog/announcement-dialog.component';
import { AnnouncementResultComponent } from './components/announcement-result/announcement-result.component';
import { CourseAnnouncementsComponent } from './components/course-announcements/course-announcements.component';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { CourseStudentsComponent } from './components/course-students/course-students.component';
import { CourseTeachersComponent } from './components/course-teachers/course-teachers.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { CoursesComponent } from './containers/courses/courses.component';
import { AnnouncementResolver } from './services/announcement/announcement.resolver';
import { CourseWorksResolver } from './services/course-work/course-works.resolver';
import { CoursesResolver } from './services/course/courses.resolver';
import { CoursesService } from './services/course/courses.service';
import { StudentsResolver } from './services/student/students.resolver';
import { TeachersResolver } from './services/teacher/teachers.resolver';
import { CourseWorkComponent } from './components/course-work/course-work.component';
@NgModule({
  declarations: [
    CoursesComponent,
    AnnouncementDialogComponent,
    AnnouncementResultComponent,
    CourseDialogComponent,
    CourseComponent,
    CourseStudentsComponent,
    CourseTeachersComponent,
    CoursesListComponent,
    UserCardComponent,
    CourseAnnouncementsComponent,
    CourseWorkComponent,
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
  exports: [],
  providers: [
    CoursesService,
    CourseEntityService,
    StudentEntityService,
    TeacherEntityService,
    AnnouncementEntityService,
    CourseWorkEntityService,
    CourseDataService,
    StudentDataService,
    TeacherDataService,
    AnnouncementDataService,
    CourseWorkDataService,
    CoursesResolver, StudentsResolver, TeachersResolver, AnnouncementResolver, CourseWorksResolver
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
    announcementEntityService: AnnouncementEntityService,
    courseWorkEntityService: CourseWorkEntityService,
    entityDataService: EntityDataService,
    courseDataService: CourseDataService,
    studentDataService: StudentDataService,
    teacherDataService: TeacherDataService,
    announcementDataService: AnnouncementDataService,
    courseWorkDataService: CourseWorkDataService
  ) {
    entityServices
      .registerEntityCollectionServices(
        [
          courseEntityService,
          studentEntityService,
          teacherEntityService,
          announcementEntityService,
          courseWorkEntityService,
        ]);
    eds
      .registerMetadataMap(fromEntity.entityMetadata);
    entityDataService
      .registerService(fromCourse.entityCollectionName, courseDataService);
    entityDataService
      .registerService(fromStudent.entityCollectionName, studentDataService);
    entityDataService
      .registerService(fromTeacher.entityCollectionName, teacherDataService);
    entityDataService
      .registerService(fromCourseWork.entityCollectionName, courseWorkDataService);
    entityDataService
      .registerService(fromAnnouncement.entityCollectionName, announcementDataService);


  }
}
