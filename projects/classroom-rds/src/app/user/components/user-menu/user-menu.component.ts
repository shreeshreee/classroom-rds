import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { faAward, faUserEdit, faSignOutAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';


import { UserDomain } from '@rds-admin/models/users-domain.model';
import { UserDto } from '../../models/user-dto';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMenuComponent implements OnInit {
  @Input() user: UserDto;
  @Input() isOnline: boolean;
  @Input() isAdmin: boolean;
  @Input() isTeacher: boolean;
  userDomain: UserDomain;
  @Output() logout = new EventEmitter<any>();
  faAward = faAward;
  faUserEdit = faUserEdit;
  faSignOutAlt = faSignOutAlt;
  faCheck = faCheck;
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {


  }
  onLogout(): void {
    this.logout.emit(this.user);
  }
}
