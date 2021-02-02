import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WellcomeComponent } from './../shared/components/wellcome/wellcome.component';

import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesComponent } from './containers/courses/courses.component';
import { CourseResolver } from './services/course/course.resolver';
import { CoursesResolver } from './services/course/courses.resolver';


const routes: Routes = [
  {
    path: '', component: CoursesComponent, children: [
      { path: '', component: CoursesListComponent, resolve: { courses: CoursesResolver } },
      {
        path: ':courseId', component: CourseComponent, resolve: { course: CourseResolver }, children: [
          { path: '', component: WellcomeComponent },
          {
            path: 'students', loadChildren: () => import('./containers/students/students.module').then(m => m.StudentsModule)
          },
          {
            path: 'teachers', loadChildren: () => import('./containers/teachers/teachers.module').then(m => m.TeachersModule)
          },
          {
            path: 'courseworks', loadChildren: () => import('./containers/course-works/course-works.module').then(m => m.CourseWorksModule)
          },
          {
            path: 'announcements', loadChildren: () => import('./containers/announcements/announcements.module').then(m => m.AnnouncementsModule)
          },
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
