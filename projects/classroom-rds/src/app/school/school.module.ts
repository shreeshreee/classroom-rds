import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDataService, EntityDefinitionService, EntityServices } from '@ngrx/data';

import * as fromEntity from '@rds-store/app/config/entity-metadata';
import * as fromUser from '@rds-store/user';

import { appearanceModules } from './../modules/index';
import { MaterialModule } from './../modules/material.module';
import { UserDataService } from './../store/user/user-data.service';
import { UserEntityService } from './../store/user/user-entity.service';

import { schoolContainers } from './container';
import { SchoolRoutingModule } from './school-routing.module';

import { schoolComponents } from './components/index';
import { SchoolService } from './services/school.service';
import { UsersResolver } from './services/users.resolver';



@NgModule({
  declarations: [
    ...schoolComponents,
    ...schoolContainers
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...appearanceModules
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
