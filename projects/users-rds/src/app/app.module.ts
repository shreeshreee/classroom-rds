import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { DefaultRouterStateSerializer, StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { MaterialModule } from './modules/material.module';
import { SharedModule } from './shared/shared.module';
import { AppErrorHandler } from './shared/services/error-handler';
import { AppStoreModule } from './shared/store/app-store.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule,
    AppStoreModule,
  ],
  providers: [/* { provide: ErrorHandler, useClass: AppErrorHandler } */],
  bootstrap: [AppComponent]
})
export class AppModule { }
