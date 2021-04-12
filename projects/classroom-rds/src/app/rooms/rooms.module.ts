import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { appearanceModules } from '../modules';
import { SharedModule } from '../shared/shared.module';
import { UserProfilesService } from '../classroom/user-profiles/services/user-profiles.service';

import { roomsComponents } from './components';
import { roomsContainers } from './containers';
import { RoomsRoutingModule } from './rooms-routing.module';

import { RoomService } from './services/room.service';


@NgModule({
  declarations: [
    ...roomsComponents,
    ...roomsContainers,
  ],
  imports: [
    SharedModule,
    RoomsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ...appearanceModules
  ],
  providers: [
    RoomService,
    UserProfilesService
  ]
})
export class RoomsModule {

}
