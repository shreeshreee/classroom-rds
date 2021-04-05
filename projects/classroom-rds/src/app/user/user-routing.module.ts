import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserHomeComponent, UserInfoComponent, WorkingOnGradesComponent, UserGradesComponent } from './components';

import { UserResolver } from './services/user.resolver';
import { UserComponent } from './containers/user/user.component';


const routes: Routes = [
  {
    path: ':id', component: UserComponent, resolve: { user: UserResolver }, children: [
      /* { path: '', redirectTo: ':userId', pathMatch: 'full' }, */
      { path: '', component: UserHomeComponent },
      { path: 'info', component: UserInfoComponent },
      { path: 'grades_soon', component: WorkingOnGradesComponent },
      { path: 'grades', component: UserGradesComponent },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
