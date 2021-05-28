import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AdminFireService } from '@rds-admin/services/admin-fire.service';
import { AdminApiService } from '@rds-admin/services';

import { CreateUserComponent } from '../../components';
import { UserDomain } from '../../models/users-domain.model';
import { CreateUserConfirmComponent } from './../../components/create-user-confirm/create-user-confirm.component';
import { UserDomainEntityService } from '../../state/user-domain/user-domain-entity.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  newUser: UserDomain;
  constructor(
    private userDomainEntityService: UserDomainEntityService,
    private adminApiService: AdminApiService,
    private adminFireService: AdminFireService,
    private dialog: MatDialog
  ) {
    this.adminApiService.handleAdminLoad();
  }

  ngOnInit(): void {

  }
  openCreateUser() {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '50%',
      minWidth: '450px',
      height: '60%',
      minHeight: '500px',
      data: {
        password: '',
        primaryEmail: '',
        name: {
          givenName: '',
          familyName: '',
          fullName: ''
        },
        dob: '',
        role: '',
      }
    });
    dialogRef.afterClosed().subscribe(
      async result => {
        if (result) {
          const user: Partial<UserDomain> = {
            password: result.password,
            primaryEmail: result.primaryEmail,
            name: {
              givenName: result.name.givenName as string,
              familyName: result.name.familyName as string,
              fullName: ''
            },
            orgUnitPath: '/Dirección/' + result.role + '/' + result.level + result.grade ? '/' : '' + result.grade
          }
          //this.userDomainEntityService.add(result);
          this.newUser = await this.adminApiService.addUser(user);
          this.adminFireService.createUser(this.newUser);
          const dialogConfirm = this.dialog.open(CreateUserConfirmComponent, {
            minWidth: '450px',
            maxHeight: '600px',
            data: { ...this.newUser }
          });

        } else {
          console.log('Creating New User Canceled')
        }

      }
    );

    /*  this.dialog.open(CreateUserComponent, {
       width: '50%',
       minWidth: '450px',
       height: '60%',
       minHeight: '500px',
       data: { ...this.newUser }
     }
     ); */
  }
}

