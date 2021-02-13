import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesGradeResolver } from './resolvers/courses-grade.resolver';
import { StudentsGradeResolver } from './resolvers/students-grade.resolver';
import { GradeCourseComponent } from './components/grade-course/grade-course.component';
import { GradesWellcomeComponent } from './components/grades-wellcome/grades-wellcome.component';
import { GradesComponent } from './containers/grades/grades.component';

const routes: Routes = [
  {
    path: '', component: GradesComponent, resolve: { courses: CoursesGradeResolver }, children: [
      { path: '', component: GradesWellcomeComponent },
      { path: ':courseId', component: GradeCourseComponent, resolve: { students: StudentsGradeResolver } }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradesRoutingModule { }
