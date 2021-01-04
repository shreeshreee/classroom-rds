import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

import { LayoutComponent } from './core/layout/layout.component';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [{
  path: '', component: LayoutComponent, children: [
    { path: '', component: HomeComponent },
    {
      path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),

    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
