import { createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCoursesReducer from './courses.reducer';

export const selectCoursesState = createFeatureSelector<fromCoursesReducer.CoursesState>(
  fromCoursesReducer.coursesFeatureKey
);
export const selectAllCoursesItems: (
  state: object
) => gapi.client.classroom.Course[] = fromCoursesReducer.coursesAdapter.getSelectors(selectCoursesState).selectAll;

export const selectTotalCourseItems = createSelector(
  selectCoursesState,
  (state: fromCoursesReducer.CoursesState): number => {
    return state.total;
  }
);
export const getAllCourses = createSelector(
  selectCoursesState,
  (entities) => {
    return Object.keys(entities).map(id => entities[id]);
  }
);
export const getCoursesEntities = createSelector(
  selectCoursesState,
  (state: fromCoursesReducer.State): { [id: string]: gapi.client.classroom.Course } => state.entities
);
/*  */
export const selectSelectedCourseId = createSelector(
  selectCoursesState,
  (state: fromCoursesReducer.State): string | number => state.selectedCourseId
);
export const selectCurrentCourse = createSelector(
  selectAllCoursesItems,
  selectSelectedCourseId,
  (allCourses: gapi.client.classroom.Course[], selectedCoursesId: string | number) => {
    if (allCourses && selectedCoursesId) {
      return allCourses.find(p => p.id === selectedCoursesId);
    } else {
      return null;
    }
  }
);

export const selectCourseError = createSelector(
  selectCoursesState,
  (state: fromCoursesReducer.State): any => state.error
);

export const selectCourseIsLoading = createSelector(
  selectCoursesState,
  (state: fromCoursesReducer.State): boolean => state.isLoading
);
/* export const selectAllCourses = createSelector(
  selectCoursesState,
  (state: fromCoursesReducer.State): gapi.client.classroom.Course[] => state.entities
);
export const selectCourse = createSelector(
  selectCoursesState,
  (state: fromCoursesReducer.State): CourseWithOwner => state.fullCourse,

);

export const selectAllCoursesFromLocal = createSelector(
=======
export const selectAllCourses = createSelector(
>>>>>>> parent of f4774a2... courses store ngrx success
  selectCoursesState,
  fromCoursesReducer.selectAll
);

export const selectAllEntities = createSelector(
  selectCoursesState,
  fromCoursesReducer.selectEntities
);

/* export const selectPagination = createSelector(
  selectCoursesState,
  (state: fromCoursesReducer.State) => state.pagination
); */

/********************************************************************************* */
/****RETURN PRODUCTS VIEW MODEL */
/********************************************************************************* */

export interface CoursesViewModel {
  courses: gapi.client.classroom.Course[];
}

/* export const selectPagination = createSelector(
  selectCoursesState,
  (state: fromCoursesReducer.State) => state.pagination
); */

/********************************************************************************* */
/****RETURN PRODUCTS VIEW MODEL */
/********************************************************************************* */

export interface CoursesViewModel {
  courses: gapi.client.classroom.Course[];
}

export const selectCoursesViewModel = createSelector(
  selectAllCoursesItems,
  (
    courses: gapi.client.classroom.Course[]
  ): CoursesViewModel => {
    return {
      courses: courses,
    };
  }
);

export const entityExists = createSelector(
  selectAllCoursesItems,
  (entities, props): boolean => {
    return entities[props.id] === undefined ? false : true;
  }
);

export const selectEntityById = createSelector(
  selectAllCoursesItems,
  (entities, props) => entities[props.id]
);
