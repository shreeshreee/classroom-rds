import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserResolver } from './services/user.resolver';
import { SchoolDashboardComponent } from './components/school-dashboard/school-dashboard.component';
import { SchoolFormComponent } from './components/school-form/school-form.component';
import { SchoolStudentsComponent } from './container/school-students/school-students.component';
import { SchoolComponent } from './container/school/school.component';

const routes: Routes = [{
  path: '', component: SchoolComponent, children: [
    { path: '', component: SchoolDashboardComponent, resolve: { users: UserResolver } },
    {
      path: 'alumnos', component: SchoolStudentsComponent, children: [
        { path: ':id', component: SchoolFormComponent }
      ]
    },
    /* { path: 'alumnos/:id', component: SchoolStudentComponent }, */
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
