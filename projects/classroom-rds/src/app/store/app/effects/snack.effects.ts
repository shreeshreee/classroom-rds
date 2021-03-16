import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import * as fromAppActions from '@rds-store/app/actions/app.actions';

import * as fromAuthActions from '@rds-auth/state/auth.actions';

import { SnackService } from '@rds-shared/services/snack.service';

import { tap } from 'rxjs/operators';

@Injectable()
export class SnackEffects {
  /*  checkingYourInformation$ = createEffect(
     () =>
       this.actions$.pipe(
         ofType(fromAuthActions.signIn),
         tap(() => this.snackService.justMessage('Checking your information'))
       ),
     { dispatch: false }
   );
  */
  updatedUser$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.updateProfileSuccess),
        tap(() => this.snackService.justMessage('Usuario actualizado'))
      ),
    { dispatch: false }
  );

  welcomeBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.signInSuccess),
        tap((action) =>
          this.snackService.messageWithComponent(action.user, {
            vPos: 'bottom', hPos: 'center', setAutoHide: true,
            hide: 5000, action: true, actionString: 'Ok', extra: false, message: 'Has ingresado como: ' + action.user.displayName
          })
        )
      ),
    { dispatch: false }
  );

  /*  welcome$ = createEffect(
     () =>
       this.actions$.pipe(
         ofType(fromAppActions.loadAppSuccess),
         tap(() =>
           setTimeout(() => {
             this.snackService.justMessage('La aplicación está lista')
           }, 2000)
         )
       ),
     { dispatch: false }
   ); */

  unableToLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.authError),
        tap((error) => {
          this.snackService.justMessage('Ocurrió un error al iniciar sesión');
        })
      ),
    { dispatch: false }
  );

  youAreLoggedOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.signOut),
        tap(() => this.snackService.justMessage('Finazlizando sesión'))
      ),
    { dispatch: false }
  );

  comeBackSoon$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.signOutCompleted),
        tap(() =>
          setTimeout(() => {
            this.snackService.justMessage('Tu sesión ha terminado. Vuelve pronto!');
          }, 2000)
        )
      ),
    { dispatch: false }
  );

  userCreated$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.saveUser),
        tap((action) => this.snackService.justMessage({ message: 'Usuario registrado' }))
      ),
    { dispatch: false }
  );



  constructor(
    private actions$: Actions,
    private snackService: SnackService
  ) { }
}
