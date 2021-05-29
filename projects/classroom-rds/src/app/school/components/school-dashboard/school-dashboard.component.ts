import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

import { faIdCard } from '@fortawesome/free-regular-svg-icons';
import { faIdCardAlt, faUserTie, faUserPlus } from '@fortawesome/free-solid-svg-icons';

import { CreateUserComponent } from '@rds-admin/components/create-user/create-user.component';
@Component({
  selector: 'app-school-dashboard',
  templateUrl: './school-dashboard.component.html',
  styleUrls: ['./school-dashboard.component.scss']
})
export class SchoolDashboardComponent implements OnInit {
  faIdCard = faIdCard;
  faIdCardAlt = faIdCardAlt;
  faUserTie = faUserTie;
  faUserPlus = faUserPlus;
  raisedElev: number = 12;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


}
