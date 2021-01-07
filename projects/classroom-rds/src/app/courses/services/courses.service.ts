import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Course } from '../models/course.model';
import { environment } from './../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  isLoaded: Observable<boolean>;
  constructor(
  ) {
    this.handleClassroomLoad();
  }
  async handleClassroomLoad(): Promise<void> {
    // Retrieve the GoogleUser object for the current user.
    const googleAuth: gapi.auth2.GoogleAuth = gapi.auth2.getAuthInstance();
    const googleUser: gapi.auth2.GoogleUser = googleAuth.currentUser.get();
    const isAuthorized = googleUser.hasGrantedScopes(environment.gapiClientConfig.classroomScopes);
    if (!isAuthorized) {
      const option: gapi.auth2.SigninOptionsBuilder = new gapi.auth2.SigninOptionsBuilder();
      option.setScope(environment.gapiClientConfig.classroomScopes);
      await googleUser.grant(option).then(
        (success) => {
          //alert(JSON.stringify({ message: "success", value: success }));
        },
        (fail) => {
          alert(JSON.stringify({ message: 'fail', value: fail }));
        });
    }
    gapi.client.load('classroom', 'v1', () => {
      // alert('loaded classroom');
    });
  }
  async getFullCourses() {
    const courses = this.getCoursesList().then(courses => courses = courses);
    let fullCourses: Course[] = (await courses).map(course => {
      let fullCourse: Course = {
        course: course,
      };
      this.getFullCourse(course.id, course.ownerId).then(
        success => {
          fullCourse.owner = success.ownerResponse.result;
          fullCourse.students = success.studentsResponse.result.students;
          fullCourse.teachers = success.teachersResponse.result.teachers;
          fullCourse.courseWorks = success.courseWorkResponse.result.courseWork;
        }
      );
      return fullCourse;
    });
    return fullCourses;

  }
  async getFullCourse(courseId: string, ownerId: string) {

    const ownerResponse: gapi.client.Response<gapi.client.classroom.Teacher> =
      await gapi.client.classroom.courses.teachers.get({ userId: ownerId, courseId: courseId });

    const studentsResponse: gapi.client.Response<gapi.client.classroom.ListStudentsResponse> =
      await gapi.client.classroom.courses.students.list({ courseId });

    const teachersResponse: gapi.client.Response<gapi.client.classroom.ListTeachersResponse> =
      await gapi.client.classroom.courses.teachers.list({ courseId });

    const courseWorkResponse: gapi.client.Response<gapi.client.classroom.ListCourseWorkResponse> =
      await gapi.client.classroom.courses.courseWork.list({ courseId });

    return {
      ownerResponse,
      studentsResponse,
      teachersResponse,
      courseWorkResponse
    };
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
  async getCourseOwner(id: string, ownerId: string) {
    const result: gapi.client.classroom.Teacher = await gapi.client.classroom.courses.teachers.get({ courseId: id, userId: ownerId })
      .then(
        (success: gapi.client.HttpRequestFulfilled<gapi.client.classroom.Teacher>) => {
          return success.result;
        },
        (reason: gapi.client.HttpRequestRejected) => {
          alert(`(${reason.status})\nError: ${reason.result['error'].message}`);
          return null;
        }
      );
    return result;
  }
  async listTeachersCourse(
    cid: string,
    pSize?: number,
    pToken?: string
  ) {
    const params = {
      courseId: cid || null,
      pageSize: pSize || null,
      pageToken: pToken || null
    };


    const teachers = await gapi.client.classroom.courses.teachers.list(params)
      .then(res => {
        return res.result.teachers;
      })
    return teachers;
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
