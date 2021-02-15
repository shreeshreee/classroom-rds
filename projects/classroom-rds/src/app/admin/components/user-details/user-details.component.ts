import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserDomain } from '@rds-admin/models/users.model';
import { AdminApiService } from '@rds-admin/services/admin-api.service';

import { AuthService } from '@rds-auth/services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: UserDomain;
  constructor(
    private route: ActivatedRoute,
    private adminApiService: AdminApiService,
    private authApiService: AuthService,

  ) { }

  ngOnInit(): void {
    this.adminApiService.getUserDomain(this.route.snapshot.params.userId).then(res => {
      return this.user = res;
    });
  }
}
