import { createAction, props } from '@ngrx/store';

import { CourseParams } from '../models/course-params.model';
import { CourseResponse } from './../models/course-response.model';
import { Course } from '../models/course.model';

export const loadCourses = createAction('[Courses] Loading Courses', props<{ params?: CourseParams }>());
export const loadCoursesSuccess = createAction('[Courses] Load Courses Success', props<{ courses: gapi.client.classroom.Course[] }>());
export const loadCoursesFail = createAction('[Courses] Load Courses Fail', props<{ error: any }>());
export const loadCourse = createAction('[Course] Loading Course', props<{ courseId: string }>());
export const loadCourseSuccess = createAction('[Course] Loading Course Success', props<{ course: gapi.client.classroom.Course }>());
export const loadCourseFail = createAction('[Course] Loading Course Fail', props<{ error: any }>());
export const selectCourse = createAction('[Course] Select Course', props<{ selectedCourseId: string }>());
