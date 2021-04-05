import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EntityDefinitionService, EntityServices, EntityDataService } from '@ngrx/data';

import * as fromEntity from '@rds-store/app/config/entity-metadata';
import * as fromUser from '@rds-store/user';

import { SchoolService } from '@rds-school/services/school.service';

import { UserDataService } from '@rds-store/user/user-data.service';
import { UserEntityService } from '@rds-store/user/user-entity.service';

import { ChartsModule } from 'ng2-charts';

import { userComponents } from './components';
import { UserRoutingModule } from './user-routing.module';

import { UserResolver } from './services/user.resolver';
import { appearanceModules } from '~/app/modules';


@NgModule({
  declarations: [
    ...userComponents
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...appearanceModules,
    ChartsModule,

  ],
  providers: [
    SchoolService,
    UserResolver,
    UserEntityService,
    UserDataService,
  ]
})
export class UserModule {
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
