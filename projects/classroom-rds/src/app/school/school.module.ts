import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDataService, EntityDefinitionService, EntityServices } from '@ngrx/data';

import * as fromEntity from '@rds-store/app/config/entity-metadata';
import * as fromUser from '@rds-store/user';

import { MaterialModule } from './../modules/material.module';
import { UserDataService } from './../store/user/user-data.service';
import { UserEntityService } from './../store/user/user-entity.service';

import { SchoolRoutingModule } from './school-routing.module';

import { SchoolService } from './services/school.service';
import { UsersResolver } from './services/users.resolver';
import { SchoolDashboardComponent } from './components/school-dashboard/school-dashboard.component';
import { SchoolFormComponent } from './components/school-form/school-form.component';
import { SchoolStudentsComponent } from './container/school-students/school-students.component';
import { SchoolComponent } from './container/school/school.component';
import { SubjectsComponent } from './container/subjects/subjects.component';
import { SchoolTeachersComponent } from './container/school-teachers/school-teachers.component';
import { TeachersFormComponent } from './components/teachers-form/teachers-form.component';


@NgModule({
  declarations: [
    SchoolComponent,
    SchoolDashboardComponent,
    SchoolStudentsComponent,
    SchoolFormComponent,
    SubjectsComponent,
    SchoolTeachersComponent,
    TeachersFormComponent,
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule,
  ],
  providers: [
    SchoolService,
    UsersResolver,
    UserEntityService,
    UserDataService,
  ]
})
export class SchoolModule {
  constructor(
    eds: EntityDefinitionService,
    entityServices: EntityServices,
    entityDataService: EntityDataService,
    userEntityService: UserEntityService,
    userDataService: UserDataService,
  ) {
    entityServices.registerEntityCollectionServices([userEntityService]);
    eds.registerMetadataMap(fromEntity.entityMetadata);
    entityDataService.registerService(fromUser.entityCollectionName, userDataService);
  }
}
