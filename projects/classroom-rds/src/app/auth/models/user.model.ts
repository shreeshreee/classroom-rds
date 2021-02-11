export interface User {
  isNew?: boolean;
  isAdmin?: boolean;
  isOnline?: boolean;
  isVerified?: boolean;
  isTeacher?: boolean;
  name?: string;
  givenName?: string;
  familyName?: string;
  email?: string;
  photoUrl?: string;
  creationTime?: string;
  lastLogin?: string;
  id?: string;
  uid?: string;
}

export interface UpdatedUser {
  id: string;
  name: string;
  photoUrl: string;
}
