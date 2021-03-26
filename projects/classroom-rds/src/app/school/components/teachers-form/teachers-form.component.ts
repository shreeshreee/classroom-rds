import { ActivatedRoute, Router } from '@angular/router';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { Subject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import states from './../school-form/states.json';

import { PhoneType } from '~/app/auth/models/user-parent.model';
import { User } from '~/app/auth/models/user.model';
import { UserEntityService } from '~/app/store/user/user-entity.service';

@Component({
  selector: 'app-teachers-form',
  templateUrl: './teachers-form.component.html',
  styleUrls: ['./teachers-form.component.scss']
})
export class TeachersFormComponent implements OnInit {
  user$: Observable<User>;
  userId: string;
  phoneKeys;
  phoneEnum = PhoneType;
  statesNames: string[];
  municipiosNames: string[];
  teachersForm: FormGroup;
  raisedElev: number = 12;
  faChevronLeft = faChevronLeft;
  userSub: Subject<Partial<User>> = new Subject<Partial<User>>();
  @Output() updatedUser: EventEmitter<Partial<User>> = new EventEmitter<Partial<User>>();
  constructor(
    private fb: FormBuilder,
    private userEntityService: UserEntityService,
    private routes: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar,
  ) {
    this.userId = this.routes.snapshot.paramMap.get('id');
    this.statesNames = Object.keys(states);
    this.phoneKeys = Object.keys(this.phoneEnum).filter(Number);
  }

  ngOnInit(): void {
    this.user$ = this.userEntityService.entities$.pipe(map(users => users.find(u => u.id == this.userId)))
    this.initForm();
    this.user$.subscribe(user => {
      this.userId = user.id;
      this.teachersForm.patchValue({
        curp: user.curp,
        rfc: user.rfc,
        dob: new Date(user.dob),
        primaryEmail: user.primaryEmail,
        familyName: user.name.familyName,
        givenName: user.name.givenName,
        gender: user.gender,
        parents: user.parents,
      });
    });

  }
  initForm() {
    this.teachersForm = this.fb.group({
      curp: new FormControl(null),
      rfc: new FormControl(null),
      dob: new FormControl(null),
      primaryEmail: new FormControl(null),
      familyName: new FormControl(null),
      givenName: new FormControl(null),
      gender: new FormControl(null),

    });
  }
  sendUser(user: Partial<User>) {
    this.userSub.next(user);
  }
  editUser(user: Partial<User>) {
    //console.log('Partial User:', user)
    this.userEntityService.update(user).subscribe(() => {
      this.snackbar.open('Usuario actualizado', 'ok', { duration: 1000 });
    }, (error: any) => this.snackbar.open(`Error ${error}`, 'ok'));
    // call action or service to edit user on DB
    this.router.navigateByUrl('escuela/profesores');
  }
  onSubmit() {
    // get only updated values
    const postUser: Partial<User> = {};
    this.teachersForm['_forEachChild']((control, name) => {
      if (control.dirty) {
        if (name != 'familyName' && name != 'givenName') {
          postUser[name] = control.value;
        }
      }
      postUser['id'] = this.userId;
    });

    console.log(postUser)
    this.editUser(postUser);
  }
}
