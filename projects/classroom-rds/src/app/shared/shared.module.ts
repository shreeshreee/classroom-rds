import { RouterModule } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AlertModule } from 'ngx-bootstrap/alert';

import { appearanceModules } from '../modules';

import { sharedComponents } from './components';
import { sharedServices } from './services';


export const sharedModules: any[] = [
  CommonModule,
  RouterModule,
];
@NgModule({
  imports: [
    ...sharedModules,
    ...appearanceModules,
    AlertModule,
    CarouselModule,
  ],
  exports: [
    ...sharedModules,
    ...sharedComponents
  ],
  declarations: [...sharedComponents],
  providers: [...sharedServices]

})
export class SharedModule {
  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [...sharedServices]
    }
  }
}
