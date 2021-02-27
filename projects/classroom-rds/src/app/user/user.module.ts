import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ChartsModule } from 'ng2-charts';

import { MaterialModule } from './../modules/material.module';

import { UserRoutingModule } from './user-routing.module';

import { UserScoresService } from './services/user-scores.service';
import { GradesTableComponent } from './components/grades-table/grades-table.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserGradesComponent } from './components/user-grades/user-grades.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UserComponent } from './containers/user/user.component';
import { GradesBarChartComponent } from './components/grades-bar-chart/grades-bar-chart.component';

@NgModule({
  declarations: [
    UserComponent,
    UserMenuComponent,
    UserHomeComponent,
    UserGradesComponent,
    UserDetailsComponent,
    GradesTableComponent,
    GradesBarChartComponent
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
    UserScoresService,
  ]
})
export class UserModule {

}
