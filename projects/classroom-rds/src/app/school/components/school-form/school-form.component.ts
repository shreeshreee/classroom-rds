import { ActivatedRoute } from '@angular/router';
import { Component, ChangeDetectionStrategy, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { faTrashAlt, faPlus } from '@fortawesome/free-solid-svg-icons';

import { User } from '@rds-auth/models/user.model';

import { Subject, Subscription } from 'rxjs';

import states from './states.json';

import { PhoneType } from '~/app/auth/models/user-parent.model';


@Component({
  selector: 'app-school-form',
  templateUrl: './school-form.component.html',
  styleUrls: ['./school-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchoolFormComponent implements OnInit {
  @Input() user: Subject<User>;
  @Output() updatedUser: EventEmitter<Partial<User>> = new EventEmitter<Partial<User>>();
  phoneKeys;
  phoneEnum = PhoneType;
  statesNames: string[];
  municipiosNames: string[];
  studentForm: FormGroup;
  parentForm: FormGroup;
  showParentForm = false;
  raisedElev: number = 12;
  userSub: Subscription;
  faTrashAlt = faTrashAlt;
  faPlus = faPlus;
  private userId;
  constructor(
    private fb: FormBuilder,
  ) {
    this.statesNames = Object.keys(states);
    this.phoneKeys = Object.keys(this.phoneEnum).filter(Number);
  }
  ngOnInit() {
    this.initForm();
    this.user.subscribe(user => {
      this.userId = user.id;
      this.studentForm.patchValue({
        curp: user.curp,
        niev: user.niev,
        dob: user.dob,
        primaryEmail: user.primaryEmail,
        familyName: user.name.familyName,
        givenName: user.name.givenName,
        gender: user.gender,
        parents: user.parents,
      });
      /* user.parents.forEach(parent => {
        this.patchParentForm(parent)
      }) */
    });
  }


  onSubmit() {
    // get only updated values
    const postUser: Partial<User> = {};
    this.studentForm['_forEachChild']((control, name) => {
      if (control.dirty) {
        if (name != 'familyName' && name != 'givenName') {
          postUser[name] = control.value;
        }
      }
      postUser['id'] = this.userId;
    });

    console.log(postUser)
    this.updatedUser.emit(postUser);
  }
  onEstadoChange(j: number) {
    this.studentForm.parent[j].controls['state'].valueChanges.subscribe((estado: string) => {
      this.municipiosNames = Object.values(states[estado]);
    })
  }

  /* onSubmitParent() {
    // get only updated values
    const postUser: Partial<User> = {};
    const postParent: Partial<Parent> = {};
    this.parentForm['_forEachChild']((control, name) => {
      if (control.dirty) {
        if (name != 'relationType' || name != 'relationCustom') {
          postParent[name] = control.value;
        }
      }
    });
    const postRelation: any = {
      type: this.parentForm.get('relationType').value,
      custom: this.parentForm.get('relationCustom').value
    };
    postParent.relation = postRelation;
    postUser.id = this.userId;
    postUser.parents.push(postParent);
    console.log(postUser)
    this.updatedUser.emit(postUser);
  } */
  initForm() {
    this.studentForm = this.fb.group({
      curp: new FormControl(null),
      niev: new FormControl(null),
      dayOfBirth: new FormControl(''),
      primaryEmail: new FormControl(null, [Validators.required, Validators.email]),
      familyName: new FormControl(null, [Validators.required]),
      givenName: new FormControl(null, [Validators.required]),
      gender: new FormControl(null, [Validators.required]),
      parents: this.fb.array([]),
    });
    /* this.parentForm = this.fb.group({
      familyName: '',
      givenName: '',
      curp: '',
      email: new FormControl(null),
      phones: this.fb.array([]),
      streetAddress: new FormControl(null),
      city: new FormControl(null),
      municipio: new FormControl(null),
      state: new FormControl(null),
      postalCode: new FormControl(null),
      relationType: new FormControl(null, [Validators.required]),
      relationCustom: new FormControl(null)
    }); */
  }
  get parents(): FormArray {
    return this.studentForm.get('parents') as FormArray;
  }
  newParent(): FormGroup {
    return this.fb.group({
      userId: '',
      givenName: '',
      familyName: '',
      curp: '',
      gender: '',
      relationType: '',
      relationCustom: '',
      phones: [],
      email: '',
      streetAddress: '',
      city: '',
      postalCode: '',
      municipio: '',
      state: '',
    });
  }
  addParent() {
    this.parents.push(this.newParent());
  }
  removeParent(j: number) {
    this.parents.removeAt(j);
  }
  get phones(): FormArray {
    return this.parentForm.get('phones') as FormArray;
  }
  newPhone(): FormGroup {
    return this.fb.group({
      value: '',
      type: '',
      primary: '',
      customType: '',
    })
  }
  addPhone() {
    this.phones.push(this.newPhone());
  }
  removeSkill(i: number) {
    this.phones.removeAt(i);
  }

}

