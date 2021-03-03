import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ChartsModule } from 'ng2-charts';

import { MaterialModule } from './../modules/material.module';
import { SchoolService } from '../school/services/school.service';

import { UserRoutingModule } from './user-routing.module';

import { GradesBarChartComponent } from './components/grades-bar-chart/grades-bar-chart.component';
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
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule,
    ChartsModule
  ],
  providers: [
    SchoolService
  ]
})
export class UserModule {

}
