import { trigger, state, style, transition, animate } from '@angular/animations';
import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { faBan, faExclamation, faTimes, faUserGraduate, faUserTie, faCheck, faScrewdriver, faArchive, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

import { AdminFireService } from '@rds-admin/services/admin-fire.service';
import { UserDomain } from '@rds-admin/models/users.model';

const { keys } = Object;
const SELECTED_SLICE_KEY = 'SELECTED_SLICE_KEY';
@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UsersTableComponent implements AfterViewInit, OnInit {
  @Input() data: UserDomain[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<UserDomain>;
  public dataSource: MatTableDataSource<UserDomain>;
  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [/* 'id',  */'photo', 'name', 'primaryEmail', 'org', 'acciones'];
  expandedElement: any;
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
  searching = false;
  isExpansionDetailRow = (i: number, row: UserDomain) => row.hasOwnProperty('detailRow');
  constructor(private adminFireService: AdminFireService) { }
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.searchFormInit();
    //this.dataSource.filterPredicate = this.getFilterPredicate();
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
  onDetails(id) {

  }
  onDbBackup() {
    this.data.map(async user => {
      const userProfile = await (await gapi.client.classroom.userProfiles.get({ userId: user.id })).result;
      const newUser = { ...user, photoUrl: userProfile.photoUrl, permissions: userProfile.permissions || null, isTeacher: userProfile.verifiedTeacher || false }
      await this.adminFireService.createUser(newUser)
    });
  }
  searchFormInit() {
    this.searchForm = new FormGroup({
      courseName: new FormControl('', Validators.pattern('^[a-zA-Z ]+$')),
      creationTimeSearch: new FormControl(''),
    });
  }

  /* this method well be called for each row in table  */
  /* getFilterPredicate() {
    return (row: UserDomain, filters: string) => {
      // split string per '$' to array
      const filterArray = filters.split('$');
      const departureDate = filterArray[0];
      const usersName = filterArray[1];

      const matchFilter = [];

      // Fetch data from row
      const columnDepartureDate = new Date(row.creationTime).toLocaleDateString();
      const columnCourseWorkTitle = row.name;

      // verify fetching data by our searching values
      const customFilterDD = columnDepartureDate.toLowerCase().includes(departureDate);
      const customFilterCW = columnCourseWorkTitle.toLowerCase().includes(usersName);

      // push boolean values into array
      matchFilter.push(customFilterDD);
      matchFilter.push(customFilterCW);

      // return true if all values in array is true
      // else return false
      return matchFilter.every(Boolean);
    };
  } */
  /* applyFilter() {
    const date = this.searchForm.get('creationTimeSearch').value;
    const as = this.searchForm.get('courseName').value;
    // const ds = this.searchForm.get('departureStation').value;
    const fixedDate = new Date(date);
    this.creationTimeSearch = (date === null || date === '') ? '' : fixedDate.toLocaleDateString();
    this.courseName = as === null ? '' : as;

    // create string of our searching values and split if by '$'
    const filterValue = this.creationTimeSearch + '$' + this.courseName;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
 * /

  /*
    unavailableSeats(seats: Seat[]): number {
      return seats.filter(seat => seat.status === SeatStatus.UNAVAILABLE).length;
    }

    soldSeats(seats: Seat[]): number {
      return seats.filter(seat => seat.status === SeatStatus.SOLD).length;
    }

    reserveSeats(seats: Seat[]): number {
      return seats.filter(seat => seat.status === SeatStatus.RESERVE).length;
    } */

}
