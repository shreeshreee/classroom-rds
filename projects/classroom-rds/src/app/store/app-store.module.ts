import { NgModule } from '@angular/core';

import { EntityDataModule } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from '@rds-env/environment';

import { reducers } from './app.state';
import { NgrxToastService } from './ngrx-toast.service';

import { GuardianDataService } from './guardian/guardian-data.service';
import { GuardianEntityService } from './guardian/guardian-entity.service';
import * as fromEntity from './app/config/entity-metadata';
import { registeredEffects } from './app/config/registered-effects';
import { storeConfig } from './app/config/store-config';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(
      reducers,
      storeConfig
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot(
      [...registeredEffects]
    ),
    EntityDataModule.forRoot(fromEntity.entityConfig),
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [
    NgrxToastService,

  ],
  exports: [
    StoreModule,
    StoreRouterConnectingModule,
    StoreDevtoolsModule,
    EffectsModule,
    EntityDataModule
  ]
})
export class AppStoreModule { }
