import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import { faBan, faExclamation, faTimes, faUserGraduate, faUserTie, faCheck, faScrewdriver, faArchive, faUserPlus, faBullhorn, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEdit, } from '@fortawesome/free-regular-svg-icons';

import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ListCoursesResponse } from './../../models/course.model';
import { Course } from '../../models/course.model';
import { CourseEntityService } from '../../services/course-entity.service';
import { AppState } from './../../../store/app.state';



@Component({
  selector: 'app-course-table',
  templateUrl: './courses-table.component.html',
  styleUrls: ['./courses-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class CoursesTableComponent implements AfterViewInit, OnInit {
  fullCourses: Course[];
  public dataSource: MatTableDataSource<Course>;
  @Output() course = new EventEmitter<Course>();
  @Output() teacherInCourse = new EventEmitter<Course>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Course>;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['courseState', 'name', 'section', 'room', 'acciones'];
  public searchForm: FormGroup;
  public creationTimeSearch = '';
  public courseName = '';
  select;
  faEdit = faEdit;
  faStudents = faUserGraduate;
  faTeachers = faUserTie;
  faExclamation = faExclamation;
  faCheck = faCheck;
  faFileArchive = faArchive;
  faScrewdriver = faScrewdriver;
  faTimes = faTimes;
  faUserPlus = faUserPlus;
  faBan = faBan;
  faPlus = faPlus;
  faBullhorn = faBullhorn;
  searching = false;
  constructor(
    private coursesEntityService: CourseEntityService,
  ) {
    //this.coursesEntityService.entities$.subscribe(courses => this.fullcourses = courses);
    //this.coursesEntityService.entities$.pipe(map(courses => this.fullCourses = courses));
  }
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.fullCourses);
    this.searchFormInit();
    this.dataSource.filterPredicate = this.getFilterPredicate();
  }


  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  onDetails(course: Course): void {
    this.course.emit(course);
  }
  onAddTeacher(course: Course): void {
    this.teacherInCourse.emit(course);
  }
  onActivated(course: Course): void {
    this.course.emit(course);
  }
  searchFormInit(): void {
    this.searchForm = new FormGroup({
      courseName: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      creationTimeSearch: new FormControl(''),
    });
  }

  /* this method well be called for each row in table  */
  getFilterPredicate() {
    return (row: Course, filters: string) => {
      // split string per '$' to array
      const filterArray = filters.split('$');
      const departureDate = filterArray[0];
      const coursesName = filterArray[1];

      const matchFilter = [];

      // Fetch data from row
      const columnDepartureDate = new Date(row.course.creationTime).toLocaleDateString();
      const columnCourseWorkTitle = row.course.name;

      // verify fetching data by our searching values
      const customFilterDD = columnDepartureDate.toLowerCase().includes(departureDate);
      const customFilterCW = columnCourseWorkTitle.toLowerCase().includes(coursesName);

      // push boolean values into array
      matchFilter.push(customFilterDD);
      matchFilter.push(customFilterCW);

      // return true if all values in array is true
      // else return false
      return matchFilter.every(Boolean);
    };
  }
  applyFilter() {
    const date = this.searchForm.get('creationTimeSearch').value;
    const as = this.searchForm.get('courseName').value;
    // const ds = this.searchForm.get('departureStation').value;
    const fixedDate = new Date(date);
    this.creationTimeSearch = (date === null || date === '') ? '' : fixedDate.toLocaleDateString();
    this.courseName = as === null ? '' : as;

    // create string of our searching values and split if by '$'
    const filterValue = this.creationTimeSearch + '$' + this.courseName /*+ '$' + this.arrivalStation*/;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
