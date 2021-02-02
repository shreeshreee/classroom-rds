import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDefinitionService, EntityServices, EntityDataService } from '@ngrx/data';

import { MaterialModule } from '../modules/material.module';
import { SharedModule } from './../shared/shared.module';
import * as fromCourse from './../store/course';
import * as fromUserProfile from './../store/user-profile';
import * as fromEntity from './../store/config/entity-metadata';
import { CourseDataService } from '../store/course/course-data.service';
import { CourseEntityService } from '../store/course/course-entity.service';
import { UserProfileDataService } from './../store/user-profile/user-profile-data.service';
import { UserProfileEntityService } from './../store/user-profile/user-profile-entity.service';

import { CoursesRoutingModule } from './courses-routing.module';

import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { CourseUserDialogComponent } from './components/course-user-dialog/course-user-dialog.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesComponent } from './containers/courses/courses.component';
import { TeachersModule } from './containers/teachers/teachers.module';
import { CourseResolver } from './services/course/course.resolver';
import { CoursesResolver } from './services/course/courses.resolver';
import { CoursesService } from './services/course/courses.service';
import { UserProfilesResolver } from './services/user-profile/user-profile.resolver';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseDialogComponent,
    CourseComponent,
    CoursesListComponent,
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
    SharedModule,
    TeachersModule
  ],
  providers: [
    CoursesService,
    CourseEntityService,
    UserProfileEntityService,

    CourseDataService,
    UserProfileDataService,
    CoursesResolver, CourseResolver, UserProfilesResolver
  ]
})
export class CoursesModule {

  constructor(
    eds: EntityDefinitionService,
    entityServices: EntityServices,
    // custom collection services
    courseEntityService: CourseEntityService,

    userProfileEntityService: UserProfileEntityService,
    entityDataService: EntityDataService,
    courseDataService: CourseDataService,
    userProfileDataService: UserProfileDataService,
  ) {
    entityServices
      .registerEntityCollectionServices(
        [
          courseEntityService,
          userProfileEntityService
        ]);
    eds.registerMetadataMap(fromEntity.entityMetadata);
    entityDataService.registerService(fromCourse.entityCollectionName, courseDataService);
    entityDataService.registerService(fromUserProfile.entityCollectionName, userProfileDataService);
  }
}
