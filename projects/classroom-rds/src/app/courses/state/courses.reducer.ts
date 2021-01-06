import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as coursesActions from './courses.actions';
export const coursesFeatureKey = 'courses';

export interface CoursesState extends EntityState<gapi.client.classroom.Course> {
  // additional entities state properties
  allCoursesLoaded: boolean;
  selectedCourseId: string;

}
export const adapter: EntityAdapter<gapi.client.classroom.Course> = createEntityAdapter<gapi.client.classroom.Course>();
export const initialState: CoursesState = adapter.getInitialState({
  // additional entity state properties
  allCoursesLoaded: false,
  selectedCourseId: null
});
export const coursesReducer = createReducer<CoursesState>(
  initialState,
  on(coursesActions.loadCourses, (state, action) => {
    return adapter.setAll(action.courses, state);
  }),
);
export const getSelectedCourseId = (state: CoursesState) => state.selectedCourseId;
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of user ids
export const selectCourseIds = selectIds;

// select the dictionary of user entities
export const selectCourseEntities = selectEntities;

// select the array of users
export const selectAllCourses = selectAll;

// select the total user count
export const selectCourseTotal = selectTotal;

