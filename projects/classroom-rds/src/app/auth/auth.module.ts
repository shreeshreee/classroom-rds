import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthFireService, AuthService } from '@rds-auth/services';
import { AuthGuard } from '@rds-auth/guards/auth.guard';
import * as fromAuthReducer from '@rds-auth/state/auth.reducer';
import * as fromAuthEffects from '@rds-auth/state/effects';
import { LoginDialogComponent } from '@rds-auth/components/login-dialog/login-dialog.component';

import { MaterialModule } from '../modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FontAwesomeModule,
    MaterialModule,
    StoreModule.forFeature(fromAuthReducer.authFeatureKey, fromAuthReducer.authReducer),
    EffectsModule.forFeature([fromAuthEffects.AuthEffects, fromAuthEffects.FireEffects]),
  ],
  declarations: [LoginDialogComponent],
  exports: [LoginDialogComponent]
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [
        AuthService,
        AuthFireService,
        AuthGuard
      ]
    }
  }
}
