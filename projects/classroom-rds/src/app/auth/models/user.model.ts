export interface User {
  creationTime?: string;
  email?: string;
  familyName?: string;
  givenName?: string;
  id?: string;
  isAdmin?: boolean;
  isNew?: boolean;
  isOnline?: boolean;
  isTeacher?: boolean;
  isVerified?: boolean;
  lastLogin?: string;
  name?: string;
  permissions?: any;
  photoUrl?: string;
  uid?: string;
}

export interface UpdatedUser {
  id: string;
  name: string;
  photoUrl: string;
}
