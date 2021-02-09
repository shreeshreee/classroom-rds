import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@rds-auth/guards/auth.guard';

import { LayoutComponent } from '@rds-core/layout/layout.component';

import { AboutComponent } from '@rds-shared/components/about/about.component';
import { CodeConductSchoolComponent } from '@rds-shared/components/code-conduct-school/code-conduct-school.component';
import { CodeConductComponent } from '@rds-shared/components/code-conduct/code-conduct.component';
import { GalletasComponent } from '@rds-shared/components/galletas/galletas.component';
import { HomeComponent } from '@rds-shared/components/home/home.component';
import { LicenseComponent } from '@rds-shared/components/license/license.component';
import { LocationComponent } from '@rds-shared/components/location/location.component';
import { NotFoundComponent } from '@rds-shared/components/not-found/not-found.component';
import { PrivacyPolicyComponent } from '@rds-shared/components/privacy-policy/privacy-policy.component';
import { RemoteLearningComponent } from '@rds-shared/components/remote-learning/remote-learning.component';
import { TermsComponent } from '@rds-shared/components/terms/terms.component';
import { UnderConstructionComponent } from '@rds-shared/components/under-construction/under-construction.component';
const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    {
      path: 'c', loadChildren: () =>
        import('./classroom/classroom.module')
          .then(m => m.ClassroomModule),
      canActivate: [AuthGuard]
    },
    {
      path: 'u', loadChildren: () =>
        import('./classroom/user-profiles/user-profiles.module')
          .then(m => m.UserProfilesModule),
      canActivate: [AuthGuard]
    },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'galletas', component: GalletasComponent },
    { path: 'about', component: AboutComponent },
    { path: 'remote-learning', component: RemoteLearningComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: 'location', component: LocationComponent },
    { path: 'license', component: LicenseComponent },
    { path: 'code-conduct', component: CodeConductComponent },
    { path: 'code-conduct-school', component: CodeConductSchoolComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'under-construction', component: UnderConstructionComponent },
  ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
