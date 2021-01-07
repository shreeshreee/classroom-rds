import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesResolver } from './services/courses.resolver';
import { CourseStudentsComponent } from './components/course-students/course-students.component';
import { CourseTeachersComponent } from './components/course-teachers/course-teachers.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { CoursesComponent } from './containers/courses/courses.component';


const routes: Routes = [
  {
    path: '', component: CoursesComponent, resolve: { courses: CoursesResolver }, children: [
      { path: '', component: CoursesTableComponent, resolve: { courses: CoursesResolver } },
      { path: ':id', component: CourseComponent, resolve: { courses: CoursesResolver } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
