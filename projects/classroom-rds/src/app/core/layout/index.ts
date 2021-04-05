import { LayoutComponent } from '@rds-core/layout/layout.component';

import { ConfigComponent } from './config/config.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SettingsComponent } from './settings/settings.component';
import { SidenavComponent } from './sidenav/sidenav.component';

export const layoutComponents: any[] = [
  LayoutComponent,
  SettingsComponent,
  ConfigComponent,
  SidenavComponent,
  HeaderComponent,
  FooterComponent
]
export * from './layout.component';
export * from './config/config.component';
export * from './footer/footer.component';
export * from './header/header.component';
export * from './settings/settings.component';
export * from './sidenav/sidenav.component';


