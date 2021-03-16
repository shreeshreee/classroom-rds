import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

import { faCompressAlt, faCompressArrowsAlt, faExpandAlt, faExpandArrowsAlt, faStar } from '@fortawesome/free-solid-svg-icons';

import { Grade } from '../../models/grade.model';

@Component({
  selector: 'app-grades-list',
  templateUrl: './grades-list.component.html',
  styleUrls: ['./grades-list.component.scss']
})
export class GradesListComponent implements OnInit {
  @Input() data: Grade;
  @ViewChild(MatAccordion) accordion: MatAccordion;
  faCompressArrowsAlt = faCompressArrowsAlt;
  faExpandArrowsAlt = faExpandArrowsAlt;
  faStar = faStar;
  raisedElev = 12;
  constructor() { }

  ngOnInit(): void {
  }

}
