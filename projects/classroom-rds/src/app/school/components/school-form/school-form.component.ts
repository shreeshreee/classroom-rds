import { ActivatedRoute } from '@angular/router';
import { Component, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from '@rds-auth/models/user.model';

import { Subject, Subscription } from 'rxjs';

import states from './states.json';


@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchoolFormComponent implements OnInit {
  @Input() user: Subject<User>;
  @Output() updatedUser: EventEmitter<Partial<User>> = new EventEmitter<Partial<User>>();
  statesNames: string[];
  municipiosNames: string[];
  addressForm: FormGroup;
  hasUnitNumber = false;
  raisedElev: number = 12;
  userSub: Subscription;
  constructor(
    private fb: FormBuilder,
  ) {
    this.statesNames = Object.keys(states);
  }
  ngOnInit() {
    this.initForm();
    this.user.subscribe(user => {
      this.addressForm.patchValue({
        id: user.id,
        curp: user.curp,
        niev: user.niev,
        dayOfBirth: user.dayOfBirth,
        primaryEmail: user.primaryEmail,
        firstName: user.name.givenName,
        lastName: user.name.familyName,
        gender: user.gender,
        /*  parentFirstName: user.parentName.givenName,
         parentLastName: user.parentName.familyName,
         parentCurp: user.parentCurp,
         direccion: null,
         address2: null,
         ciudad: null,
         municipio: null,
         estado: null,
         codigoPostal: null */
      });
    });

  }
  initForm() {
    this.addressForm = this.fb.group({
      id: '',
      curp: new FormControl(null),
      niev: new FormControl(null),
      dayOfBirth: new FormControl(''),
      primaryEmail: new FormControl(null),
      firstName: new FormControl(null),
      lastName: new FormControl(null),
      gender: new FormControl(null, [Validators.required]),
      /*  parentFirstName: new FormControl(null),
       parentLastName: new FormControl(null),
       parentCurp: new FormControl(null),
       direccion: new FormControl(null),
       address2: null,
       ciudad: new FormControl(null),
       municipio: new FormControl(null),
       estado: new FormControl(null),
       codigoPostal: new FormControl(null) */
    });
  }

  onSubmit() {
    const postUser: Partial<User> = {
      id: this.addressForm.value.id,
      curp: this.addressForm.value.curp,
      niev: this.addressForm.value.niev,
      dayOfBirth: this.addressForm.value.dayOfBirth,
      primaryEmail: this.addressForm.value.primaryEmail,
      name: {
        givenName: this.addressForm.value.firstName,
        familyName: this.addressForm.value.lastName,
        fullName: this.addressForm.value.firstName + this.addressForm.value.lastName
      },
      gender: this.addressForm.value.gender,

    };
    console.log(postUser)
    this.updatedUser.emit(postUser);
  }
  onEstadoChange() {
    this.addressForm.controls['estado'].valueChanges.subscribe((estado: string) => {
      this.municipiosNames = Object.values(states[estado]);
    })
  }

}

