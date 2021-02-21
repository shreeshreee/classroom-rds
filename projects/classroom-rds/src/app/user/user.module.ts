import { UserResolver } from './resolvers/user.resolver';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MaterialModule } from './../modules/material.module';

import { UserRoutingModule } from './user-routing.module';

import { UserScoresService } from './services/user-scores.service';
import { GradesTableComponent } from './components/grades-table/grades-table.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserGradesComponent } from './components/user-grades/user-grades.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { UserComponent } from './containers/user/user.component';



@NgModule({
  declarations: [
    UserComponent,
    UserMenuComponent,
    UserHomeComponent,
    UserGradesComponent,
    UserDetailsComponent,
    GradesTableComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule,
  ],
  providers: [
    UserScoresService,
  ]
})
export class UserModule {

}
