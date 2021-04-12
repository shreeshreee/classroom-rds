import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDefinitionService, EntityServices, EntityDataService } from '@ngrx/data';

import { AdminRoutingModule } from '@rds-admin/admin-routing.module';
import * as fromAdminServices from '@rds-admin/services';

import { SharedModule } from '@rds-shared/shared.module';

import * as fromUserDomain from '@rds-admin/state/user-domain';
import * as fromGroup from '@rds-admin/state/group';

import * as fromEntity from '@rds-store/app/config/entity-metadata';

import { adminComponents } from '@rds-admin/components';
import { AdminComponent, adminContainers } from '@rds-admin/containers';
import { adminServices } from '@rds-admin/services';

import { GroupsResolver } from './services/groups.resolver';
import { UserDomainsResolver } from './services/user-domains.resolver';
import { GroupTableComponent } from './components/group-table/group-table.component';
import { SchoolHomeComponent } from './containers/school-home/school-home.component';
import { GroupDataService } from './state/group/group-data.service';
import { GroupEntityService } from './state/group/group-entity.service';
import { UserDomainDataService } from './state/user-domain/user-domain-data.service';
import { UserDomainEntityService } from './state/user-domain/user-domain-entity.service';
import { MaterialModule } from '~/app/modules/material.module';

@NgModule({
  declarations: [
    ...adminComponents,
    ...adminContainers,
    GroupTableComponent,
    SchoolHomeComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule,
    SharedModule,
  ],
  exports: [AdminComponent],
  providers: [
    ...adminServices,
    UserDomainsResolver,
    UserDomainEntityService,
    UserDomainDataService,
    GroupsResolver,
    GroupEntityService,
    GroupDataService
  ]
})
export class AdminModule {
  constructor(
    eds: EntityDefinitionService,
    entityServices: EntityServices,
    entityDataService: EntityDataService,
    userDomainEntityService: UserDomainEntityService,
    userDomainDataService: UserDomainDataService,
    groupEntityService: GroupEntityService,
    groupDataService: GroupDataService
  ) {
    entityServices.registerEntityCollectionServices([userDomainEntityService, groupEntityService]);
    eds.registerMetadataMap(fromEntity.entityMetadata);
    entityDataService.registerService(fromUserDomain.entityCollectionName, userDomainDataService);
    entityDataService.registerService(fromGroup.entityCollectionName, groupDataService);

  }
}
