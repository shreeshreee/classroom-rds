import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GoogleAuthService, GoogleApiService } from 'ng-gapi';

import { MaterialModule } from '../modules/material.module';
import { environment } from '../../environments/environment';


import * as fromAuthReducer from './state/auth.reducer';
import { SignInComponent } from './components/sign-in/sign-in.component';
@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MaterialModule,
    StoreModule.forFeature(fromAuthReducer.authFeatureKey, fromAuthReducer.authReducer),
    EffectsModule.forFeature(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule
  ],
  providers: [GoogleApiService, GoogleAuthService],
  exports: [SignInComponent]
})
export class AuthModule { }
