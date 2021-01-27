import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesComponent } from './containers/courses/courses.component';
import { AnnouncementResolver } from './services/announcement/announcement.resolver';
import { CourseWorksResolver } from './services/course-work/course-works.resolver';
import { CoursesResolver } from './services/course/courses.resolver';
import { StudentsResolver } from './services/student/students.resolver';
import { TeachersResolver } from './services/teacher/teachers.resolver';

const routes: Routes = [
  {
    path: '', component: CoursesComponent, children: [
      { path: '', component: CoursesListComponent, resolve: { courses: CoursesResolver } },
      {
        path: ':courseId', component: CourseComponent,
        resolve: { teachers: TeachersResolver, students: StudentsResolver, announcements: AnnouncementResolver, courseWorks: CourseWorksResolver }
      },
      /* , children: [ */
      /* { path: ':courseId/students', component: CourseStudentsComponent,  },
      { path: ':courseId/teachers', component: CourseTeachersComponent, resolve: { teachers: StudentResolver } }, */
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CoursesRoutingModule { }
