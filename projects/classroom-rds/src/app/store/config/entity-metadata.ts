import { EntityMetadataMap, PropsFilterFnFactory } from "@ngrx/data";

import * as fromCourse from './../course';
import * as fromStudent from './../student';
import { Course } from "../../courses/models/course.model";
import * as fromTeacher from './../teacher'


export const entityMetadata: EntityMetadataMap = {
  [fromCourse.entityCollectionName]: {
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true
    },
    //sortComparer: sortByName,
    // filterFn: advancedFilter,
    //selectId: (course: /* gapi.client.classroom. */Course) => course.id,

  },
  [fromStudent.entityCollectionName]: {
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true
    },
    selectId: (student: gapi.client.classroom.Student) => student.userId,
  },
  [fromTeacher.entityCollectionName]: {
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true
    },
    selectId: (teacher: gapi.client.classroom.Teacher) => teacher.userId,
  }
};
export const pluralNames = {
  [fromCourse.entityCollectionName]: fromCourse.pluralizedEntityName,
  [fromStudent.entityCollectionName]: fromStudent.pluralizedEntityName,
  [fromTeacher.entityCollectionName]: fromTeacher.pluralizedEntityName
};

export const entityConfig = {
  entityMetadata,
  pluralNames
};
function getStudentId(student: gapi.client.classroom.Student): string {
  return student.userId;
}
function getTeacherId(student: gapi.client.classroom.Student): string {
  return student.userId;
}
function getCourseId(course: gapi.client.classroom.Course): string {
  return course.id;
}
// This creates the filter for ... filtering
function nameFilter(entities: { name: string }[], search: string) {
  return entities.filter(e => -1 < e.name.indexOf(search));
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
