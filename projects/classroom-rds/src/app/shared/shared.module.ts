import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MaterialModule } from './../modules/material.module';

import * as fromSharedComponents from './components';
import * as fromSharedServices from './services';
import { LicenseComponent } from './components/license/license.component';
import { CodeConductComponent } from './components/code-conduct/code-conduct.component';
import { TermsComponent } from './components/terms/terms.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MaterialModule
  ],
  providers: [...fromSharedServices.sharedServices],
  declarations: [...fromSharedComponents.sharedComponents, LicenseComponent, CodeConductComponent, TermsComponent],
  exports: [...fromSharedComponents.sharedComponents]
})
export class SharedModule { }
