import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EffectsModule } from '@ngrx/effects';

import { UserProfileEffects } from '@rds-classroom/state/effects/user-profile.effects';

import { ClassroomRoutingModule } from './classroom-routing.module';
import { ClassroomComponent } from './classroom.component';

import { AnnouncementsModule } from './announcements/announcements.module';
import { CourseWorksModule } from './course-works/course-works.module';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { UserProfilesModule } from './user-profiles/user-profiles.module';
import { MaterialModule } from '~/app/modules/material.module';


@NgModule({
  declarations: [ClassroomComponent],
  imports: [
    CommonModule,
    ClassroomRoutingModule,
    MaterialModule,
    FontAwesomeModule,
    FlexLayoutModule,
    UserProfilesModule,
    TeachersModule,
    CoursesModule,
    StudentsModule,
    AnnouncementsModule,
    EffectsModule.forFeature([UserProfileEffects])
  ],
  exports: [ClassroomComponent]
})
export class ClassroomModule { }
