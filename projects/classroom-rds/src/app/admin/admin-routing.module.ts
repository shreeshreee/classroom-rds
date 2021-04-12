import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent, GroupsComponent, UsersComponent } from '@rds-admin/containers';

import { AdminWellcomeComponent } from './components';

import { GroupsResolver } from './services/groups.resolver';
import { UserDomainsResolver } from './services/user-domains.resolver';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UsersGroupsComponent } from './components/users-groups/users-groups.component';
import { SchoolHomeComponent } from './containers/school-home/school-home.component';

const routes: Routes = [{
  path: '', component: AdminComponent, children: [
    { path: '', component: AdminWellcomeComponent },
    { path: 'users', component: UsersComponent, resolve: { users: UserDomainsResolver } },
    { path: 'school-home', component: SchoolHomeComponent, resolve: { users: UserDomainsResolver } },
    { path: 'users/:userId', component: UserDetailsComponent },
    { path: 'groups', component: GroupsComponent, resolve: { groups: GroupsResolver } },
    { path: 'users-in-groups', component: UsersGroupsComponent, resolve: { users: UserDomainsResolver } },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
