import { Injectable } from '@angular/core';

import { Course } from './../../models/course.model';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  constructor(
  ) {
    this.handleClassroomLoad();
  }
  private hasAccessScopes(googleAuth: gapi.auth2.GoogleAuth): boolean {
    return (
      googleAuth &&
      googleAuth.currentUser
        .get()
        .hasGrantedScopes(environment.gapiClientConfig.classroomScopes)
    );
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

  /**
  * Retrive an array of courses according to permissions access user logged in Google Classroom
  *
  * @param studentId User Identifier from courses's list which is enrolled as student.
  * @param teacherId User Identifier from courses's list which is enrolled as teacher.
  * @param courseStates The course states from te courses to be query.
  * @returns Course Array
  */
  async getCourses(pageSize?: number, courseStates?: string[]): Promise<gapi.client.classroom.Course[]> {
    const response: gapi.client.Response<gapi.client.classroom.ListCoursesResponse> =
      await gapi.client.classroom.courses.list({
        courseStates: courseStates,
        pageSize: pageSize
      });
    return response.result.courses;
  }
  async getTeachers(courseId: string): Promise<gapi.client.classroom.Teacher[]> {
    const response: gapi.client.Response<gapi.client.classroom.ListTeachersResponse> =
      await gapi.client.classroom.courses.teachers.list({
        courseId: courseId,
      });
    return response.result.teachers;
  }
  async getOwner(userId: string): Promise<gapi.client.classroom.UserProfile> {
    const response: gapi.client.Response<gapi.client.classroom.UserProfile> =
      await gapi.client.classroom.userProfiles.get({
        userId: userId
      });
    return response.result;
  }
  async getStudents(courseId: string): Promise<gapi.client.classroom.Student[]> {
    const response: gapi.client.Response<gapi.client.classroom.ListStudentsResponse> =
      await gapi.client.classroom.courses.students.list({
        courseId: courseId,
      });
    return response.result.students;
  }
  async getCourseWorks(courseId: string): Promise<gapi.client.classroom.CourseWork[]> {
    const response: gapi.client.Response<gapi.client.classroom.ListCourseWorkResponse> =
      await gapi.client.classroom.courses.courseWork.list({
        courseId: courseId,
      });
    return response.result.courseWork;
  }
  async getCourseWorkMaterials(courseId: string): Promise<gapi.client.classroom.CourseWorkMaterial[]> {
    const response: gapi.client.Response<gapi.client.classroom.ListCourseWorkMaterialResponse> =
      await gapi.client.classroom.courses.courseWorkMaterials.list({
        courseId: courseId,
      });
    return response.result.courseWorkMaterial;
  }
  async getAnnouncements(courseId: string): Promise<gapi.client.classroom.Announcement[]> {
    const response: gapi.client.Response<gapi.client.classroom.ListAnnouncementsResponse> =
      await gapi.client.classroom.courses.announcements.list({
        courseId: courseId,
      });
    return response.result.announcements;
  }
  async getAliases(courseId: string): Promise<gapi.client.classroom.CourseAlias[]> {
    const response: gapi.client.Response<gapi.client.classroom.ListCourseAliasesResponse> =
      await gapi.client.classroom.courses.aliases.list({
        courseId: courseId,
      });
    return response.result.aliases;
  }
  async getTopics(courseId: string): Promise<gapi.client.classroom.Topic[]> {
    const response: gapi.client.Response<gapi.client.classroom.ListTopicResponse> =
      await gapi.client.classroom.courses.topics.list({
        courseId: courseId,
      });
    return response.result.topic;
  }













  async getFullCourses(studentId?: string, teacherId?: string, pageSize?: number, courseStates?: string[]) {
    var pageToken = null;
    var optionalArgs = {
      courseStates: courseStates,
      pageToken: pageToken,
      pageSize: pageSize
    };
    while (true) {
      const coursesResponse = this.getListCourses(studentId, teacherId, optionalArgs).then(courses => courses = courses);
      pageToken = (await coursesResponse).nextPageToken;
      return (await coursesResponse).courses.map(course => {
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
      if (!pageToken) {
        break;
      }
      //return coursesResponse
    }

  }
  async getFullCourse(courseId: string, ownerId) {

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
  async getListCourses(studentId?: string, teacherId?: string, optionalArgs?: any) {
    const response: gapi.client.Response<gapi.client.classroom.ListCoursesResponse> =
      await gapi.client.classroom.courses.list({
        studentId: studentId,
        teacherId: teacherId,
        courseStates: optionalArgs.courseStates,
        pageSize: optionalArgs.pageSize,
        pageToken: optionalArgs.pageToken
      });
    return response.result;
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
