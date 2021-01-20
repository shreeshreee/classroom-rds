import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { Observable } from 'rxjs';

import { LayoutService } from './../../services/layout.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  @ViewChild('leftSidenav') sidenavLeft: MatSidenav;
  isHandset$: Observable<boolean>;
  user$: Observable<any>;
  isOnline$: Observable<boolean>;
  isAdmin$: Observable<boolean>;
  constructor(
    public layoutService: LayoutService
  ) {
    this.isHandset$ = layoutService.isHandset$;
    this.layoutService.toggleSidenavLeft.subscribe(() => {
      this.sidenavLeft.toggle();
    });
  }


}
