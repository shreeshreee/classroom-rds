import { EventEmitter, HostListener, Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable()
export class LayoutService {

  public toggleSidenavLeft: EventEmitter<any> = new EventEmitter();
  public toggleSidenavRight: EventEmitter<any> = new EventEmitter();
  // this variable track the value between sessions.
  private _sideState: any = 'open';
  public sideNavState$: Subject<boolean> = new Subject();
  /** This is the mini variant solution with animations trick. */
  sideNavListener: any = new Subject();
  prevScrollpos;
  constructor() {
    this.prevScrollpos = window.pageYOffset;
    this.sideNavListener.subscribe(state => {
      this.setSidenavState(state);
    });
  }
  get sideNavState() {
    return this._sideState;
  }

  setSidenavState(state) {
    this._sideState = state;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    const currentScrollPos = window.pageYOffset;
    if (this.prevScrollpos > 200) {
      document.getElementById('header').classList.add('sticky');
    } else {
      document.getElementById('header').classList.remove('sticky');
    }
    this.prevScrollpos = currentScrollPos;
  }
}
