import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDefinitionService, EntityServices, EntityDataService } from '@ngrx/data';

import * as fromCourse from '@rds-store/course';
import * as fromEntity from '@rds-store/app/config/entity-metadata';

import { MaterialModule } from './../modules/material.module';
import { CourseDataService } from '../store/course/course-data.service';
import { CourseEntityService } from '../store/course/course-entity.service';
import { UserProfileDataService } from '../store/user-profile/user-profile-data.service';
import { UserProfileEntityService } from '../store/user-profile/user-profile-entity.service';
import { CoursesService } from '../courses/services/course/courses.service';

import { UserProfilesRoutingModule } from './user-profiles-routing.module';

import { StudentCoursesResolver } from './services/student-courses.resolver';
import { UserProfilesService } from './services/user-profiles.service';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { UserGradesComponent } from './components/user-grades/user-grades.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';

@NgModule({
  declarations: [
    EditProfileComponent,
    ProfileUserComponent,
    UserProfileComponent,
    UserGradesComponent,
    UserHomeComponent
  ],
  imports: [
    CommonModule,
    UserProfilesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
  ],
  providers: [
    UserProfilesService,
    UserProfileEntityService,
    UserProfileDataService,
    CoursesService,
    CourseEntityService,
    CourseDataService,
    StudentCoursesResolver
  ]
})
export class UserProfilesModule {
  constructor(
    eds: EntityDefinitionService,
    entityServices: EntityServices,
    entityDataService: EntityDataService,
    courseEntityService: CourseEntityService,
    courseDataService: CourseDataService,
  ) {
    entityServices.registerEntityCollectionServices([courseEntityService]);
    eds.registerMetadataMap(fromEntity.entityMetadata);
    entityDataService.registerService(fromCourse.entityCollectionName, courseDataService);
  }
}
