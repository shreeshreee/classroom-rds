import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDefinitionService, EntityServices, EntityDataService } from '@ngrx/data';

import { SharedModule } from '@rds-shared/shared.module';

import * as fromCourse from '@rds-store/course';
import * as fromUserProfile from '@rds-store/user-profile';
import * as fromGuardian from '@rds-store/guardian';
import * as fromEntity from '@rds-store/app/config/entity-metadata';
import { CourseDataService } from '@rds-store/course/course-data.service';
import { CourseEntityService } from '@rds-store/course/course-entity.service';
import { UserProfileDataService } from '@rds-store/user-profile/user-profile-data.service';
import { UserProfileEntityService } from '@rds-store/user-profile/user-profile-entity.service';
import { GuardianDataService } from '@rds-store/guardian/guardian-data.service';
import { GuardianEntityService } from '@rds-store/guardian/guardian-entity.service';

import { MaterialModule } from '../modules/material.module';

import { CoursesRoutingModule } from './courses-routing.module';

import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { CourseUserDialogComponent } from './components/course-user-dialog/course-user-dialog.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { AnnouncementsModule } from './containers/announcements/announcements.module';
import { CourseWorksModule } from './containers/course-works/course-works.module';
import { CoursesComponent } from './containers/courses/courses.component';
import { StudentsModule } from './containers/students/students.module';
import { TeachersModule } from './containers/teachers/teachers.module';
import { CourseResolver } from './services/course/course.resolver';
import { CoursesResolver } from './services/course/courses.resolver';
import { CoursesService } from './services/course/courses.service';
import { GuardiansResolver } from './services/user-profile/guardians.resolver';
import { UserProfilesService } from '~/app/user-profiles/services/user-profiles.service';

@NgModule({
  declarations: [
    CoursesComponent,
    CourseDialogComponent,
    CourseComponent,
    CoursesListComponent,
    CourseUserDialogComponent
  ],
  exports: [CoursesListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    SharedModule,
    TeachersModule,
    StudentsModule,
    CourseWorksModule,
    AnnouncementsModule
  ],
  providers: [
    CoursesService,
    CourseEntityService,
    CourseDataService,
    UserProfilesService,
    UserProfileEntityService,
    UserProfileDataService,
    GuardianEntityService,
    GuardianDataService,
    CoursesResolver,
    CourseResolver,
    GuardiansResolver,
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
