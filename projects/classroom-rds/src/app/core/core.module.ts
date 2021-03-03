import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AlertModule } from 'ngx-bootstrap/alert';

import { MaterialModule } from '../modules/material.module';
import { SharedModule } from '../shared/shared.module';

import { LayoutComponent } from './layout/layout.component';
import { LayoutService } from './layout/layout.service';
import { ConfigComponent } from './layout/config/config.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidenavComponent } from './layout/sidenav/sidenav.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidenavComponent,
    FooterComponent,
    ConfigComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MaterialModule,
    SharedModule,
    AlertModule
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
