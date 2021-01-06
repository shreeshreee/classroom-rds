export class Course implements ICourse {
}

export interface ICourse extends gapi.client.classroom.Course {
  owner?: gapi.client.classroom.Teacher;
  students?: gapi.client.classroom.Student[];
  teachers?: gapi.client.classroom.Teacher[];
  courseWork?: gapi.client.classroom.CourseWork[];
  courseMaterialSet?: gapi.client.classroom.CourseMaterial[];
  announcements?: gapi.client.classroom.Announcement[];
  aliases?: gapi.client.classroom.CourseAlias[];
  topics?: gapi.client.classroom.Topic[];
}
