import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseStudentsComponent } from './components/course-students/course-students.component';
import { CourseTeachersComponent } from './components/course-teachers/course-teachers.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesComponent } from './containers/courses/courses.component';
import { CourseResolver } from './services/course/course.resolver';
import { CoursesResolver } from './services/course/courses.resolver';
import { StudentResolver } from './services/student/student.resolver';

const routes: Routes = [
  {
    path: '', component: CoursesComponent, children: [
      { path: '', component: CoursesListComponent, resolve: { courses: CoursesResolver } },
      {
        path: ':courseId', component: CourseComponent, resolve: { course: CourseResolver }, children: [
          /* { path: ':courseId/students', component: CourseStudentsComponent, resolve: { students: StudentResolver } },
          { path: ':courseId/teachers', component: CourseTeachersComponent, resolve: { teachers: StudentResolver } }, */

        ]
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
