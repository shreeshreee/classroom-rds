import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@rds-auth/guards/auth.guard';

import { LayoutComponent } from '@rds-core/layout/layout.component';

import { AboutComponent } from '@rds-shared/components/about/about.component';
import { CodeConductSchoolComponent } from '@rds-shared/components/code-conduct-school/code-conduct-school.component';
import { CodeConductComponent } from '@rds-shared/components/code-conduct/code-conduct.component';
import { HomeComponent } from '@rds-shared/components/home/home.component';
import { LicenseComponent } from '@rds-shared/components/license/license.component';
import { LocationComponent } from '@rds-shared/components/location/location.component';
import { NotFoundComponent } from '@rds-shared/components/not-found/not-found.component';
import { PrivacyPolicyComponent } from '@rds-shared/components/privacy-policy/privacy-policy.component';
import { RemoteLearningComponent } from '@rds-shared/components/remote-learning/remote-learning.component';
import { TermsComponent } from '@rds-shared/components/terms/terms.component';
import { UnderConstructionComponent } from '@rds-shared/components/under-construction/under-construction.component';

import { ConfigComponent } from './core/layout/config/config.component';
import { ResumeComponent } from './shared/components/resume/resume.component';
import { YoutubeComponent } from '~/app/shared/components/youtube/youtube.component';
const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    { path: '', component: HomeComponent },
    { path: 'config', component: ConfigComponent },
    { path: 'escuela', loadChildren: () => import('./school/school.module').then(m => m.SchoolModule), canActivate: [AuthGuard] },
    { path: 'gsuite', loadChildren: () => import('./classroom/classroom.module').then(m => m.ClassroomModule), canActivate: [AuthGuard] },
    { path: 'perfil', loadChildren: () => import('./classroom/user-profiles/user-profiles.module').then(m => m.UserProfilesModule), canActivate: [AuthGuard] },
    { path: 'calificaciones', loadChildren: () => import('./grades/grades.module').then(m => m.GradesModule), canActivate: [AuthGuard] },
    /*     { path: 'clases', loadChildren: () => import('./classroom/courses/courses.module').then(m => m.CoursesModule), canActivate: [AuthGuard] },*/
    { path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule), canActivate: [AuthGuard] },
    { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthGuard] },
    { path: 'youtube', component: YoutubeComponent },
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
    { path: 'resume', component: ResumeComponent },

    { path: '**', component: NotFoundComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    /* relativeLinkResolution: 'corrected',
    paramsInheritanceStrategy: 'always', */
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
