import { ActivatedRoute } from '@angular/router';
import { Component, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
  @Output() updatedUser: EventEmitter<User> = new EventEmitter<User>();
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
    this.user.subscribe(user => {
      this.initForm(user)
    });

  }
  initForm(defaultUser?: User) {
    this.addressForm = this.fb.group({
      curp: defaultUser.curp || null,
      niev: defaultUser.niev || null,
      dayOfBirth: [defaultUser.dayOfBirth || null, Validators.required],
      primaryEmail: [defaultUser.primaryEmail || null, Validators.required],
      firstName: [defaultUser.name.givenName || null, Validators.required],
      lastName: [defaultUser.name.familyName || null, Validators.required],
      gender: [defaultUser.gender || null, Validators.required],
      parentFirstName: [defaultUser.parentName.givenName || null, Validators.required],
      parentLastName: [defaultUser.parentName.familyName || null, Validators.required],
      parentCurp: [defaultUser.parentCurp || null, Validators.required],
      direccion: [null, Validators.required],
      address2: null,
      ciudad: [null, Validators.required],
      municipio: [null, Validators.required,],
      estado: [null, Validators.required],
      codigoPostal: [null, Validators.compose([
        Validators.required, Validators.minLength(5), Validators.maxLength(5)])
      ],
      shipping: ['free', Validators.required]
    });
  }

  onSubmit() {
    const variable = this.addressForm.value;
    this.updatedUser.emit(variable)
  }
  onEstadoChange() {
    this.addressForm.controls['estado'].valueChanges.subscribe((estado: string) => {
      this.municipiosNames = Object.values(states[estado]);
    })
  }

}

