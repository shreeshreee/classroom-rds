import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentCoursesResolver } from './services/student-courses.resolver';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { UserGradesComponent } from './components/user-grades/user-grades.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserProfileComponent } from './containers/user-profile/user-profile.component';

const routes: Routes = [
  {
    path: '', component: UserProfileComponent, children: [
      { path: '', component: UserHomeComponent },
      { path: 'edit', component: EditProfileComponent },
      {
        path: 'grades', component: UserGradesComponent, resolve: { courses: StudentCoursesResolver }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfilesRoutingModule { }
