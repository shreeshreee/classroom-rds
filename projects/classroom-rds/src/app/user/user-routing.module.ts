import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserGradesComponent } from './components/user-grades/user-grades.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserComponent } from './containers/user/user.component';

const routes: Routes = [{
  path: '', component: UserComponent, children: [
    { path: '', component: UserHomeComponent },
    { path: 'details', component: UserDetailsComponent },
    { path: 'grades', component: UserGradesComponent },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
