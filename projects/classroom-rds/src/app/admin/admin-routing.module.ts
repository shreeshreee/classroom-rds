import { GroupsResolver } from './services/groups.resolver';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent, GroupsComponent, UsersComponent } from '@rds-admin/containers';
import { AdminWellcomeComponent, UserDetailsComponent } from '@rds-admin/components';

import { UserDomainsResolver } from './services/user-domains.resolver';

const routes: Routes = [{
  path: '', component: AdminComponent, children: [
    { path: '', component: AdminWellcomeComponent },
    { path: 'users', component: UsersComponent, resolve: { users: UserDomainsResolver } },
    { path: 'users/:userId', component: UserDetailsComponent },
    { path: 'groups', component: GroupsComponent, resolve: { groups: GroupsResolver } }

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
