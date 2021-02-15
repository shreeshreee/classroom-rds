import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { GoogleSheetsDbService } from 'ng-google-sheets-db';

import { MaterialModule } from './../modules/material.module';

import { UserRoutingModule } from './user-routing.module';

import { UserGradesComponent } from './components/user-grades/user-grades.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UserComponent } from './containers/user/user.component';


@NgModule({
  declarations: [UserComponent, UserMenuComponent, UserHomeComponent, UserInfoComponent, UserGradesComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule
  ],
  providers: [
    GoogleSheetsDbService,
  ]
})
export class UserModule { }
