import { MatDialog } from '@angular/material/dialog';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { GradesBarChartComponent } from './../grades-bar-chart/grades-bar-chart.component';
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
export class GradesTableComponent implements OnInit {
  @Input() data: Score[];
  extraData: Score[];
  final: any;
  displayedColumns = ['courseName', 'unidad1', 'unidad2', 'unidad3', 'final'];
  expandedElement: Score;

  ngOnInit() {
    this.extraData = this.data.splice(this.data.length - 3, 2);
    this.final = this.data.splice(this.data.length - 1, 1);
  }

  getAverage() {
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
    const avg1 = (Math.round(10 * (sum1 / count)) / 10).toString();
    const avg2 = (Math.round(10 * (sum2 / count)) / 10).toString();
    const avg3 = (Math.round(10 * (sum3 / count)) / 10).toString();
    return [avg1, avg2, avg3]
  }

}
