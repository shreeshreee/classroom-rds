import { ChangeDetectionStrategy, Component, Inject, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { ChartDataSets, ChartLegendOptions, ChartOptions, ChartType } from 'chart.js';

import { Label, Color, BaseChartDirective } from 'ng2-charts';

import * as pluginDataLabels from 'chartjs-plugin-datalabels';

import * as pluginAnnotations from 'chartjs-plugin-annotation';

import { Score } from '../../models/score.model';

@Component({
  selector: 'app-grades-bar-chart',
  templateUrl: './grades-bar-chart.component.html',
  styleUrls: ['./grades-bar-chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GradesBarChartComponent implements OnInit {
  @Input() data: Score[];
  raisedElev: number = 10;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [/* pluginDataLabels */];
  barChartData: ChartDataSets[];
  barChartLabels: Label[];
  barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    aspectRatio: 2,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  ngOnInit(): void {
    const nameArray: string[] = this.data.map(score => score.courseName);
    const data1: number[] = this.data.map(score => +score.unidad1);
    const data2: number[] = this.data.map(score => +score.unidad2);
    const data3: number[] = this.data.map(score => +score.unidad3);
    const final: number[] = this.data.map(score => +score.final);
    this.barChartLabels = nameArray;
    this.barChartData = [
      { data: data1, label: 'Unidad 1' },
      { data: data2, label: 'Unidad 2' },
      { data: data3, label: 'Unidad 3' },
      { data: final, label: 'Promedio final', type: 'line' },
    ];
  }
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
