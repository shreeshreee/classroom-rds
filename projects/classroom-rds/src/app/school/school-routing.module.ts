import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchoolDashboardComponent, SchoolFormComponent, TeachersFormComponent } from './components';
import { SchoolComponent, SchoolStudentsComponent, SchoolTeachersComponent } from './container';

import { UsersResolver } from './services/users.resolver';

const routes: Routes = [{
  path: '', component: SchoolComponent, children: [
    { path: '', component: SchoolDashboardComponent },
    {
      path: 'alumnos', component: SchoolStudentsComponent, children: [
        { path: ':id', component: SchoolFormComponent }
      ]
    },
    { path: 'profesores', component: SchoolTeachersComponent, resolve: { users: UsersResolver } },
    { path: 'profesores/:id', component: TeachersFormComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
