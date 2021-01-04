import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GoogleAuthService, GoogleApiService } from 'ng-gapi';

import { MaterialModule } from '../modules/material.module';
import { environment } from '../../environments/environment';

import * as fromAuthReducer from './state/auth.reducer';
import * as fromAuthEffects from './state/effects';
import { UserComponent } from './components/user/user.component';
@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MaterialModule,
    StoreModule.forFeature(fromAuthReducer.authFeatureKey, fromAuthReducer.authReducer),
    EffectsModule.forFeature([fromAuthEffects.AuthEffects, fromAuthEffects.FireEffects]),
  ],
  providers: [GoogleApiService, GoogleAuthService],
  exports: [UserComponent]
})
export class AuthModule { }
