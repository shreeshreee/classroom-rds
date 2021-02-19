import { Component, Input, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { FormGroup } from '@angular/forms';

import { AdminFireService } from '@rds-admin/services';

import { Group } from '~/app/admin/models/users-domain.model';


@Component({
  selector: 'app-group-table',
  templateUrl: './group-table.component.html',
  styleUrls: ['./group-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupTableComponent implements OnInit {
  @Input() data: Group[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Group>;
  dataSource: MatTableDataSource<Group>;
  searchForm: FormGroup;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'directMembersCount', 'email'];
  constructor(private adminFireService: AdminFireService) { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    //this.dataSource.filterPredicate = this.getFilterPredicate();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  onDbBackup() {
    this.data.map(async group => {
      const newGroup: Group = { ...group, grade: null, level: null, priority: null, students: [], teachers: [] }
      await this.adminFireService.createGroup(newGroup);
    });
  }

}
