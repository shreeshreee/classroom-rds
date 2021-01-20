import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { EntityDataModule } from '@ngrx/data';
import { DefaultRouterStateSerializer, RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';

import { NgrxToastService } from '../services/ngrx-toast.service';
import { environment } from './../../../environments/environment';

import { reducers } from '.';

import * as fromEntity from './config/entity-metadata';
import { registeredEffects } from './config/registered-effects';
import { storeConfig } from './config/storeConfig';

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
      /* registeredEffects */
    ),
    EntityDataModule.forRoot(fromEntity.entityConfig),
    //StoreRouterConnectingModule.forRoot({ serializer: DefaultRouterStateSerializer }),
    StoreRouterConnectingModule.forRoot({
      //stateKey: 'router',
      //routerState: RouterState.Minimal,
      //navigationActionTiming: NavigationActionTiming.PostActivation,
      //serializer: DefaultRouterStateSerializer
    }),
  ],
  providers: [NgrxToastService]
})
export class AppStoreModule {

  constructor(
    toastService: NgrxToastService
  ) { }


}
