import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserResolver } from './services/user.resolver';
import { UserGradesComponent } from './components/user-grades/user-grades.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { WorkingOnGradesComponent } from './components/working-on-grades/working-on-grades.component';
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
