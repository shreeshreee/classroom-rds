import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseAnnouncementsComponent } from './components/course-announcements/course-announcements.component';
import { CourseStudentsComponent } from './components/course-students/course-students.component';
import { CourseTeachersComponent } from './components/course-teachers/course-teachers.component';
import { CourseWorkComponent } from './components/course-work/course-work.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesComponent } from './containers/courses/courses.component';
import { AnnouncementResolver } from './services/announcement/announcement.resolver';
import { CourseWorksResolver } from './services/course-work/course-works.resolver';
import { CourseResolver } from './services/course/course.resolver';
import { CoursesResolver } from './services/course/courses.resolver';
import { StudentsResolver } from './services/student/students.resolver';
import { TeachersResolver } from './services/teacher/teachers.resolver';

const routes: Routes = [
  {
    path: '', component: CoursesComponent, children: [
      { path: '', component: CoursesListComponent, resolve: { courses: CoursesResolver } },
      {
        path: ':courseId', component: CourseComponent, resolve: { course: CourseResolver }, children: [
          { path: 'students', component: CourseStudentsComponent, resolve: { students: StudentsResolver } },
          { path: 'teachers', component: CourseTeachersComponent, resolve: { teachers: TeachersResolver } },
          { path: 'courseworks', component: CourseWorkComponent, resolve: { courseworks: CourseWorksResolver } },
          { path: 'announcements', component: CourseAnnouncementsComponent, resolve: { announcements: AnnouncementResolver } },
        ]
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CoursesRoutingModule { }
