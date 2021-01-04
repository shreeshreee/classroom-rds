import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCoursesReducer from './courses.reducer';


export const selectCoursesState = createFeatureSelector<fromCoursesReducer.CoursesState>(
  fromCoursesReducer.coursesFeatureKey
);

export const selectAllCourses = createSelector(
  selectCoursesState,
  (state: fromCoursesReducer.CoursesState): gapi.client.classroom.Course[] => state.courses
);

export const selectCourseIsLoading = createSelector(
  selectCoursesState,
  (state: fromCoursesReducer.CoursesState): boolean => state.isLoading
);
