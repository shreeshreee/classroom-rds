import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent, AboutComponent, PrivacyPolicyComponent, NotFoundComponent, UnderConstructionComponent } from './shared/components';
import { AuthGuard } from './auth/guards/auth.guard';
import { LayoutComponent } from './core/layout/layout.component';
import { ProfileComponent } from './auth/containers/profile/profile.component';
import { CodeConductComponent } from './shared/components/code-conduct/code-conduct.component';
import { LicenseComponent } from './shared/components/license/license.component';
import { TermsComponent } from './shared/components/terms/terms.component';

const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    { path: '', component: HomeComponent },
    /* {
      path: 'c', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
      canActivate: [AuthGuard]
    }, */
    { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'about', component: AboutComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'license', component: LicenseComponent },
    { path: 'code-conduct', component: CodeConductComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'under-construction', component: UnderConstructionComponent },
  ]
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
