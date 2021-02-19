import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { faAward, faUserEdit, faSignOutAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import { User } from '@rds-auth/models/user.model';




@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMenuComponent implements OnInit {
  @Input() user: User;
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
