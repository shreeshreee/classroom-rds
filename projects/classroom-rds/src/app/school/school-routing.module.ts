import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminGuard } from '../admin/guards/admin.guard';

import { AssigmentsDashboardComponent, SchoolDashboardComponent, TeachersFormComponent } from './components';
import { AssignmentsComponent, SchoolComponent, SchoolStudentsComponent, SchoolTeachersComponent, SubjectsComponent } from './container';

import { UsersResolver } from './services/users.resolver';

const routes: Routes = [{
  path: '', component: SchoolComponent, data: { breadcrumb: null, }, children: [
    { path: '', component: SchoolDashboardComponent, data: { breadcrumb: null, } },
    { path: 'alumnos', component: SchoolStudentsComponent, data: { breadcrumb: 'Alumnos', }, },
    {
      path: 'asignaciones', component: AssignmentsComponent, data: { breadcrumb: 'Asignaciones' }, children: [
        { path: '', component: AssigmentsDashboardComponent, data: { breadcrumb: null } },
        { path: 'rooms', loadChildren: () => import('../rooms/rooms.module').then(m => m.RoomsModule), canActivate: [AdminGuard], data: { breadcrumb: 'Grupos' }, resolve: { users: UsersResolver } },
        { path: 'materias', component: SubjectsComponent, data: { breadcrumb: 'Materias' } },
        { path: 'nuevo', component: SubjectsComponent }
      ]
    },
    { path: 'profesores', component: SchoolTeachersComponent, resolve: { users: UsersResolver }, data: { breadcrumb: 'Profesores' } },
    { path: 'profesores/:id', component: TeachersFormComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SchoolRoutingModule { }
