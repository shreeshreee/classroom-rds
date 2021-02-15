import { AdminComponent } from '@rds-admin/containers/admin/admin.component';
import { GroupsComponent } from '@rds-admin/containers/groups/groups.component';
import { UsersComponent } from '@rds-admin/containers/users/users.component';

export const adminContainers: any[] = [
  AdminComponent,
  GroupsComponent,
  UsersComponent
];

export * from '@rds-admin/containers/users/users.component';
export * from '@rds-admin/containers/admin/admin.component';
export * from '@rds-admin/containers/groups/groups.component';

