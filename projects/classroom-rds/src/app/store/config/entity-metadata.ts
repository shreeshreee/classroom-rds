import { EntityMetadataMap } from "@ngrx/data";

import * as fromAnnouncement from './../announcement';
import * as fromCourse from './../course';
import * as fromCourseWork from './../course-work';
import * as fromStudent from './../student';
import * as fromTeacher from './../teacher';
import * as fromUserProfile from './../user-profile';



export const entityMetadata: EntityMetadataMap = {
  [fromCourse.entityCollectionName]: {
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
      optimisticSaveEntities: true
    },
    //sortComparer: sortByName,
    // filterFn: advancedFilter,
    selectId: (course: gapi.client.classroom.Course) => course.id,

  },
  [fromStudent.entityCollectionName]: {
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
    },
    selectId: (student: gapi.client.classroom.Student) => student.userId,
  },
  [fromTeacher.entityCollectionName]: {
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
    },
    selectId: (teacher: gapi.client.classroom.Teacher) => teacher.userId,
    //filterFn: courseIdFilter,
  },
  [fromCourseWork.entityCollectionName]: {
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
    },
    selectId: (courseWork: gapi.client.classroom.CourseWork) => courseWork.id,
  },
  [fromUserProfile.entityCollectionName]: {
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
      optimisticSaveEntities: true
    },
    selectId: (profile: gapi.client.classroom.UserProfile) => profile.id,
  },
  [fromAnnouncement.entityCollectionName]: {
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
      optimisticSaveEntities: true
    },
    selectId: (announcement: gapi.client.classroom.Announcement) => announcement.id,
  }
};
export const pluralNames = {
  [fromCourse.entityCollectionName]: fromCourse.pluralizedEntityName,
  [fromStudent.entityCollectionName]: fromStudent.pluralizedEntityName,
  [fromTeacher.entityCollectionName]: fromTeacher.pluralizedEntityName,
  [fromCourseWork.entityCollectionName]: fromCourseWork.pluralizedEntityName,
  [fromAnnouncement.entityCollectionName]: fromAnnouncement.pluralizedEntityName
};

export const entityConfig = {
  entityMetadata,
  pluralNames
};
function getStudentId(student: gapi.client.classroom.Student): string {
  return student.userId;
}
function getTeacherId(student: gapi.client.classroom.Teacher): string {
  return student.userId;
}
function getCourseId(course: gapi.client.classroom.Course): string {
  return course.id;
}
// This creates the filter for ... filtering
function courseIdFilter(entities: { id: string }[], courseId: string) {
  return entities.filter(e => e.id === courseId);
}
export function sortByName(a: { name: string }, b: { name: string }): number {
  return a.name.localeCompare(b.name);
}
/* function advancedFilter(entities: gapi.client.classroom.Course[], pattern: string) {
  return PropsFilterFnFactory<gapi.client.classroom.Course>([
    'name',
    'section',
    'room',
    'courseState'
  ])(entities, pattern);
} */
