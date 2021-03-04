import { Component, OnInit } from '@angular/core';

import { faIdCard } from '@fortawesome/free-regular-svg-icons';
import { faIdCardAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-school-dashboard',
  templateUrl: './school-dashboard.component.html',
  styleUrls: ['./school-dashboard.component.scss']
})
export class SchoolDashboardComponent implements OnInit {
  faIdCard = faIdCard;
  faIdCardAlt = faIdCardAlt;
  raisedElev: number = 12;
  constructor() { }

  ngOnInit(): void {
  }

}