import { Component, Input, OnInit } from '@angular/core';

import { User } from '../../../auth/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Input() isAdmin: boolean;
  @Input() isOnline: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
