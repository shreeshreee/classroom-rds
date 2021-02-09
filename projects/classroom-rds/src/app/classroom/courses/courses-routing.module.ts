import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WellcomeComponent } from '@rds-shared/components/wellcome/wellcome.component';

import { CourseResolver } from './resolvers/course.resolver';
import { CoursesResolver } from './resolvers/courses.resolver';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesComponent } from './containers/courses/courses.component';


const routes: Routes = [
  {
    path: '', component: CoursesComponent, children: [
      { path: '', component: CoursesListComponent, resolve: { courses: CoursesResolver } },
      {
        path: ':courseId', component: CourseComponent, resolve: { course: CourseResolver }, children: [
          { path: '', component: WellcomeComponent },
          {
            path: 'students', loadChildren: () => import('../students/students.module').then(m => m.StudentsModule)
          },
          {
            path: 'teachers', loadChildren: () => import('../teachers/teachers.module').then(m => m.TeachersModule)
          },
          {
            path: 'courseworks', loadChildren: () => import('../course-works/course-works.module').then(m => m.CourseWorksModule)
          },
          {
            path: 'announcements', loadChildren: () => import('../announcements/announcements.module').then(m => m.AnnouncementsModule)
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
