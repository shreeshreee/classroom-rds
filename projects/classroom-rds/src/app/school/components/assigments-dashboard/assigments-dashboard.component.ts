import { Component, OnInit } from '@angular/core';

import { faBook, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-assigments-dashboard',
  templateUrl: './assigments-dashboard.component.html',
  styleUrls: ['./assigments-dashboard.component.scss']
})
export class AssigmentsDashboardComponent implements OnInit {
  raisedElev: number = 12;
  assigmentLinks: any[];
  ngOnInit(): void {
    this.assigmentLinks = [
      {
        title: 'Grupos y materias',
        description: 'Administra los miembros en cada grupo y sus materias',
        route: 'rooms',
        icon: faUsers
      }
    ]
  }

}
