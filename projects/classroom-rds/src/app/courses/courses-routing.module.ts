import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesResolver } from './services/courses.resolver';
import { CourseComponent } from './components/course/course.component';
import { CoursesComponent } from './containers/courses/courses.component';
import { CoursesListComponent } from './components/courses-list/courses-list.component';


const routes: Routes = [

  {
    path: '', component: CoursesComponent, resolve: { courses: CoursesResolver }, children: [
      { path: '', component: CoursesListComponent, resolve: { courses: CoursesResolver } },
      { path: ':id', component: CourseComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesRoutingModule { }
