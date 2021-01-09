/* import { CoursesEffects } from './state/courses.effects';
 */import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';

import { MaterialModule } from './../modules/material.module';

import { CoursesRoutingModule } from './courses-routing.module';

import { CourseDataService } from './services/course-data.service';
import { CourseEntityService } from './services/course-entity.service';
import { CoursesResolver } from './services/courses.resolver';
import { CoursesService } from './services/courses.service';
import { TeacherEntityService } from './services/teacher-entity.service';
import { AnnouncementDialogComponent } from './components/announcement-dialog/announcement-dialog.component';
import { AnnouncementResultComponent } from './components/announcement-result/announcement-result.component';
import { CourseDialogComponent } from './components/course-dialog/course-dialog.component';
import { CourseStudentsComponent } from './components/course-students/course-students.component';
import { CourseTeachersComponent } from './components/course-teachers/course-teachers.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { CoursesComponent } from './containers/courses/courses.component';
/* import { coursesReducer, coursesFeatureKey } from './state/courses.reducer';
 */import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';

const entityMetadata: EntityMetadataMap = {
  Course: {
    entityDispatcherOptions: {
      optimisticUpdate: true
    }
  },
  Teacher: {
  }
};
@NgModule({
  declarations: [CoursesComponent, AnnouncementDialogComponent, AnnouncementResultComponent, CourseDialogComponent, CoursesTableComponent, CourseComponent, CourseStudentsComponent, CourseTeachersComponent, CoursesListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    FontAwesomeModule,
    //StoreModule.forFeature(coursesFeatureKey, coursesReducer),
    //EffectsModule.forFeature([CoursesEffects]),
  ],
  exports: [CoursesTableComponent, CoursesListComponent],
  providers: [CoursesService, CourseDataService, CourseEntityService, CoursesResolver,
    CourseDataService, TeacherEntityService]
})
export class CoursesModule {
  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private courseDataService: CourseDataService,
    private teacherDataService: CourseDataService) {

    eds.registerMetadataMap(entityMetadata);

    entityDataService.registerService('Course', courseDataService);
    entityDataService.registerService('Teacher', teacherDataService);

  }
}
