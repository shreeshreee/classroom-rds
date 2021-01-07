import { SeoService } from './seo.service';
import { SnackService } from './snack.service';

export const sharedServices: any[] = [
  SeoService,
  SnackService,
];
export * from './seo.service';
export * from './snack.service';


