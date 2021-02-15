import { CourseLevel } from '@rds-classroom/models/classroom.enum';
export interface UserDomain {
  addresses: any;
  agreedToTerms: boolean;
  aliases: string[];
  archived: boolean;
  changePasswordAtNextLogin: boolean;
  creationTime: string;
  customSchemas: any;
  customerId: string;
  deletionTime: string;
  emails: any;
  etag: string;
  externalIds: any;
  gender: any;
  hashFunction: string;
  id: string;
  ims: any;
  includeInGlobalAddressList: boolean;
  ipWhitelisted: boolean;
  isAdmin: boolean;
  isDelegatedAdmin: boolean;
  isEnforcedIn2Sv: boolean;
  isEnrolledIn2Sv: boolean;
  isMailboxSetup: boolean;
  isTeacher?: boolean;
  isVerified?: boolean;
  keywords: any;
  kind: string;
  languages: any;
  lastLoginTime: string;
  locations: any;
  name: UserName;
  nonEditableAliases: string[];
  notes: any;
  orgUnitPath: string;
  organizations: any;
  permissions?: any;
  photoUrl?: string;
  password: any;
  phones: any;
  posixAccounts: any;
  primaryEmail: string;
  recoveryEmail: string;
  recoveryPhone: string;
  relations: any;
  sshPublicKeys: any;
  suspended: boolean;
  suspensionReason: string;
  thumbnailPhotoEtag: string;
  thumbnailPhotoUrl: string;
  uid?: string;
  websites: any;
}

export interface UserResponse {
  users: UserDomain[];
  etag: string;
  kind: string;
  trigger_event: string;
  nextPageToken: string;
}
export interface UserName {
  fullName: string;
  familyName: string;
  givenName: string;
}

export interface Permission {
  permission: string;
}
export interface Group {
  id?: string;
  priority?: number;
  name?: string;
  grade?: number;
  level?: CourseLevel;
  teachers?: UserDomain[];
  students?: UserDomain[];
}

export interface UserStudent {
  id?: string;
  priority?: number,
  name: UserName;
}

export interface UserTeacher {
  id?: string;
  priority?: number,
  name: UserName;
}
