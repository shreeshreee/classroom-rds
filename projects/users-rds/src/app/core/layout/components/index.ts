import { AuthUserComponent } from './auth-user/auth-user.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
export const LAYOUT_COMPONENTS: any[] = [
  HeaderComponent,
  SidenavComponent,
  FooterComponent,
  AuthUserComponent
];
export * from './header/header.component';
export * from './sidenav/sidenav.component';
export * from './footer/footer.component';
export * from './auth-user/auth-user.component';
