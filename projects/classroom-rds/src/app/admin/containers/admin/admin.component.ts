import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { AdminFireService } from '@rds-admin/services/admin-fire.service';
import { AdminApiService } from '@rds-admin/services';

import { CreateUserComponent } from '../../components';
import { UserDomain } from '../../models/users-domain.model';
import { CreateUserConfirmComponent } from './../../components/create-user-confirm/create-user-confirm.component';
import { CreateUserErrorComponent } from '../../components/create-user-error/create-user-error.component';
import { UserDomainEntityService } from '../../state/user-domain/user-domain-entity.service';

import { User } from '~/app/auth/models/user.model';


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
    const userDomain: User = {
      id: '',
      password: '',
      primaryEmail: '',
      name: {
        givenName: '',
        familyName: '',
        fullName: ''
      },
      gender: '',
      dob: '',
      role: '',
    };
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '50%',
      minWidth: '450px',
      height: '60%',
      minHeight: '500px',
      data: { ...userDomain }
    });
    dialogRef.afterClosed().subscribe(
      async result => {
        if (result) {
          const googleUser: Partial<UserDomain> = {
            password: result.password,
            primaryEmail: result.primaryEmail,
            name: {
              givenName: result.name.givenName as string,
              familyName: result.name.familyName as string,
              fullName: result.name.givenName + ' ' + result.name.familyName
            },
            orgUnitPath: '/Dirección/' + result.role + result.level ? '/' : '' + result.level + result.grade ? '/' : '' + result.grade
          }
          //this.userDomainEntityService.add(result);
          this.newUser = await this.adminApiService.addUser(googleUser);
          const user: Partial<User> = {
            id: this.newUser.id,
            primaryEmail: this.newUser.primaryEmail,
            isAdmin: this.newUser.isAdmin,
            isTeacher: (result.role == 'Profesores'),
            orgUnitPath: this.newUser.orgUnitPath,
            password: result.password,
            role: result.role,
            level: result.level,
            grade: result.grade,
            archived: false,
            gender: result.gender,
            name: { givenName: this.newUser.name.givenName, familyName: this.newUser.name.familyName, fullName: result.name.givenName + ' ' + result.name.familyName },
            customerId: this.newUser.customerId,
            suspended: false,
            suspensionReason: '',
            curp: '',
            rfc: '',
            dob: result.dob,
            isNew: true,
            isOnline: false,
            isVerified: false,
            authPhotoUrl: '',
            photoUrl: '',
            displayName: result.name.givenName + ' ' + result.name.familyName,
            creationTime: this.newUser.creationTime,
            lastLoginTime: '',
            niev: '',
            parents: [{ name: { fullName: '', givenName: '', familyName: '' }, city: '', curp: '', email: '', gender: '' }],
            permission: '',
          }
          this.adminFireService.createUser(user).then(
            () => {
              this.dialog.open(CreateUserConfirmComponent, {
                minWidth: '450px',
                maxHeight: '600px',
                data: { ...user }
              });
              () => {
                this.dialog.open(CreateUserErrorComponent, {
                  minWidth: '450px',
                  maxHeight: '600px',
                  data: { errorMessage: 'Ocurrió un error' }
                });
              }
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

