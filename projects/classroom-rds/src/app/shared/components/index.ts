import { AboutComponent } from './about/about.component';
import { CodeConductComponent } from './code-conduct/code-conduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { HomeComponent } from './home/home.component';
import { LicenseComponent } from './license/license.component';
import { LogoComponent } from './logo/logo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RemoveConfirmComponent } from './remove-confirm/remove-confirm.component';
import { SnackComponent } from './snack/snack.component';
import { TermsComponent } from './terms/terms.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { UserComponent } from './user/user.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
// start:ng42.barrel

export const sharedComponents: any[] = [
  AboutComponent,
  CodeConductComponent,
  DashboardComponent,
  DeleteButtonComponent,
  HomeComponent,
  LicenseComponent,
  LogoComponent,
  NotFoundComponent,
  PrivacyPolicyComponent,
  RemoveConfirmComponent,
  SnackComponent,
  TermsComponent,
  UnderConstructionComponent,
  UserComponent,
  WellcomeComponent,
];

export * from './about/about.component';
export * from './dashboard/dashboard.component';
export * from './delete-button/delete-button.component';
export * from './home/home.component';
export * from './logo/logo.component';
export * from './not-found/not-found.component';
export * from './privacy-policy/privacy-policy.component';
export * from './remove-confirm/remove-confirm.component';
export * from './snack/snack.component';
export * from './under-construction/under-construction.component';
export * from './user/user.component';
export * from './wellcome/wellcome.component';
// end:ng42.barrel

