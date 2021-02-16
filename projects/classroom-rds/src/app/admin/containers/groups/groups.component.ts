import { Group } from './../../models/users.model';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GroupEntityService } from '../../state/group/group-entity.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsComponent implements OnInit {
  groups$: Observable<Group[]>;
  loaded$: Observable<boolean>;
  constructor(
    private groupEntityService: GroupEntityService,
  ) {
    this.loaded$ = this.groupEntityService.loaded$;
  }
  ngOnInit(): void {
    this.groups$ = this.groupEntityService.entities$
      .pipe(map(groups => {
        if (!groups) {
          this.groupEntityService.getAll();
        }
        return groups;
      }));
  }



}
