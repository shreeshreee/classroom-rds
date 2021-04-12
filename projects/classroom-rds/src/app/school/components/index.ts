import { AssigmentsDashboardComponent } from './assigments-dashboard/assigments-dashboard.component';
import { SchoolDashboardComponent } from './school-dashboard/school-dashboard.component';
import { SchoolFormComponent } from './school-form/school-form.component';
import { TeachersFormComponent } from './teachers-form/teachers-form.component';

export const schoolComponents: any[] = [
  SchoolDashboardComponent,
  SchoolFormComponent,
  TeachersFormComponent,
  AssigmentsDashboardComponent,

]
export * from './school-dashboard/school-dashboard.component';
export * from './school-form/school-form.component';
export * from './teachers-form/teachers-form.component';
export * from './assigments-dashboard/assigments-dashboard.component'

