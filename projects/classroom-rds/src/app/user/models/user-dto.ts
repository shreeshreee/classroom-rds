export interface UserDto {
  /** A list of the user's addresses. The maximum allowed data size is 10Kb. */
  addresses: [{
    /** The address type. Acceptable values: custom, home, other, work. */
    type: 'custom' | 'home' | 'other' | 'work',
    /** The street address, such as 1600 Amphitheatre Parkway. Whitespace within the string is ignored; however, newlines are significant. */
    streetAddress: string,
    /** Indicates if the user-supplied address was formatted. Formatted addresses are not currently supported. */
    sourceIsStructured: boolean,
    /** The abbreviated province or state. */
    región: string,
    /** If this is the user's primary address. The addresses list may contain only one primary address. */
    primary: boolean,
    /** The ZIP or postal code, if applicable. */
    postalCode: string;
    /** The post office box, if present. */
    poBox: string,
    /** The town or city of the address. */
    locality: string,
    /** A full and unstructured postal address. This is not synced with the structured address fields. */
    formatted: string,
    /** For extended addresses, such as an address that includes a sub-region. */
    externalAddress: string,
    /** If the address type is custom, this property contains the custom value. */
    customType: string,
    /** The country code. Uses the ISO 3166-1 standard. */
    countryCode: string
    /** Country. */
    country: string
  }];
  /**Output only. The time the user's account was created. The value is in ISO 8601 date and time format. The time is the complete date plus hours, minutes, and seconds in the form YYYY-MM-DDThh:mm:ssTZD. For example, 2010-04-05T17:30:04+01:00. */
  creationTime?: string;
  emails: [
    {
      /** The user's email address. Also serves as the email ID. This value can be the user's primary email address or an alias. */
      address: string,
      /** If the value of type is custom, this property contains the custom type string. */
      customType: string,
      /** Indicates if this is the user's primary email. Only one entry can be marked as primary. */
      primary: boolean,
      /** The type of the email account. Acceptable values: custom, home, other, work. */
      type: 'custom' | 'home' | 'other' | 'work'
    }
  ];
  /** The user's gender. The maximum allowed data size for this field is 1Kb. */
  gender: 'Hombre' | 'Mujer'
  /** The unique ID for the user. A user id can be used as a user request URI's userKey. */
  id: string;
  /** Output only. Indicates a user with super admininistrator privileges. The isAdmin property can only be edited in the Make a user an administrator operation ( makeAdmin method). If edited in the user insert or update methods, the edit is ignored by the API service. */
  isAdmin: boolean;
  isNew: boolean;
  isOnline: boolean;
  isTeacher: boolean;
  isVerified: boolean;
  /** Output only. The last time the user logged into the user's account. The value is in ISO 8601 date and time format. The time is the complete date plus hours, minutes, and seconds in the form YYYY-MM-DDThh:mm:ssTZD. For example, 2010-04-05T17:30:04+01:00. */
  lastLoginTime: string;
  /** Holds the given and family names of the user, and the read-only fullName value. The maximum number of characters in the givenName and in the familyName values is 60. In addition, name values support unicode/UTF-8 characters, and can contain spaces, letters (a-z), numbers (0-9), dashes (-), forward slashes (/), and periods (.). For more information about character usage rules, see the administration help center. Maximum allowed data size for this field is 1Kb. */
  name: {
    /** The user's full name formed by concatenating the first and last name values. */
    fullName: string,
    /** The user's last name. Required when creating a user account. */
    familyName: string,
    /** The user's first name. Required when creating a user account. */
    givenName: string
  };
  notes: [{
    /** Content type of note, either plain text or HTML. Default is plain text. Acceptable values: text_plain, text_html. */
    contentType: 'text_plain' | 'text_html',
    /** Contents of notes. */
    value: string
  }];
  /** A list of the user's phone numbers. The maximum allowed data size is 1Kb. */
  phones: [{
    /** If the value of type is custom, this property contains the custom type. */
    customType: string,
    /** Indicates if this is the user's primary phone number. A user may only have one primary phone number. */
    primary: boolean,
    /** The type of phone number. */
    type: 'assistant' | 'callback' | 'car' | 'company_main' | 'custom' | 'grand_central' | 'home' | 'home_fax' | 'isdn' | 'main' | 'mobile' | 'other' | 'other_fax' | 'pager' | 'radio' | 'telex' | 'tty_tdd' | 'work' | 'work_fax' | 'work_mobile' | 'work_pager',
    /** A human-readable phone number. It may be in any telephone number format. */
    value: string,
  }];
  /** The user's primary email address. This property is required in a request to create a user account. The primaryEmail must be unique and cannot be an alias of another user. */
  primaryEmail: string;
  photoUrl: string;
  /** Indicates if user is suspended. */
  suspended: boolean;
  /** Output only. Has the reason a user account is suspended either by the administrator or by Google at the time of suspension. The property is returned only if the suspended property is true. */
  suspensionReason: string;
  /** Output only. Photo Url of the user (Read-only) */
  thumbnailPhotoUrl: string;
  /** Firebase database user's ID */
  uid: string;
}


export enum PhonesType {
  home, car, work, mobile, assistant
}
