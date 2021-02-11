import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GradesComponent } from './grades.component';

import { CoursesGradeResolver } from './resolvers/courses-grade.resolver';
import { StudentsGradeResolver } from './resolvers/students-grade.resolver';
import { GradeCourseComponent } from './component/grade-course/grade-course.component';

const routes: Routes = [
  {
    path: '', component: GradesComponent, resolve: { courses: CoursesGradeResolver }, children: [
      { path: ':courseId', component: GradeCourseComponent, resolve: { students: StudentsGradeResolver } }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradesRoutingModule { }
