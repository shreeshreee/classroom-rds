import { AssignmentsComponent } from './assignments/assignments.component';
import { SchoolStudentsComponent } from './school-students/school-students.component';
import { SchoolTeachersComponent } from './school-teachers/school-teachers.component';
import { SchoolComponent } from './school/school.component';
import { SubjectsComponent } from './subjects/subjects.component';

export const schoolContainers: any[] = [
  SchoolComponent,
  SchoolStudentsComponent,
  SchoolTeachersComponent,
  SubjectsComponent,
  AssignmentsComponent

]
export * from './school-students/school-students.component';
export * from './school-teachers/school-teachers.component';
export * from './school/school.component';
export * from './subjects/subjects.component';
export * from './assignments/assignments.component';

