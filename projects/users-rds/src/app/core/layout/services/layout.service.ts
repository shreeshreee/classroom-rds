import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { EventEmitter, Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Injectable()
export class LayoutService {
  public toggleSidenavLeft: EventEmitter<any> = new EventEmitter();
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }
}
