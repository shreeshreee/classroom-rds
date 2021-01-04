import { createAction, props } from '@ngrx/store';


export const loadCourses = createAction(
  '[Courses] Load Courses',
);

export const loadCoursesSuccess = createAction(
  '[Courses] Load Courses success',
  props<{ courses: gapi.client.classroom.Course[] }>()
);

export const loadCoursesFail = createAction(
  '[Courses] Load Courses fail',
  props<{ error: any }>()

);

export const loadCourse = createAction(
  '[Courses] Select Course',
  props<{ courseId: string }>()

);

export const loadCourseSuccess = createAction(
  '[Courses] Select Course success',
  props<{ fullCourse: gapi.client.classroom.Course }>()
);

export const loadCourseFail = createAction(
  '[Courses] Select Course fail',
  props<{ error: any }>()

);
/** ------------------------------------------------- */
export enum CoursesActionType {
  Load = '[Courses Component] Load',
  SearchCourses = '[Courses Component] Search Courses',
  UpdateCourse = '[Course Component] Update Course',
  CreateCourse = '[Course Component] Create Course',
  UpdateTotal = '[Courses Component] Update Total',
  ActionFailure = '[Courses API] Execute action failure',
  ActionSuccess = '[Courses API] Execute action success',
  LoadSuccess = '[Courses API] Load Success',
  Refresh = '[Courses Page] Refresh',
  Selected = '[Courses Page] Select',
  SubmitSuccess = '[Courses API] Submit Success'
}
export const load = createAction(CoursesActionType.Load);
export const searchCourses = createAction(
  CoursesActionType.SearchCourses,
  props<{ listCourses: gapi.client.classroom.CoursesResource }>()
);

export const createCourse = createAction(
  CoursesActionType.CreateCourse,
  props<{ course: gapi.client.classroom.Course, ref: any }>()
);

export const actionFailure = createAction(
  CoursesActionType.ActionFailure,
  props<{ error: string }>()
);

export const actionSuccess = createAction(
  CoursesActionType.ActionSuccess,
  props<{ msg: string }>()
);

export const updateTotal = createAction(
  CoursesActionType.UpdateTotal,
  props<{ total: number }>()
);

export const loadSuccess = createAction(
  CoursesActionType.LoadSuccess,
  props<{ courses: gapi.client.classroom.Course[] }>()
);

export const submitSuccess = createAction(
  CoursesActionType.SubmitSuccess,
  props<{ msg: string }>()
);

export const refresh = createAction(CoursesActionType.Refresh);

export const select = createAction(
  CoursesActionType.Selected,
  props<{ selectedCourseId: string | number }>()
);

export const updateCourse = createAction(
  CoursesActionType.UpdateCourse,
  props<{ course: gapi.client.classroom.Course, ref: any }>()
);
