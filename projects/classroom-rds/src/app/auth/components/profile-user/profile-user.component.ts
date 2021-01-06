import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';

import { User } from '../../models/user.model';
@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileUserComponent implements OnInit {
  @Input() user: User;
  @Output() logout = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  onLogout(): void {
    this.logout.emit(this.user);
  }

}

