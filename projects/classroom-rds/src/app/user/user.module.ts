import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDataService, EntityDefinitionService, EntityServices } from '@ngrx/data';

import * as fromUserDomain from '@rds-admin/state/user-domain';

import * as fromEntity from '@rds-store/app/config/entity-metadata';

import { MaterialModule } from './../modules/material.module';
import { UserDomainDataService } from '../admin/state/user-domain/user-domain-data.service';
import { UserDomainEntityService } from '../admin/state/user-domain/user-domain-entity.service';

import { UserRoutingModule } from './user-routing.module';

import { UserScoresService } from './services/user-scores.service';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserGradesComponent } from './components/user-grades/user-grades.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UserComponent } from './containers/user/user.component';
import { GradesTableComponent } from './components/grades-table/grades-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';



@NgModule({
  declarations: [UserComponent, UserMenuComponent, UserHomeComponent, UserGradesComponent, UserDetailsComponent, GradesTableComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

  ],
  providers: [
    UserScoresService,
  ]
})
export class UserModule {

}
