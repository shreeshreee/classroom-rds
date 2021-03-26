import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsersResolver } from './services/users.resolver';
import { SchoolDashboardComponent } from './components/school-dashboard/school-dashboard.component';
import { SchoolFormComponent } from './components/school-form/school-form.component';
import { TeachersFormComponent } from './components/teachers-form/teachers-form.component';
import { SchoolStudentsComponent } from './container/school-students/school-students.component';
import { SchoolTeachersComponent } from './container/school-teachers/school-teachers.component';
import { SchoolComponent } from './container/school/school.component';

const routes: Routes = [{
  path: '', component: SchoolComponent, children: [
    { path: '', component: SchoolDashboardComponent, resolve: { users: UsersResolver } },
    {
      path: 'alumnos', component: SchoolStudentsComponent, children: [
        { path: ':id', component: SchoolFormComponent }
      ]
    },
    { path: 'profesores', component: SchoolTeachersComponent },
    { path: 'profesores/:id', component: TeachersFormComponent }
    /* { path: 'alumnos/:id', component: SchoolStudentComponent }, */
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
