import { UserDto } from './../models/user-dto';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';


import { Observable } from 'rxjs';
import { filter, first, map, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { UserScoresService } from '../services/user-scores.service';
import { AppState } from '~/app/store/app.state';
import { selectUser } from '~/app/auth/state/auth.selectors';
import { User } from '~/app/auth/models/user.model';

@Injectable()
export class UserResolver implements Resolve<UserDto> {
  constructor(
    private store: Store<AppState>,
  ) {

  }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<UserDto> {
    return
  }
}
