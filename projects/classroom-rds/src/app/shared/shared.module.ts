import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../modules/material.module';

import { LogoComponent } from './components/logo/logo.component';
import { UserComponent } from './components/user/user.component';



@NgModule({
  declarations: [UserComponent, LogoComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule
  ],
  exports: [UserComponent, LogoComponent]
})
export class SharedModule { }
