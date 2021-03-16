import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EntityDefinitionService, EntityServices, EntityDataService } from '@ngrx/data';

import * as fromEntity from '@rds-store/app/config/entity-metadata';
import * as fromUser from '@rds-store/user';

import { ChartsModule } from 'ng2-charts';

import { MaterialModule } from './../modules/material.module';
import { SchoolService } from '../school/services/school.service';
import { UserDataService } from '../store/user/user-data.service';
import { UserEntityService } from '../store/user/user-entity.service';

import { UserRoutingModule } from './user-routing.module';

import { UserResolver } from './services/user.resolver';
import { GradeRecomendationComponent } from './components/grade-recomendation/grade-recomendation.component';
import { GradesBarChartComponent } from './components/grades-bar-chart/grades-bar-chart.component';
import { GradesListComponent } from './components/grades-list/grades-list.component';
import { GradesTableComponent } from './components/grades-table/grades-table.component';
import { UserGradesPrintableComponent } from './components/user-grades-printable/user-grades-printable.component';
import { UserGradesComponent } from './components/user-grades/user-grades.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UserComponent } from './containers/user/user.component';

@NgModule({
  declarations: [
    UserComponent,
    UserMenuComponent,
    UserHomeComponent,
    UserGradesComponent,
    UserGradesPrintableComponent,
    GradesTableComponent,
    GradesBarChartComponent,
    UserInfoComponent,
    GradeRecomendationComponent,
    GradesListComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule,
    ChartsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
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
