import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { faAward, faUserEdit, faSignOutAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import { User } from '@rds-auth/models/user.model';

import { UserDomain } from '@rds-admin/models/users-domain.model';


@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMenuComponent implements OnInit {
  @Input() user: User;
  @Input() isOnline: boolean;
  @Input() isAdmin: boolean;
  @Input() isTeacher: boolean;
  userDomain: UserDomain;
  @Output() logout = new EventEmitter<User>();
  faAward = faAward;
  faUserEdit = faUserEdit;
  faSignOutAlt = faSignOutAlt;
  faCheck = faCheck;
  faTimes = faTimes;
  canLogout: boolean;
  constructor() { }

  ngOnInit(): void {


  }
  onLogout(): void {
    this.logout.emit(this.user);
    this.canLogout = false;
  }
  cancel(): void {
    this.canLogout = false;
  }
  prepareForLogout(): void {
    this.canLogout = true;
  }


}
