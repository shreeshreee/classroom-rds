import { Injectable } from '@angular/core';

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
  async getCourse(courseId: string): Promise<gapi.client.classroom.Course> {
    const response: gapi.client.Response<gapi.client.classroom.Course> =
      await gapi.client.classroom.courses.get({
        id: courseId,
      });
    return response.result;
  }


  async getUserProfile(userId: string): Promise<gapi.client.classroom.UserProfile> {
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
  /**
   * Create a courses in Google Classroom
   *
   * @param resource Course object to be created.
   */
  async createCourse(course: gapi.client.classroom.Course) {
    const response: gapi.client.Response<gapi.client.classroom.Course> =
      await gapi.client.classroom.courses.create({
        resource: course
      });
    return response.result;
  }
  /**
   * Update a courses in Google Classroom
   *
   * @param resource Course object to be created.
   */
  async updateCourse(courseId: string | number, course: gapi.client.classroom.Course) {
    const response: gapi.client.Response<gapi.client.classroom.Course> =
      await gapi.client.classroom.courses.update({
        id: courseId.toString(),
        resource: course
      });
    return response.result;
  }
  /**
    * Make an announcement on a given course in Google Classroom
    *
    * @param courseId Identifier of course to be announce.
    * @param announcement Announcement object to send.
    */
  async createAnnouncement(announcement: gapi.client.classroom.Announcement, courseId: string) {
    const response: gapi.client.Response<gapi.client.classroom.Announcement> =
      await gapi.client.classroom.courses.announcements.create({
        courseId: courseId,
        resource: announcement
      });
    return response.result;
  }

  /**
  * Adds a student to a given course
  * @param courseId
  * @param email
  */
  async createStudent(student: gapi.client.classroom.Student) {
    const response: gapi.client.Response<gapi.client.classroom.Student> =
      await gapi.client.classroom.courses.students.create({
        resource: student,
        courseId: student.courseId
      });
    return response.result;
  }

  /**
   * Removes a teacher from a given course
   * @param courseId
   * @param email
   */
  async removeTeacher(courseId: string, email: string) {
    let response: gapi.client.Response<gapi.client.classroom.Teacher> =
      await gapi.client.classroom.courses.students.delete({ userId: email, courseId });
    return response.result;
  }
  /**
  * Removes a student from a given course
  * @param courseId
  * @param email
  */
  async removeStudent(courseId: string, email: string) {
    const response: gapi.client.Response<gapi.client.classroom.Student> =
      await gapi.client.classroom.courses.students.delete({ userId: email, courseId });
    return response.result;
  }

  async createInvitation(invitation: gapi.client.classroom.Invitation) {
    const response: gapi.client.Response<gapi.client.classroom.Invitation> =
      await gapi.client.classroom.invitations.create({ resource: invitation })
    return response.result;
  }
}
