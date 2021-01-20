import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseInfoComponent } from './components/course-info/course-info.component';
import { CourseStudentsComponent } from './components/course-students/course-students.component';
import { CourseTeachersComponent } from './components/course-teachers/course-teachers.component';
import { CourseComponent } from './components/course/course.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesComponent } from './containers/courses/courses.component';
import { CoursesResolver } from './services/course/courses.resolver';
import { StudentsResolver } from './services/student/students.resolver';
import { TeachersResolver } from './services/teacher/teachers.resolver';

const routes: Routes = [
  {
    path: '', component: CoursesComponent, children: [
      { path: '', component: CoursesListComponent, resolve: { courses: CoursesResolver } },
      {
        path: ':courseId', component: CourseComponent, children: [
          { path: '', component: CourseInfoComponent },
          { path: 'students', component: CourseStudentsComponent },
          { path: 'teachers', component: CourseTeachersComponent },
        ]
      },
      /* , children: [ */
      /* { path: ':courseId/students', component: CourseStudentsComponent, resolve: { students: StudentResolver } },
      { path: ':courseId/teachers', component: CourseTeachersComponent, resolve: { teachers: StudentResolver } }, */
    ]
  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
