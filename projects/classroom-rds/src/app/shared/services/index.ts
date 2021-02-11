import { ThemeService } from './theme.service';
import { SeoService } from './seo.service';
import { SnackService } from './snack.service';
import { ToastService } from './toast.service';

export const sharedServices: any[] = [
  SeoService,
  SnackService,
  ToastService,
  ThemeService
];
export * from './seo.service';
export * from './snack.service';
export * from './toast.service';
export * from './theme.service';



