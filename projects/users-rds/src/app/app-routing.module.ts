import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullscreenOverlayContainer } from '@angular/cdk/overlay';

import { HomeComponent, UnderConstructionComponent } from './shared/components';
import { LayoutComponent } from './core/layout/containers/layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: HomeComponent }
    ]
  },
  { path: 'under-construction', component: UnderConstructionComponent },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
