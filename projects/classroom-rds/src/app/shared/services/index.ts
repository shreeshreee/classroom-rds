import { NgrxToastService } from './ngrx-toast.service';
import { SeoService } from './seo.service';
import { SnackService } from './snack.service';
import { ToastService } from './toast.service';

export const sharedServices: any[] = [
  SeoService,
  SnackService,
  ToastService,
  NgrxToastService,
];
export * from './seo.service';
export * from './snack.service';
export * from './toast.service';
export * from './ngrx-toast.service';



