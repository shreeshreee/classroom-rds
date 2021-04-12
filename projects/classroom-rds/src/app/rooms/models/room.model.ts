import { CourseState } from '@rds-classroom/models/classroom.enum';

import { SchoolLevel } from "~/app/auth/models/user.enum";
import { User } from '~/app/auth/models/user.model';
import { ClassState } from '~/app/school/models/class.model';


export interface Room {
  id?: string;
  priority?: number;
  name?: string;
  status: ClassState;
  description?: string;
  grade?: SchoolLevel
  courses?: RoomCourses[];
  students?: UserStudent[];
}
export interface UserStudent {
  id?: string;
  priority?: number;
  fullName?: string;
  email?: string;
  label?: 'purple' | 'blue' | 'green' | 'yellow' | 'red' | 'gray';
}

export interface UserTeacher {
  id?: string;
  name?: string;
  photoUrl: string;
}
export interface UserName {
  fullName?: string;
  familyName: string;
  givenName: string;
}

export interface RoomCourses {
  id?: string;
  priority?: number;
  name?: string;
  teacher: UserTeacher

}

