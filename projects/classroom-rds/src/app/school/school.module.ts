import { SharedModule } from '@rds-shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { EntityDataService, EntityDefinitionService, EntityServices } from '@ngrx/data';

import * as fromEntity from '@rds-store/app/config/entity-metadata';
import * as fromUser from '@rds-store/user';
import * as fromClass from '@rds-store/class';

import { appearanceModules } from './../modules';
import { UserDataService } from './../store/user/user-data.service';
import { UserEntityService } from './../store/user/user-entity.service';

import { schoolContainers } from './container';
import { SchoolRoutingModule } from './school-routing.module';

import { schoolComponents } from './components';
import { SchoolService } from './services/school.service';
import { UsersResolver } from './services/users.resolver';
import { ClassesEntityService } from '../store/class/classes-entity.service';
import { ClassesDataService } from '../store/class/classes-data.service';
import { SubjectDialogComponent } from './components/subject-dialog/subject-dialog.component'




@NgModule({
  declarations: [
    ...schoolComponents,
    ...schoolContainers,
    SubjectDialogComponent,
  ],
  imports: [
    SharedModule,
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
    ClassesEntityService,
    ClassesDataService,
  ]
})
export class SchoolModule {
  constructor(
    eds: EntityDefinitionService,
    entityServices: EntityServices,
    entityDataService: EntityDataService,
    userEntityService: UserEntityService,
    userDataService: UserDataService,
    classEntityService: ClassesEntityService,
    classDataService: ClassesDataService,
  ) {
    eds.registerMetadataMap(fromEntity.entityMetadata);
    entityServices.registerEntityCollectionServices([userEntityService, classEntityService]);
    entityDataService.registerService(fromUser.entityCollectionName, userDataService);
    entityDataService.registerService(fromClass.entityCollectionName, classDataService);

  }
}
