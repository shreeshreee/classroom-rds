import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoursesGradeResolver } from './resolvers/courses-grade.resolver';
import { StudentsGradeResolver } from './resolvers/students-grade.resolver';
import { GradeCourseComponent } from './components/grade-course/grade-course.component';
import { GradesWellcomeComponent } from './components/grades-wellcome/grades-wellcome.component';
import { GradesComponent } from './containers/grades/grades.component';

const routes: Routes = [
  {
    path: '', component: GradesComponent, children: [
      { path: '', component: GradesWellcomeComponent },
      { path: 'student', component: GradeCourseComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradesRoutingModule { }
