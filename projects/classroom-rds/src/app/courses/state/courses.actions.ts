import { CourseResponse } from './../models/course-response.model';
import { createAction, props } from '@ngrx/store';

import { Course } from '../models/course.model';
import { CourseParams } from '../models/course-params.model';

export const loadCourses = createAction('[Courses] Loading Courses', props<{ params?: CourseParams }>());
export const loadCoursesSuccess = createAction('[Courses] Load Courses Success', props<{ courses: gapi.client.classroom.Course[] }>());
export const loadCoursesFail = createAction('[Courses] Load Courses Fail', props<{ error: any }>());
