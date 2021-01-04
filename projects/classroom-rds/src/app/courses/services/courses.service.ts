import { Injectable } from '@angular/core';

import { GoogleApiService, GoogleAuthService } from 'ng-gapi';

import { environment } from './../../../environments/environment';
declare const gapi: any;
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  isLoaded: boolean = false;
  constructor(
  ) {
    this.handleClassroomLoad();
  }
  handleClassroomLoad(): void {
    // Retrieve the GoogleUser object for the current user.
    const googleAuth: gapi.auth2.GoogleAuth = gapi.auth2.getAuthInstance();
    const googleUser: gapi.auth2.GoogleUser = googleAuth.currentUser.get();
    const isAuthorized = googleUser.hasGrantedScopes(environment.gapiClientConfig.classroomScopes);
    if (!isAuthorized) {
      const option: gapi.auth2.SigninOptionsBuilder = new gapi.auth2.SigninOptionsBuilder();
      option.setScope(environment.gapiClientConfig.classroomScopes);
      googleUser.grant(option).then(
        (success) => {
          alert(JSON.stringify({ message: "success", value: success }));
        },
        (fail) => {
          alert(JSON.stringify({ message: 'fail', value: fail }));
        });
    }
    gapi.client.load('classroom', 'v1', () => {
      // alert('loaded classroom');
    });
  }
  /**
  * Retrive an array of courses according to permissions access user logged in Google Classroom
  *
  * @param studentId User Identifier from courses's list which is enrolled as student.
  * @param teacherId User Identifier from courses's list which is enrolled as teacher.
  * @param courseStates The course states from te courses to be query.
  * @returns Course Array
  */
  async getCoursesList(studentId?: string, teacherId?: string, courseStates?: string[]) {
    let courses: gapi.client.classroom.Course[];
    const result = await gapi.client.classroom.courses.list({ studentId, teacherId, courseStates })
      .then(
        (success: gapi.client.HttpRequestFulfilled<gapi.client.classroom.ListCoursesResponse>) => {
          courses = success.result.courses;
          return courses;
        },
        (reason: gapi.client.HttpRequestRejected) => {
          alert(`(${reason.status})\nError: ${reason.result['error'].message}`);
          courses = [];
          return courses;
        }
      );
    return result;
  }
  /**
  * Create a courses in Google Classroom
  *
  * @param resource Course object to be created.
  */
  async createCourse(
    course: gapi.client.classroom.Course
  ) {
    const result = await gapi.client.classroom.courses.create({ resource: course })
      .then(
        (success: gapi.client.HttpRequestFulfilled<gapi.client.classroom.Course>) => {
          let course: gapi.client.classroom.Course = success.result;
          return course;
        },
        (reason: gapi.client.HttpRequestRejected) => {
          alert(`(${reason.status})\nError: ${reason.result['error'].message}`);
          let course: gapi.client.classroom.Course = {};
          return course;
        }
      );
    return result;
  }
  /**
  * Make an announcement on a given course in Google Classroom
  *
  * @param courseId Identifier of course to be announce.
  * @param announcement Announcement object to send.
  */
  async createSchoolAnnouncement(announcement: gapi.client.classroom.Announcement, courseId: string) {
    const result = await gapi.client.classroom.courses.announcements.create({ courseId, resource: announcement })
      .then(
        (success: gapi.client.HttpRequestFulfilled<gapi.client.classroom.Announcement>) => {
          let announcement: gapi.client.classroom.Course = success.result;
          return announcement;
        },
        (reason: gapi.client.HttpRequestRejected) => {
          alert(`(${reason.status})\nError: ${reason.result['error'].message}`);
          let announcement: gapi.client.classroom.Course = {};
          return announcement;
        }
      );
    return result;
  }

}
