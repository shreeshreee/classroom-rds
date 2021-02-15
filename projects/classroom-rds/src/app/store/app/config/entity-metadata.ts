import { EntityMetadataMap } from '@ngrx/data';

import { UserDomain } from '@rds-admin/models/users.model';

import * as fromAnnouncement from '@rds-store/announcement';
import * as fromCourse from '@rds-store/course';
import * as fromCourseWork from '@rds-store/course-work';
import * as fromGuardian from '@rds-store/guardian';
import * as fromStudent from '@rds-store/student';
import * as fromTeacher from '@rds-store/teacher';
import * as fromTopic from '@rds-store/topic';
import * as fromUserProfile from '@rds-store/user-profile';

import * as fromUserDomain from '@rds-admin/state';

import * as fromStudentSubmission from '@rds-store/student-submission';


export const entityMetadata: EntityMetadataMap = {
  [fromCourse.entityCollectionName]: {
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
      optimisticSaveEntities: true
    },
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
  },
  [fromCourseWork.entityCollectionName]: {
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
    },
    selectId: (courseWork: gapi.client.classroom.CourseWork) => courseWork.id,
  },
  [fromUserDomain.entityCollectionName]: {
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
      optimisticSaveEntities: true
    },

  },
  [fromUserProfile.entityCollectionName]: {
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
      optimisticSaveEntities: true
    },
    selectId: (profile: gapi.client.classroom.UserProfile) => profile.id,
  },
  [fromGuardian.entityCollectionName]: {
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
      optimisticSaveEntities: true
    },
    selectId: (guardian: gapi.client.classroom.UserProfile) => guardian.id,
  },
  [fromAnnouncement.entityCollectionName]: {
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
      optimisticSaveEntities: true
    },
    selectId: (announcement: gapi.client.classroom.Announcement) => announcement.id,
  },
  [fromStudentSubmission.entityCollectionName]: {
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
      optimisticSaveEntities: true
    },
    selectId: (studentSubmission: gapi.client.classroom.StudentSubmission) => studentSubmission.id,
  },
  [fromTopic.entityCollectionName]: {
    entityDispatcherOptions: {
      optimisticAdd: true,
      optimisticUpdate: true,
      optimisticSaveEntities: true
    },
    selectId: (topics: gapi.client.classroom.Topic) => topics.topicId,
  }
};
export const pluralNames = {
  [fromAnnouncement.entityCollectionName]: fromAnnouncement.pluralizedEntityName,
  [fromCourse.entityCollectionName]: fromCourse.pluralizedEntityName,
  [fromCourseWork.entityCollectionName]: fromCourseWork.pluralizedEntityName,
  [fromGuardian.entityCollectionName]: fromGuardian.pluralizedEntityName,
  [fromStudent.entityCollectionName]: fromStudent.pluralizedEntityName,
  [fromStudentSubmission.entityCollectionName]: fromStudentSubmission.pluralizedEntityName,
  [fromTeacher.entityCollectionName]: fromTeacher.pluralizedEntityName,
  [fromTopic.entityCollectionName]: fromTopic.pluralizedEntityName,
  [fromUserProfile.entityCollectionName]: fromUserProfile.pluralizedEntityName,
  [fromUserDomain.entityCollectionName]: fromUserDomain.pluralizedEntityName,
};

export const entityConfig = {
  entityMetadata,
  pluralNames
};

export function sortByName(a: { name: string }, b: { name: string }): number {
  return a.name.localeCompare(b.name);
}
