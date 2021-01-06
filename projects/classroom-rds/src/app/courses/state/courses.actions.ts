import { createAction, props } from '@ngrx/store';

export const loadCourses = createAction('[User/API] Load Users', props<{ courses: gapi.client.classroom.Course[] }>());
