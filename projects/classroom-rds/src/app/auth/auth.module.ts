import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../modules/material.module';

import { AuthService } from './services';

import { AuthGuard } from './guards/auth.guard';
import * as fromAuthReducer from './state/auth.reducer';
import * as fromAuthEffects from './state/effects';
import { LoginDialogComponent } from './components/login-dialog/login-dialog.component';
import { MainProfileComponent } from './components/main-profile/main-profile.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { ProfileComponent } from './containers/profile/profile.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MaterialModule,
    StoreModule.forFeature(fromAuthReducer.authFeatureKey, fromAuthReducer.authReducer),
    EffectsModule.forFeature([fromAuthEffects.AuthEffects, fromAuthEffects.FireEffects]),
  ],
  declarations: [MainProfileComponent, ProfileUserComponent, ProfileComponent, LoginDialogComponent],
  exports: [LoginDialogComponent]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        AuthGuard
      ]
    }
  }
}
