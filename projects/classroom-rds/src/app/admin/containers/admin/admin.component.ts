import { Component, OnInit } from '@angular/core';

import { AdminApiService } from '@rds-admin/services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(
    private adminApiService: AdminApiService
  ) { }

  ngOnInit(): void {
    //this.adminApiService.handleAdminLoad();
  }

}
