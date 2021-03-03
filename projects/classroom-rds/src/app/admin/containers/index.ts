import { AdminComponent } from '@rds-admin/containers/admin/admin.component';
import { GroupsComponent } from '@rds-admin/containers/groups/groups.component';
import { UsersComponent } from '@rds-admin/containers/users/users.component';

import { SchoolHomeComponent } from './school-home/school-home.component';

export const adminContainers: any[] = [
  AdminComponent,
  GroupsComponent,
  UsersComponent,
  SchoolHomeComponent
];

export * from '@rds-admin/containers/users/users.component';
export * from '@rds-admin/containers/admin/admin.component';
export * from '@rds-admin/containers/groups/groups.component';
export * from '@rds-admin/containers/school-home/school-home.component';

