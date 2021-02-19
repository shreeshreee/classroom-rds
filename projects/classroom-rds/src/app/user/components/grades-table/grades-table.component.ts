import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectionStrategy, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { Score } from '../../models/grades.model';


@Component({
  selector: 'app-grades-table',
  templateUrl: './grades-table.component.html',
  styleUrls: ['./grades-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GradesTableComponent implements AfterViewInit, OnInit {
  @Input() data: Score[];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Score>;
  dataSource: MatTableDataSource<Score>;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['courseName', 'unidad1', 'unidad2', 'unidad3'];

  ngOnInit() {
    console.log(this.data)
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

}
