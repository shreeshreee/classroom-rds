export class Course {
  courseId?: string
  course: gapi.client.classroom.Course;
  owner?: gapi.client.classroom.Teacher;
  students?: gapi.client.classroom.Student[];
  teachers?: gapi.client.classroom.Teacher[];
  courseWorks?: gapi.client.classroom.CourseWork[];
  courseMaterialSet?: gapi.client.classroom.CourseMaterial[];
  announcements?: gapi.client.classroom.Announcement[];
  aliases?: gapi.client.classroom.CourseAlias[];
  topics?: gapi.client.classroom.Topic[];
  constructor(owner?, students?, teachers?, courseWorks?, courseMaterialSet?, announcements?, aliases?, topics?) {
    this.owner = owner;
    this.students = students;
    this.teachers = teachers;
    this.courseWorks = courseWorks;
    this.courseMaterialSet = courseMaterialSet;
    this.announcements = announcements;
    this.aliases = aliases;
    this.topics = topics
  }
}



export class ListCoursesResponse {
  courses: Course[];
  nxtPgTk: string;
}
