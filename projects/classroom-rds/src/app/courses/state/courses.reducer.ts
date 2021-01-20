import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as coursesActions from './courses.actions';
export const coursesFeatureKey = 'courses';
/** --------------------------------------- */
export const coursesAdapter: EntityAdapter<gapi.client.classroom.Course> = createEntityAdapter<gapi.client.classroom.Course>({
  selectId: model => model.id,
});
export interface CoursesState extends EntityState<gapi.client.classroom.Course> {
  entities: { [id: string]: gapi.client.classroom.Course };
  isLoading?: boolean;
  error?: any;
  total?: number;
  selectedCourseId?: string | number;
}

export const initialState: CoursesState = coursesAdapter.getInitialState({
  entities: {},
  isLoading: false,
  error: null,
  selectedCourseId: null,
  total: 0
});

export const coursesReducer = createReducer<CoursesState>(
  initialState,
  on(coursesActions.loadCoursesSuccess, (state, { courses }) =>
    coursesAdapter.setAll(courses, {
      ...state,
    })
  ),
  on(coursesActions.loadCourseSuccess, (state, { course }) =>
    coursesAdapter.setOne(course, {
      ...state
    })
  ),
  on(coursesActions.loadCourseFail, coursesActions.loadCoursesFail, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),
  on(coursesActions.selectCourse, (state, { selectedCourseId }) => {
    return ({
      ...state,
      selectedCourseId
    });
  })
);

export function reducer(state: CoursesState | undefined, action: Action) {
  return coursesReducer(state, action);
}
/*
export const getSelectedCourseId = (state: State) => state.selectedCourseId;


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors()
*/
