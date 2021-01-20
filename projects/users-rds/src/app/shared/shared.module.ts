import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../modules/material.module';

import { SHARED_COMPONENTS } from './components/index';

@NgModule({
  declarations: SHARED_COMPONENTS,
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ]
})
export class SharedModule { }
