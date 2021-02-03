import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { MaterialModule } from '../modules/material.module';

import * as fromSharedComponents from './components';
import * as fromSharedServices from './services';
import { RemoveConfirmComponent } from './components/remove-confirm/remove-confirm.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MaterialModule
  ],
  providers: [...fromSharedServices.sharedServices],
  declarations: [...fromSharedComponents.sharedComponents, RemoveConfirmComponent],
  exports: [...fromSharedComponents.sharedComponents]
})
export class SharedModule { }
