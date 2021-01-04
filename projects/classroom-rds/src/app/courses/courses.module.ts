import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { MaterialModule } from './../modules/material.module';

import { CoursesRoutingModule } from './courses-routing.module';

import { CoursesService } from './services/courses.service';
import * as fromCourseEffects from './state/courses.effects';
import * as fromCourseReducer from './state/courses.reducer';
import { AnnouncementDialogComponent } from './components/announcement-dialog/announcement-dialog.component';
import { AnnouncementResultComponent } from './components/announcement-result/announcement-result.component';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { CoursesComponent } from './containers/courses/courses.component';


@NgModule({
  declarations: [CoursesComponent, AnnouncementDialogComponent, AnnouncementResultComponent, CourseDialogComponent, CoursesTableComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    StoreModule.forFeature(fromCourseReducer.coursesFeatureKey, fromCourseReducer.coursesReducer),
    EffectsModule.forFeature([fromCourseEffects.CoursesEffects]),
  ],
  providers: [CoursesService]
})
export class CoursesModule { }
