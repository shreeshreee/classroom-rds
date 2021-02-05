import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AlertModule } from 'ngx-bootstrap/alert';

import { MaterialModule } from '../modules/material.module';

import * as fromSharedComponents from './components';
import * as fromSharedServices from './services';

import { CodeConductSchoolComponent } from './components/code-conduct-school/code-conduct-school.component';
import { GalletasComponent } from './components/galletas/galletas.component';
import { LocationComponent } from './components/location/location.component';
import { PreescolarComponent } from './components/preescolar/preescolar.component';
import { PrimariaComponent } from './components/primaria/primaria.component';
import { RemoveConfirmComponent } from './components/remove-confirm/remove-confirm.component';
import { SecundariaComponent } from './components/secundaria/secundaria.component';
import { RemoteLearningComponent } from './components/remote-learning/remote-learning.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MaterialModule,
    AlertModule
  ],
  providers: [...fromSharedServices.sharedServices],
  declarations: [...fromSharedComponents.sharedComponents, RemoveConfirmComponent, GalletasComponent, CodeConductSchoolComponent, PreescolarComponent, PrimariaComponent, SecundariaComponent, LocationComponent, RemoteLearningComponent],
  exports: [...fromSharedComponents.sharedComponents]
})
export class SharedModule { }
