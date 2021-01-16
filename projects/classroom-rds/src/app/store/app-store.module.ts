import { NgModule } from '@angular/core';

import { EntityDataModule } from '@ngrx/data';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { DefaultRouterStateSerializer, NavigationActionTiming, RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';

import { environment } from '../../environments/environment';

import { reducers } from './app.state';
import { NgrxToastService } from './ngrx-toast.service';

import * as fromEntity from './config/entity-metadata';
import { registeredEffects } from './config/registered-effects';
import { storeConfig } from './config/store-config';



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
      registeredEffects
    ),
    EntityDataModule.forRoot(fromEntity.entityConfig),

    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
      routerState: RouterState.Minimal,
      /* navigationActionTiming: NavigationActionTiming.PostActivation,
      serializer: DefaultRouterStateSerializer */
    }),
  ],
  providers: [

    NgrxToastService
  ]

})
export class AppStoreModule {
  constructor(
    toastService: NgrxToastService
  ) { }

}
