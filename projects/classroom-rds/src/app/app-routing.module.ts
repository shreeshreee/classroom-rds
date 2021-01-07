import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

import { AuthGuard } from './auth/guards/auth.guard';
import { LayoutComponent } from './core/layout/layout.component';
import { ProfileComponent } from './auth/containers/profile/profile.component';
import { AboutComponent } from './shared/components/about/about.component';
import { HomeComponent } from './shared/components/home/home.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { PrivacyPolicyComponent } from './shared/components/privacy-policy/privacy-policy.component';
import { UnderConstructionComponent } from './shared/components/under-construction/under-construction.component';

const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule), canActivate: [AuthGuard]/* ,canActivate: [AuthGuard]  */ },
    { path: 'profile', component: ProfileComponent, canActivate: [AngularFireAuthGuard] },
    { path: 'about', component: AboutComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'under-construction', component: UnderConstructionComponent },
    { path: '**', redirectTo: 'not-found' }
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
