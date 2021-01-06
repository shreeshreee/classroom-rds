import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MaterialModule } from '../modules/material.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from '../shared/components/dashboard/dashboard.component';
import { HomeComponent } from '../shared/components/home/home.component';
import { WellcomeComponent } from '../shared/components/wellcome/wellcome.component';

import { LayoutComponent } from './layout/layout.component';
import { LayoutService } from './layout/layout.service';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    HomeComponent,
    WellcomeComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [LayoutService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module')
    }
  }
}
