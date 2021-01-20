import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UserProfileEffects } from './user-profile.effects';
import { authFeatureKey, reducer } from './user-profile.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(authFeatureKey, reducer),
    EffectsModule.forFeature([UserProfileEffects])
  ]
})
export class UserProfileStoreModule { }
