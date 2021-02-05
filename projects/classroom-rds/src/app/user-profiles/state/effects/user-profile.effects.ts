import { Injectable } from "@angular/core";

import { Actions, createEffect, ofType } from "@ngrx/effects";

import * as fromAuthActions from '@rds-auth/state/auth.actions';

import { from, of } from "rxjs";
import { catchError, map, switchMap, tap } from "rxjs/operators";

import { UserProfilesService } from '../../services/user-profiles.service';

@Injectable()
export class UserProfileEffects {

  checkTeacherRole$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.checkTeacherRole),
        switchMap((action) =>
          this.userProfilesService.checkTeacherRole(action.id)
            .pipe(
              map((isTeacher: boolean) => fromAuthActions.updateTeachersRole({ isTeacher }))
            )
        )
      )
  );

  constructor(
    private actions$: Actions,
    private userProfilesService: UserProfilesService
  ) { }
}
