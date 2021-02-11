import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';

import { ClassroomComponent } from './classroom.component';

const routes: Routes = [
  { path: '', component: ClassroomComponent },
  {
    path: 'clases', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: 'u', loadChildren: () => import('./user-profiles/user-profiles.module').then(m => m.UserProfilesModule)
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassroomRoutingModule { }
