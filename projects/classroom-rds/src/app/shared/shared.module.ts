import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AlertModule } from 'ngx-bootstrap/alert';

import { MaterialModule } from '../modules/material.module';

import * as fromSharedComponents from './components';
import * as fromSharedServices from './services';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MaterialModule,
    AlertModule,
    CarouselModule,
  ],
  providers: [...fromSharedServices.sharedServices],
  declarations: [...fromSharedComponents.sharedComponents],
  exports: [...fromSharedComponents.sharedComponents]
})
export class SharedModule { }
