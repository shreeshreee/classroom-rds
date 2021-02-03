import { Injectable } from '@angular/core';

@Injectable()
export class UserProfilesService {

  constructor() { }
  /**
   * Retrive a User profile.
   * @param userId User ID (string) to query
   */
  async getUserProfile(userId: string): Promise<gapi.client.classroom.UserProfile> {
    const response: gapi.client.Response<gapi.client.classroom.UserProfile> =
      await gapi.client.classroom.userProfiles.get({
        userId: userId
      });
    return response.result;
  }
  /**
   * Retrive an array of Guardians of a given User
   * @param studentId Student ID (string) to query
   */
  async getGuardians(studentId: string): Promise<gapi.client.classroom.Guardian[]> {
    const response: gapi.client.Response<gapi.client.classroom.ListGuardiansResponse> =
      await gapi.client.classroom.userProfiles.guardians.list({
        studentId: studentId
      });
    return response.result.guardians;
  }
  /**
   * Retrive a Guardian object of a given User
   * @param studentId Student ID (string) to query
   */
  async getGuardian(studentId: string, guardianId: string): Promise<gapi.client.classroom.Guardian> {
    const response: gapi.client.Response<gapi.client.classroom.Guardian> =
      await gapi.client.classroom.userProfiles.guardians.get({
        studentId: studentId,
        guardianId: guardianId
      });
    return response.result;
  }
  /**
  * Removes Guardian object of a given User
  * @param studentId Student ID (string) to query
  */
  async removeGuardian(studentId: string, guardianId: string): Promise<gapi.client.classroom.Guardian> {
    const response: gapi.client.Response<gapi.client.classroom.Guardian> =
      await gapi.client.classroom.userProfiles.guardians.delete({
        studentId: studentId,
        guardianId: guardianId
      });
    return response.result;
  }
}
