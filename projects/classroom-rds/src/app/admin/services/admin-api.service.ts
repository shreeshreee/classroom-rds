import { Injectable } from '@angular/core';

import { UserDomain, UserResponse } from '@rds-admin/models/users.model';

import { environment } from '@rds-env/environment';

import { GroupResponse } from './../models/users.model';

declare var gapi: any;
@Injectable()
export class AdminApiService {
  handleAdminLoad() {
    // Retrieve the GoogleUser object for the current user.
    const googleAuth: gapi.auth2.GoogleAuth = gapi.auth2.getAuthInstance();
    const googleUser: gapi.auth2.GoogleUser = googleAuth.currentUser.get();
    const isAuthorized = googleUser.hasGrantedScopes(environment.gapiClientConfig.adminScopes);
    if (!isAuthorized) {
      const option: gapi.auth2.SigninOptionsBuilder = new gapi.auth2.SigninOptionsBuilder();
      option.setScope(environment.gapiClientConfig.classroomScopes);
      googleUser.grant(option).then(
        (success) => {
          //alert(JSON.stringify({ message: "success", value: success }));
        },
        (fail) => {
          alert(JSON.stringify({ message: 'fail', value: fail }));
        });
      gapi.client.load('admin', 'directory_v1', () => {
        //alert('loaded admin directory');
      });
    }
  }

  async listAllUsers() {
    const response: gapi.client.Response<UserResponse> = await gapi.client.directory.users.list({
      domain: 'rafaeldiazserdan.net',
      orderBy: 'FAMILY_NAME',
      maxResults: 500,
    });
    return response.result.users;
  }

  async getUserDomain(userId: string, domain?: string) {
    const user = await gapi.client.directory.users.get({
      domain: domain || 'rafaeldiazserdan.net',
      userKey: userId
    }).then(resp => {
      return resp.result;
    });
    return user;
  }

  async getGroups() {
    const response: gapi.client.Response<GroupResponse> = await gapi.client.directory.groups.list({
      domain: 'rafaeldiazserdan.net',
    });
    return response.result.groups;
  }

  async createSchoolAnnouncement(announcement: gapi.client.classroom.Announcement, courseId: string) {
    const params = { ...announcement, courseId };
    console.log(params)
    const response = await gapi.client.classroom.courses.announcements.create(params)
      .then(res => {
        return res.result;
      }).catch(err => {

      });
    console.log(response);
    return response;
  }

  constructor() { }
}
