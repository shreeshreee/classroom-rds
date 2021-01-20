import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../modules/material.module';

import { LAYOUT_COMPONENTS } from './layout/components';
import { LAYOUT_CONTAINERS } from './layout/containers';
import { LayoutService } from './layout/services/layout.service';
import { FooterComponent } from './layout/components/footer/footer.component';
import { AuthUserComponent } from './layout/components/auth-user/auth-user.component';

@NgModule({
  declarations: [
    ...LAYOUT_CONTAINERS,
    ...LAYOUT_COMPONENTS,
    FooterComponent,
    AuthUserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule
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
