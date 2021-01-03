import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import {
  GoogleApiModule,
  GoogleApiService,
  GoogleAuthService,
  NgGapiClientConfig,
  NG_GAPI_CONFIG,
  GoogleApiConfig
} from "ng-gapi";

import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { reducers, metaReducers } from './store/app.state';
import * as fromAuthServices from './auth/services';

import * as fromAuthEffects from './auth/state/effects';
import * as fromSharedEffects from './shared/state/effects';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    CoreModule,
    AuthModule,
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: environment.gapiClientConfig as NgGapiClientConfig,
    }),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      },
    }),
    StoreRouterConnectingModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([
      fromAuthEffects.AuthEffects,
      fromAuthEffects.FireEffects,
      fromSharedEffects.DialogEffects,
      fromSharedEffects.RouteEffects,
      fromSharedEffects.StoreEffects
    ]),
  ],
  providers: [
    fromAuthServices.AuthService,
    fromAuthServices.AuthFireService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
