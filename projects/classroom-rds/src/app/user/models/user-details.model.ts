import { CourseLevel } from "@rds-classroom/models/classroom.enum";

export interface UserDetails {
  id: string;
  firstName: string;
  lastName: string;
  email?: string;
  dayOfBirth: Date;
  level: CourseLevel[];
  grade: number[];
  address?: {
    addressLine1?: string;
    addressLine2?: string;
    postalCode?: string;
    city?: string;
    country?: string;
  },
  phoneNumber?: {
    phoneHome?: string;
    mobilePhone?: string;
  }
}
