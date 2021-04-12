import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { SharedModule } from '@rds-shared/shared.module';

import { AlertModule } from 'ngx-bootstrap/alert';

import { layoutComponents } from './layout';
import { coreServices } from './services';

import { appearanceModules } from '~/app/modules';
@NgModule({
  declarations: [
    ...layoutComponents
  ],
  imports: [
    AlertModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ...appearanceModules,
  ],
  providers: [...coreServices],
  exports: [...layoutComponents]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module')
    }
  }
}
