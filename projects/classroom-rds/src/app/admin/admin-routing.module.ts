import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent, GroupsComponent, UsersComponent } from '@rds-admin/containers';

import { UserDetailsComponent } from '../user/components/user-details/user-details.component';

import { AdminWellcomeComponent } from './components';

import { GroupsResolver } from './services/groups.resolver';
import { UserDomainsResolver } from './services/user-domains.resolver';
import { SchoolComponent } from './containers/school/school.component';

const routes: Routes = [{
  path: '', component: AdminComponent, children: [
    { path: '', component: AdminWellcomeComponent },
    { path: 'users', component: UsersComponent, resolve: { users: UserDomainsResolver } },
    { path: 'school', component: SchoolComponent, resolve: { users: UserDomainsResolver } },
    { path: 'users/:userId', component: UserDetailsComponent },
    { path: 'groups', component: GroupsComponent, resolve: { groups: GroupsResolver } }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
