import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { Score } from '../../models/score.model';


@Component({
  selector: 'app-grades-table',
  templateUrl: './grades-table.component.html',
  styleUrls: ['./grades-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', display: 'none' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class GradesTableComponent implements AfterViewInit, OnInit {
  @Input() data: Score[];
  extraData: Score[];
  //@ViewChild(MatSort) sort: MatSort;
  //@ViewChild(MatTable) table: MatTable<Score>;
  //dataSource: MatTableDataSource<Score>;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['courseName', 'unidad1', 'unidad2', 'unidad3'];
  expandedElement: Score;
  ngOnInit() {
    /*  const average1: number = this.average(this.data['unidad1']);
     const average2: number = this.average(this.data['unidad2']);
     const average3: number = this.average(this.data['unidad3']); */
    this.extraData = this.data.splice(this.data.length - 2, 2);
    console.log(this.extraData)
    //this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    //this.dataSource.sort = this.sort;
  }


  getAverage() {
    /* const avg1 = this.data.map(t => +t.unidad1).reduce((acc, value) => acc + value, 0);
    const avg2 = this.data.map(t => +t.unidad2).reduce((acc, value) => acc + value, 0);
    const avg3 = this.data.map(t => +t.unidad3).reduce((acc, value) => acc + value, 0); */
    let sum1: number = 0;
    let sum2: number = 0;
    let sum3: number = 0;
    let count = 0;
    this.data.forEach(score => {
      sum1 = + score.unidad1 + sum1;
      sum2 = + score.unidad2 + sum2;
      sum3 = + score.unidad3 + sum3;
      count++;
    });
    const avg1 = (Math.trunc(10 * (sum1 / count)) / 10).toString();
    const avg2 = (sum2 / count).toString();
    const avg3 = (sum3 / count).toString();
    return [avg1, avg2, avg3]
  }
  average(u: string[]): number {
    let sum = 0;
    let count = 0;
    u.map(u1 => {
      sum = +u1 + sum;
      count++;
    })
    return sum / count;
  }
}
