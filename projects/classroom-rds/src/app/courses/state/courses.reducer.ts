import { Action, createReducer, on } from '@ngrx/store';

import * as coursesActions from './courses.actions';
export const coursesFeatureKey = 'courses';
export interface CoursesState {
  courses: gapi.client.classroom.Course[];
  isLoading: boolean;
  error: any
};

export const initialState: CoursesState = {
  courses: null,
  isLoading: true,
  error: null,
};

export const coursesReducer = createReducer<CoursesState>(
  initialState,
  on(coursesActions.loadCoursesSuccess, (state, action) => {
    return {
      ...state,
      courses: action.courses,
      isLoading: false
    };
  }),
  on(coursesActions.loadCoursesFail, (state, action) => {
    return {
      ...state,
      error: action.error,
      isLoading: false
    };
  }),
);


/*
export const getSelectedCourseId = (state: State) => state.selectedCourseId;


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors()
*/
