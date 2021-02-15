import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { faAward, faUserEdit, faSignOutAlt, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { GoogleSheetsDbService } from 'ng-google-sheets-db';
import { Observable } from 'rxjs';

import { User } from '@rds-auth/models/user.model';
import { environment } from '@rds-env/environment';
import { Grades, gradesAttributesMapping } from '../../models/grades.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMenuComponent implements OnInit {
  @Input() user: User;
  @Output() logout = new EventEmitter<any>();
  userGrade$: Observable<Grades>;
  faAward = faAward;
  faUserEdit = faUserEdit;
  faSignOutAlt = faSignOutAlt;
  faCheck = faCheck;
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {


  }
  onLogout(): void {
    this.logout.emit(this.user);
  }
}
