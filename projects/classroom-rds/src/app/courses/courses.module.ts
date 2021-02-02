import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDefinitionService, EntityServices, EntityDataService } from '@ngrx/data';

import { MaterialModule } from '../modules/material.module';
import { SharedModule } from './../shared/shared.module';
import * as fromAnnouncement from './../store/announcement';
import * as fromCourse from './../store/course';
import * as fromCourseWork from './../store/course-work';
import * as fromStudent from './../store/student';
import * as fromTeacher from './../store/teacher';
import * as fromUserProfile from './../store/user-profile';
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
import { UserProfileDataService } from './../store/user-profile/user-profile-data.service';
import { UserProfileEntityService } from './../store/user-profile/user-profile-entity.service';

import { CoursesRoutingModule } from './courses-routing.module';

import { AnnouncementDialogComponent } from './components/announcement-dialog/announcement-dialog.component';
import { AnnouncementResultComponent } from './components/announcement-result/announcement-result.component';
import { CourseAnnouncementsComponent } from './components/course-announcements/course-announcements.component';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { CourseStudentsComponent } from './components/course-students/course-students.component';
import { CourseTeachersComponent } from './components/course-teachers/course-teachers.component';
import { CourseUserDialogComponent } from './components/course-user-dialog/course-user-dialog.component';
import { CourseWorkComponent } from './components/course-work/course-work.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesComponent } from './containers/courses/courses.component';
import { AnnouncementResolver } from './services/announcement/announcement.resolver';
import { CourseWorksResolver } from './services/course-work/course-works.resolver';
import { CourseResolver } from './services/course/course.resolver';
import { CoursesResolver } from './services/course/courses.resolver';
import { CoursesService } from './services/course/courses.service';
import { StudentsResolver } from './services/student/students.resolver';
import { TeachersResolver } from './services/teacher/teachers.resolver';
import { TeachersService } from './services/teacher/teachers.service';
import { UserProfilesResolver } from './services/user-profile/user-profile.resolver';
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
    CourseAnnouncementsComponent,
    CourseWorkComponent,
    CourseUserDialogComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    SharedModule
  ],
  providers: [
    CoursesService,
    TeachersService,
    CourseEntityService,
    StudentEntityService,
    TeacherEntityService,
    AnnouncementEntityService,
    CourseWorkEntityService,
    UserProfileEntityService,
    CourseDataService,
    StudentDataService,
    TeacherDataService,
    AnnouncementDataService,
    CourseWorkDataService,
    UserProfileDataService,
    CoursesResolver, CourseResolver, StudentsResolver, TeachersResolver, AnnouncementResolver, CourseWorksResolver, UserProfilesResolver
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
    userProfileEntityService: UserProfileEntityService,
    entityDataService: EntityDataService,
    courseDataService: CourseDataService,
    studentDataService: StudentDataService,
    teacherDataService: TeacherDataService,
    announcementDataService: AnnouncementDataService,
    courseWorkDataService: CourseWorkDataService,
    userProfileDataService: UserProfileDataService,
  ) {
    entityServices
      .registerEntityCollectionServices(
        [
          courseEntityService,
          studentEntityService,
          teacherEntityService,
          announcementEntityService,
          courseWorkEntityService,
          userProfileEntityService
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
    entityDataService
      .registerService(fromUserProfile.entityCollectionName, userProfileDataService);
  }
}
