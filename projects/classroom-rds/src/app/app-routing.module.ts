import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

import { AuthGuard } from './auth/guards/auth.guard';
import { LayoutComponent } from './core/layout/layout.component';
import { ProfileComponent } from './auth/containers/profile/profile.component';
import { HomeComponent } from './shared/components/home/home.component';

const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule), canActivate: [AuthGuard]/* ,canActivate: [AuthGuard]  */ },
    { path: 'profile', component: ProfileComponent, canActivate: [AngularFireAuthGuard] },
    { path: '**', redirectTo: '/' }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'legacy'
  }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
