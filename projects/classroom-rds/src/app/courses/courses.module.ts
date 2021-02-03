import { TopicEntityService } from '~/app/store/topic/topic-entity.service';
import { TopicDataService } from './../store/topic/topic-data.service';

import { UserProfilesService } from '~/app/courses/services/user-profile/user-profiles.service';
import { GuardianEntityService } from './../store/guardian/guardian-entity.service';
import { GuardianDataService } from './../store/guardian/guardian-data.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDefinitionService, EntityServices, EntityDataService } from '@ngrx/data';

import { MaterialModule } from '../modules/material.module';
import { SharedModule } from '@rds-shared/shared.module';
import * as fromCourse from '@rds-store/course';
import * as fromUserProfile from '@rds-store/user-profile';
import * as fromGuardian from '@rds-store/guardian';

import * as fromEntity from '@rds-store/config/entity-metadata';
import { CourseDataService } from '@rds-store/course/course-data.service';
import { CourseEntityService } from '@rds-store/course/course-entity.service';
import { UserProfileDataService } from '@rds-store/user-profile/user-profile-data.service';
import { UserProfileEntityService } from '@rds-store/user-profile/user-profile-entity.service';

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
import { GuardiansResolver } from './services/user-profile/guardians.resolver';

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
    UserProfilesService,
    CourseEntityService,
    UserProfileEntityService,
    GuardianDataService,
    GuardianEntityService,
    CourseDataService,
    UserProfileDataService,
    CoursesResolver, CourseResolver, UserProfilesResolver, GuardiansResolver,
  ]
})
export class CoursesModule {

  constructor(
    eds: EntityDefinitionService,
    entityServices: EntityServices,
    // custom collection services

    courseEntityService: CourseEntityService,
    guardianEntityService: GuardianEntityService,
    userProfileEntityService: UserProfileEntityService,
    entityDataService: EntityDataService,
    courseDataService: CourseDataService,
    userProfileDataService: UserProfileDataService,
    guardianDataService: GuardianDataService,
  ) {
    entityServices
      .registerEntityCollectionServices(
        [
          courseEntityService,
          userProfileEntityService,
          guardianEntityService,

        ]);
    eds.registerMetadataMap(fromEntity.entityMetadata);
    entityDataService.registerService(fromCourse.entityCollectionName, courseDataService);
    entityDataService.registerService(fromGuardian.entityCollectionName, guardianDataService);

    entityDataService.registerService(fromUserProfile.entityCollectionName, userProfileDataService);
  }
}
